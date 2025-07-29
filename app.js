const clientId = 'YourTwitchClientId';
const alertSound = document.getElementById('alert-sound');
const requestList = document.getElementById('request-list');
const chatLog = document.getElementById('chat-log');
const nextBtn = document.getElementById('next-btn');
const clearBtn = document.getElementById('clear-btn');
const usernameSpan = document.getElementById('username');
const avatarImg = document.getElementById('avatar');
const statusSpan = document.getElementById('status');

let requests = [];
let currentIndex = 0;
let client = null;

// Extraer token de la URL hash (#access_token=...)
function getTokenFromUrl() {
  const hash = window.location.hash;
  if (!hash || !hash.includes('access_token')) return null;
  const params = new URLSearchParams(hash.substring(1));
  return params.get('access_token');
}

const token = getTokenFromUrl();

if (!token) {
  document.body.innerHTML = '<h2 style="color:#fff; text-align:center; margin-top:40px;">Authentication failed. Please login again.</h2>';
  throw new Error('No access token found');
}

// Obtener información del usuario
async function fetchUserInfo() {
  try {
    const res = await fetch('https://api.twitch.tv/helix/users', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Client-Id': clientId
      }
    });
    const data = await res.json();
    if (data.data && data.data.length > 0) {
      const user = data.data[0];
      usernameSpan.textContent = user.display_name;
      avatarImg.src = user.profile_image_url;
      return user.login.toLowerCase(); // Canal en minúscula
    } else {
      throw new Error('User data not found');
    }
  } catch (err) {
    console.error('Failed to fetch user info', err);
    statusSpan.textContent = 'Failed to load user info';
    return null;
  }
}

// Mostrar mensaje en chat log
function displayMessage(user, message) {
  const li = document.createElement('li');
  li.textContent = `${user}: ${message}`;
  chatLog.appendChild(li);
  chatLog.scrollTop = chatLog.scrollHeight;
}

// Agregar solicitud
function addRequest(levelId, user) {
  // Evitar duplicados
  if (requests.some(r => r.id === levelId)) return;

  const newRequest = { id: levelId, user, used: false };
  requests.push(newRequest);

  alertSound.play().catch(err => {
    console.warn('Could not play alert sound:', err);
  });

  renderRequests();

  // Si es el primero, copiarlo automáticamente
  if (requests.length === 1) {
    copyRequest(newRequest);
    newRequest.used = true;
    renderRequests();
  }
}

// Copiar ID al portapapeles
function copyRequest(req) {
  navigator.clipboard.writeText(req.id).then(() => {
    alert(`Copied ID ${req.id} to clipboard`);
  }).catch(() => {
    alert('Failed to copy to clipboard');
  });
}

// Renderizar la lista de solicitudes
function renderRequests() {
  requestList.innerHTML = '';
  requests.forEach((req, i) => {
    const li = document.createElement('li');
    li.textContent = `ID: ${req.id} (by ${req.user})`;

    if (req.used) {
      li.style.color = 'red';
      li.style.textDecoration = 'line-through';
    } else {
      li.style.color = 'green';
    }

    if (i === currentIndex % requests.length && !req.used) {
      li.style.fontWeight = 'bold';
    }

    requestList.appendChild(li);
  });
}

// Conectar a Twitch chat
async function connectToChat(channel) {
  statusSpan.textContent = 'Connecting to chat...';

  client = new tmi.Client({
    options: { debug: true },
    connection: { reconnect: true },
    identity: {
      username: channel,
      password: `oauth:${token}`
    },
    channels: [channel]
  });

  client.on('connected', (addr, port) => {
    statusSpan.textContent = `Connected to ${addr}:${port}`;
  });

  client.on('disconnected', reason => {
    statusSpan.textContent = `Disconnected: ${reason}`;
  });

  client.on('reconnect', () => {
    statusSpan.textContent = 'Reconnecting...';
  });

  client.on('message', (channel, tags, message, self) => {
    if (self) return;

    displayMessage(tags['display-name'], message);

    // Detectar comando !id <número>
    const match = message.match(/!id\s+(\d+)/i);
    if (match) {
      const levelId = match[1];
      addRequest(levelId, tags['display-name']);
    }
  });

  try {
    await client.connect();
  } catch (err) {
    console.error('Failed to connect', err);
    statusSpan.textContent = 'Failed to connect to chat';
  }
}

// Botón "Next ID"
nextBtn.onclick = () => {
  if (requests.length === 0) {
    alert('No requests in the list.');
    return;
  }

  // Buscar el siguiente ID no usado
  let found = false;
  for (let i = 0; i < requests.length; i++) {
    const idx = (currentIndex + i) % requests.length;
    if (!requests[idx].used) {
      currentIndex = idx;
      found = true;
      break;
    }
  }

  if (!found) {
    alert('No more unused IDs.');
    return;
  }

  const currentRequest = requests[currentIndex];
  copyRequest(currentRequest);
  requests[currentIndex].used = true;
  currentIndex = (currentIndex + 1) % requests.length;
  renderRequests();
};

// Botón "Clear All"
clearBtn.onclick = () => {
  if (confirm('Are you sure you want to clear all requests?')) {
    requests = [];
    currentIndex = 0;
    renderRequests();
  }
};

// Inicio: fetch user info y conectar chat
(async () => {
  const channel = await fetchUserInfo();
  if (channel) {
    connectToChat(channel);
  }
})();
