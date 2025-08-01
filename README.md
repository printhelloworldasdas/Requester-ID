# 🎮 Requester ID
[![License](https://img.shields.io/github/license/printhelloworldasdas/Requester-ID?color=8e44ad)](LICENSE)
[![Issues](https://img.shields.io/github/issues/printhelloworldasdas/Requester-ID?color=9b59b6)](https://github.com/printhelloworldasdas/Requester-ID/issues)
[![Stars](https://img.shields.io/github/stars/printhelloworldasdas/Requester-ID?style=social&color=8e44ad)](https://github.com/printhelloworldasdas/Requester-ID/stargazers)

---

## 🌐 Language / Idioma
[![🇪🇸 Español](https://img.shields.io/badge/🇪🇸%20Español-8e44ad?style=for-the-badge)](#-español) 
[![🇬🇧🇺🇸 English](https://img.shields.io/badge/🇬🇧🇺🇸%20English-8e44ad?style=for-the-badge)](#-english)

---

# 🇪🇸 Español
> 🛠️ **Requester ID** es una herramienta creada para **streamers de Geometry Dash** que facilita la gestión y organización de solicitudes de niveles enviadas desde el chat de Twitch.

---

### ✨ Características
- 📌 **Captura automática** de IDs desde el chat 
- 🎮 **Lista organizada** de solicitudes 
- ⚡ **Copia rápida** con un solo clic 
- 🔔 **Alertas sonoras** para nuevas solicitudes 
- 🔑 **Inicio de sesión seguro** con Twitch OAuth2  

---

### 🌐 Web Oficial
[![Official Website](https://img.shields.io/badge/🌐%20Web%20Oficial-8e44ad?style=for-the-badge&logoColor=white)](https://requester-bot.vercel.app/)
> 🚀 La web está hosteada con [Vercel](https://vercel.com).

---

### 📂 Estructura del Proyecto
```
Requester-ID/
├──assets/
│   └── Order-up-bell-sound-effect.mp3
├── libs/
│   └── tmi.min.js
├── LICENSE
├── README.md
├── app.js
├── index.html
├── requesterchat.html
├── styles.css
└── vercel.json
```

---

## 🖥️ Cómo hostear la web!

<details><summary>🚀 Pasos para hostear con Vercel</summary>

1. **Fork** del repositorio.  
   <br>
   [![🍴 Hacer Fork](https://img.shields.io/badge/🍴%20Hacer%20Fork-grey?style=for-the-badge&logo=github&logoColor=white&color=2c2c2c)](https://github.com/printhelloworldasdas/Requester-ID/fork)
2. Ve a **[Vercel](https://vercel.app)**, inicia sesión y selecciona el repositorio que has creado.  
3. Copia la URL del deploy y **añade al final** `/requester` para que funcione.  
   - Ejemplo: `https://tu-usuario.vercel.app/requester`  
4. Ve a **[Twitch Apps](https://dev.twitch.tv/console/apps)** y crea una nueva aplicación:  
   - Ponle el nombre que quieras.  
   - En **URL de redireccionamiento de OAuth** pega la URL con `/requester`.  
   - En **Categoría** elige **Browser Extension**.  
   - En **Tipo de cliente** elige **Público**.  
   - Pulsa **Crear**.  
5. Pulsa **Administrar** en la app creada y copia el **ID de cliente**.  
6. En tu fork, abre `index.html` y `app.js`:  
   - Busca `YourTwitchClientId` en ambos archivos.  
   - Reemplázalo por el ID de cliente que copiaste.  
   - Guarda y haz push.  
7. Espera a que Vercel actualice el deploy automáticamente.  
8. Ya está listo para usar. 🎉

</details>

<details><summary>📁 Pasos para hostear con GitHub Pages</summary>
## Proximamente...
</details>

---

Creado con 💜 por Mr.Penguin_Official/printhelloworldasdas

---

# 🇬🇧/🇺🇸 English
> 🛠️ **Requester ID** is a tool created for **Geometry Dash streamers** that makes it easier to manage and organize level requests sent from the Twitch chat.

---

### ✨ Features
- 📌 **Automatic capture** of IDs from the chat 
- 🎮 **Organized list** of requests 
- ⚡ **Quick copy** with a single click 
- 🔔 **Sound alerts** for new requests 
- 🔑 **Secure login** with Twitch OAuth2  

---

### 🌐 Official Website
[![Official Website](https://img.shields.io/badge/🌐%20Official%20Website-8e44ad?style=for-the-badge&logoColor=white)](https://requester-bot.vercel.app/)
> 🚀 The website is hosted with [Vercel](https://vercel.com).

---

### 📂 Project Structure
```
Requester-ID/
├──assets/
│   └── Order-up-bell-sound-effect.mp3
├── libs/
│   └── tmi.min.js
├── LICENSE
├── README.md
├── app.js
├── index.html
├── requesterchat.html
├── styles.css
└── vercel.json
```

---

## 🖥️ How to host the website!

<details><summary>🚀 Steps to host with Vercel</summary>

1. **Fork** the repository.  
   <br>
   [![🍴 Fork this repo](https://img.shields.io/badge/🍴%20Fork%20this%20repo-grey?style=for-the-badge&logo=github&logoColor=white&color=2c2c2c)](https://github.com/printhelloworldasdas/Requester-ID/fork)
2. Go to **[Vercel](https://vercel.app)**, log in, and select the repository you forked.  
3. Copy the deployment URL and **append** `/requester` to the end so it works.  
   - Example: `https://your-username.vercel.app/requester`  
4. Go to **[Twitch Apps](https://dev.twitch.tv/console/apps)** and create a new application:  
   - Give it any name.  
   - In **OAuth Redirect URL** paste the URL with `/requester`.  
   - For **Category** choose **Browser Extension**.  
   - For **Client Type** choose **Public**.  
   - Click **Create**.  
5. Click **Manage** on the app you created and copy the **Client ID**.  
6. In your fork, open `index.html` and `app.js`:  
   - Find `YourTwitchClientId` in both files.  
   - Replace it with the copied Client ID.  
   - Save and push.  
7. Wait for Vercel to auto-update the deploy.  
8. All set, ready to use! 🎉

</details>

<details><summary>📁 Steps to host with GitHub Pages</summary>
## Soon...
</details>

---

Created with 💜 by Mr.Penguin_Official/printhelloworldasdas
