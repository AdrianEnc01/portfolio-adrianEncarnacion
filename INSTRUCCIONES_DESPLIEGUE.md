# 🎯 INSTRUCCIONES PASO A PASO - DESPLIEGUE A VERCEL

## 📁 Tu Proyecto Está Listo

La carpeta `portfolio-clean` contiene tu portafolio optimizado y listo para desplegar.

---

## 🚀 MÉTODO RECOMENDADO: GitHub + Vercel

### PASO 1: Crear Repositorio en GitHub

1. **Abre tu navegador** y ve a [github.com](https://github.com)

2. **Inicia sesión** con tu cuenta de GitHub

3. **Crea un nuevo repositorio:**
   - Haz clic en el botón "+" (arriba derecha) → "New repository"
   - **Repository name**: `portfolio-qa` (o el nombre que prefieras)
   - **Description**: "Professional Portfolio - QA & Software Engineering Specialist"
   - **Visibility**: Public
   - **NO marques** "Initialize this repository with a README"
   - Haz clic en "Create repository"

4. **Copia la URL** del repositorio que aparece (algo como: `https://github.com/TU-USUARIO/portfolio-qa.git`)

---

### PASO 2: Subir tu Código a GitHub

1. **Abre PowerShell o Terminal** en Windows

2. **Navega a la carpeta del proyecto:**
   ```powershell
   cd "C:\Users\adencarnacion\OneDrive - GBM Corporacion\Escritorio\Portafolio_AdrianEncarnacion\portfolio-clean"
   ```

3. **Ejecuta estos comandos uno por uno:**

   ```powershell
   # Inicializar Git
   git init
   
   # Agregar todos los archivos
   git add .
   
   # Hacer el primer commit
   git commit -m "Initial commit: Professional Portfolio"
   
   # Conectar con GitHub (REEMPLAZA con tu URL)
   git remote add origin https://github.com/TU-USUARIO/portfolio-qa.git
   
   # Cambiar a rama main
   git branch -M main
   
   # Subir a GitHub
   git push -u origin main
   ```

4. **Verifica en GitHub** que tus archivos se hayan subido correctamente

---

### PASO 3: Conectar con Vercel

1. **Ve a [vercel.com](https://vercel.com)**

2. **Inicia sesión:**
   - Haz clic en "Sign Up" o "Log In"
   - Selecciona "Continue with GitHub"
   - Autoriza a Vercel para acceder a tu GitHub

3. **Importar tu proyecto:**
   - Haz clic en "Add New..." → "Project"
   - Busca tu repositorio `portfolio-qa`
   - Haz clic en "Import"

4. **Configurar el proyecto:**
   - **Project Name**: portfolio-qa (o el que prefieras)
   - **Framework Preset**: Other
   - **Root Directory**: ./ (dejar como está)
   - **Build Command**: (dejar vacío)
   - **Output Directory**: ./ (dejar como está)
   - **Install Command**: (dejar vacío)

5. **Desplegar:**
   - Haz clic en "Deploy"
   - Espera 1-2 minutos mientras Vercel despliega tu sitio

6. **¡Listo!**
   - Verás un mensaje de "Congratulations!"
   - Tu sitio estará en: `https://portfolio-qa-XXXXX.vercel.app`
   - Haz clic en "Visit" para ver tu portafolio en línea

---

## 🎉 ¡Tu Portafolio Está en Línea!

### URLs Importantes:

- **Tu sitio**: `https://tu-proyecto.vercel.app`
- **Dashboard de Vercel**: [vercel.com/dashboard](https://vercel.com/dashboard)
- **Tu repositorio**: `https://github.com/TU-USUARIO/portfolio-qa`

---

## 🔄 Cómo Actualizar tu Portafolio

Cada vez que quieras hacer cambios:

1. **Edita los archivos** en tu computadora

2. **Sube los cambios a GitHub:**
   ```powershell
   cd portfolio-clean
   git add .
   git commit -m "Update: descripción de tus cambios"
   git push
   ```

3. **Vercel desplegará automáticamente** los cambios en 1-2 minutos

---

## ✏️ Personalizaciones Importantes

### 1. Usuario de GitHub

**Archivo**: `index.html` (línea ~115)

Busca:
```html
<input type="text" id="githubUsername" value="octocat">
```

Cambia a:
```html
<input type="text" id="githubUsername" value="TU-USUARIO-GITHUB">
```

### 2. Redes Sociales

**Archivo**: `index.html` (busca "SOCIAL MEDIA SECTION")

Actualiza estos enlaces:
```html
<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/TU-PERFIL" target="_blank">

<!-- GitHub -->
<a href="https://github.com/TU-USUARIO" target="_blank">

<!-- Twitter -->
<a href="https://twitter.com/TU-USUARIO" target="_blank">

<!-- Email -->
<a href="mailto:tu.email@ejemplo.com">
```

### 3. Formulario de Contacto

**Archivo**: `index.html` (busca "CONTACT SECTION")

Actualiza el email:
```html
<a href="mailto:TU-EMAIL@ejemplo.com">
```

### 4. Foto de Perfil

Reemplaza el archivo:
```
assets/images/profile/profile-placeholder.jpg
```

Con tu foto profesional (recomendado: 800x800px, formato JPG o PNG)

### 5. Experiencia Profesional

**Archivo**: `data/experience.json`

Actualiza con tu experiencia real en GBM y otros trabajos.

---

## 📧 Configurar Formulario de Contacto (Opcional)

### Opción 1: EmailJS (Gratis)

1. Regístrate en [emailjs.com](https://www.emailjs.com)
2. Crea un servicio de email
3. Obtén tu Service ID y Template ID
4. Sigue las instrucciones en `README.md`

### Opción 2: Formspree (Gratis)

1. Regístrate en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario
3. Obtén tu Form ID
4. Sigue las instrucciones en `README.md`

---

## 🌐 Dominio Personalizado (Opcional)

Si quieres usar tu propio dominio (ej: `adrianencarnacion.com`):

1. **Compra un dominio** en Namecheap, Google Domains, etc.

2. **En Vercel Dashboard:**
   - Ve a tu proyecto
   - Settings → Domains
   - Add Domain
   - Ingresa tu dominio

3. **Configura DNS** según las instrucciones de Vercel

---

## 📊 Monitorear tu Sitio

### Analytics

Vercel proporciona analytics gratis:
- Dashboard → Tu proyecto → Analytics
- Verás: visitas, países, dispositivos, etc.

### Logs

Para ver errores o problemas:
- Dashboard → Tu proyecto → Deployments
- Haz clic en cualquier despliegue → View Function Logs

---

## 🐛 Solución de Problemas

### "Git no es reconocido"

Instala Git:
1. Ve a [git-scm.com](https://git-scm.com)
2. Descarga e instala
3. Reinicia PowerShell

### "Permission denied (publickey)"

Configura SSH en GitHub:
1. Sigue: [docs.github.com/authentication](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

O usa HTTPS en lugar de SSH.

### "Vercel no despliega"

1. Verifica que `vercel.json` esté en la raíz
2. Verifica que `index.html` esté en la raíz
3. Revisa los logs en Vercel Dashboard

### "Proyectos de GitHub no cargan"

1. Verifica tu conexión a internet
2. Comprueba que el usuario de GitHub existe
3. La API tiene límite de 60 peticiones/hora

---

## 📞 Recursos de Ayuda

- **Documentación de Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Soporte de Vercel**: [vercel.com/support](https://vercel.com/support)
- **GitHub Docs**: [docs.github.com](https://docs.github.com)

---

## ✅ Checklist Final

Antes de compartir tu portafolio:

- [ ] Usuario de GitHub actualizado
- [ ] Enlaces de redes sociales actualizados
- [ ] Email de contacto actualizado
- [ ] Foto de perfil reemplazada
- [ ] Experiencia profesional actualizada
- [ ] Probado en móvil, tablet y desktop
- [ ] Todos los enlaces funcionan
- [ ] Formulario de contacto configurado (opcional)

---

## 🎊 ¡Felicidades!

Tu portafolio profesional está en línea y listo para impresionar.

### Comparte tu portafolio:

1. ✅ LinkedIn (actualiza tu perfil)
2. ✅ CV/Resume (agrega la URL)
3. ✅ Email signature
4. ✅ Redes sociales

---

**¿Preguntas?**

Revisa los archivos de documentación:
- `README.md` - Documentación completa
- `DEPLOY_VERCEL.md` - Guía detallada de despliegue
- `INICIO_RAPIDO.md` - Guía rápida de 5 minutos

**¡Éxito con tu portafolio! 🚀**
