# ⚡ Inicio Rápido - Despliegue en 5 Minutos

## 🎯 Objetivo

Desplegar tu portafolio en Vercel conectado a GitHub en menos de 5 minutos.

---

## 📋 Requisitos Previos

- [ ] Cuenta de GitHub
- [ ] Cuenta de Vercel (puedes usar tu cuenta de GitHub)
- [ ] Git instalado
- [ ] Node.js instalado (para Vercel CLI)

---

## 🚀 Opción 1: Despliegue Automático (Más Fácil)

### Paso 1: Subir a GitHub (2 minutos)

```bash
# 1. Abre la terminal en la carpeta portfolio-clean
cd portfolio-clean

# 2. Inicializa Git
git init

# 3. Agrega todos los archivos
git add .

# 4. Haz el primer commit
git commit -m "Initial commit: Professional Portfolio"

# 5. Crea un repositorio en GitHub (ve a github.com/new)
# Nombre sugerido: portfolio-qa

# 6. Conecta con GitHub (reemplaza TU-USUARIO y NOMBRE-REPO)
git remote add origin https://github.com/TU-USUARIO/NOMBRE-REPO.git
git branch -M main
git push -u origin main
```

### Paso 2: Conectar con Vercel (2 minutos)

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Sign Up" o "Log In" con GitHub
3. Haz clic en "Add New Project"
4. Selecciona tu repositorio `portfolio-qa`
5. Haz clic en "Deploy"

### Paso 3: ¡Listo! (1 minuto)

- Tu sitio estará en: `https://tu-proyecto.vercel.app`
- Cada push a GitHub desplegará automáticamente

---

## 🚀 Opción 2: Despliegue con CLI (Más Rápido)

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 2: Desplegar

```bash
# 1. Navega a la carpeta
cd portfolio-clean

# 2. Inicia sesión
vercel login

# 3. Despliega
vercel --prod
```

### Paso 3: ¡Listo!

Tu sitio estará en línea en menos de 2 minutos.

---

## 🚀 Opción 3: Script Automático (Windows)

```bash
# Ejecuta el script
deploy.bat
```

El script hará todo automáticamente.

---

## ✏️ Personalización Rápida

Antes de desplegar, personaliza estos archivos:

### 1. Usuario de GitHub

Abre `index.html` y busca (línea ~115):
```html
<input type="text" id="githubUsername" value="octocat">
```
Cambia `"octocat"` por tu usuario.

### 2. Redes Sociales

Busca "SOCIAL MEDIA SECTION" y actualiza:
```html
<a href="https://www.linkedin.com/in/TU-PERFIL">
<a href="https://github.com/TU-USUARIO">
<a href="https://twitter.com/TU-USUARIO">
<a href="mailto:tu.email@ejemplo.com">
```

### 3. Foto de Perfil

Reemplaza: `assets/images/profile/profile-placeholder.jpg`

---

## 🔄 Actualizar el Sitio

### Si usas GitHub + Vercel:

```bash
git add .
git commit -m "Update: descripción de cambios"
git push
```

Vercel desplegará automáticamente.

### Si usas Vercel CLI:

```bash
vercel --prod
```

---

## 📊 Ver tu Sitio

Después del despliegue:

```bash
# Abrir en el navegador
vercel open
```

O visita: `https://tu-proyecto.vercel.app`

---

## 🎯 Checklist Pre-Despliegue

- [ ] Actualizar usuario de GitHub
- [ ] Cambiar enlaces de redes sociales
- [ ] Actualizar email
- [ ] Reemplazar foto de perfil
- [ ] Probar localmente: `python -m http.server 8000`

---

## 🐛 Problemas Comunes

### "Git no reconocido"
Instala Git: [git-scm.com](https://git-scm.com)

### "Vercel no reconocido"
Instala Node.js: [nodejs.org](https://nodejs.org)
Luego: `npm install -g vercel`

### "Error al hacer push a GitHub"
Verifica que hayas creado el repositorio en GitHub primero.

---

## 🎉 ¡Listo!

Tu portafolio profesional está en línea y listo para impresionar.

### Próximos Pasos:

1. ✅ Comparte tu URL en LinkedIn
2. ✅ Agrégala a tu CV
3. ✅ Configura un dominio personalizado (opcional)
4. ✅ Configura el formulario de contacto (EmailJS/Formspree)

---

**¿Necesitas ayuda detallada?**
Lee: `DEPLOY_VERCEL.md`
