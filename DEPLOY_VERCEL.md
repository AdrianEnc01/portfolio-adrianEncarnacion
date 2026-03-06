# 🚀 Guía de Despliegue en Vercel

## Método 1: Vercel CLI (Recomendado)

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 2: Iniciar Sesión

```bash
vercel login
```

Esto abrirá tu navegador para autenticarte con tu cuenta de Vercel/GitHub.

### Paso 3: Desplegar

```bash
# Navega a la carpeta del proyecto
cd portfolio-clean

# Despliega
vercel
```

Sigue las instrucciones:
- **Set up and deploy?** → Yes
- **Which scope?** → Selecciona tu cuenta
- **Link to existing project?** → No
- **What's your project's name?** → portfolio-qa (o el nombre que prefieras)
- **In which directory is your code located?** → ./ (presiona Enter)

### Paso 4: Despliegue a Producción

```bash
vercel --prod
```

¡Listo! Tu sitio estará en: `https://tu-proyecto.vercel.app`

---

## Método 2: GitHub + Vercel (Automático)

### Paso 1: Crear Repositorio en GitHub

```bash
# Inicializar Git
git init

# Agregar archivos
git add .

# Commit inicial
git commit -m "Initial commit: Professional Portfolio"

# Crear repositorio en GitHub y conectar
git remote add origin https://github.com/TU-USUARIO/portfolio.git
git branch -M main
git push -u origin main
```

### Paso 2: Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "Add New Project"
3. Importa tu repositorio de GitHub
4. Configura el proyecto:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: (dejar vacío)
   - **Output Directory**: ./
5. Haz clic en "Deploy"

### Paso 3: Configuración Automática

Vercel detectará automáticamente:
- `vercel.json` para configuración
- `index.html` como página principal
- Rutas estáticas

### Paso 4: Despliegues Automáticos

Cada vez que hagas push a GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel desplegará automáticamente los cambios.

---

## Método 3: Vercel Dashboard (Drag & Drop)

### Paso 1: Comprimir Proyecto

Comprime la carpeta `portfolio-clean` en un archivo ZIP.

### Paso 2: Subir a Vercel

1. Ve a [vercel.com/new](https://vercel.com/new)
2. Arrastra el archivo ZIP
3. Espera a que se despliegue

---

## 🔧 Configuración Avanzada

### Variables de Entorno

Si necesitas variables de entorno (ej: API keys):

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega tus variables

### Dominio Personalizado

1. Ve a tu proyecto en Vercel
2. Settings → Domains
3. Agrega tu dominio personalizado
4. Configura los DNS según las instrucciones

### Configuración de vercel.json

El archivo `vercel.json` ya está configurado:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

---

## 📊 Monitoreo

### Analytics

Vercel proporciona analytics automáticos:
- Visitas
- Rendimiento
- Errores

Accede en: Dashboard → Analytics

### Logs

Ver logs en tiempo real:
```bash
vercel logs
```

---

## 🔄 Actualizar el Sitio

### Con CLI:

```bash
# Hacer cambios en tu código
# Luego:
vercel --prod
```

### Con GitHub:

```bash
git add .
git commit -m "Update: descripción de cambios"
git push
```

Vercel desplegará automáticamente.

---

## 🐛 Solución de Problemas

### Error: "No se encuentra index.html"

Verifica que `index.html` esté en la raíz del proyecto.

### Error: "Rutas no funcionan"

Verifica que `vercel.json` esté configurado correctamente.

### Error: "Imágenes no cargan"

Verifica las rutas relativas en tu HTML:
- ✅ `assets/images/profile.jpg`
- ❌ `../assets/images/profile.jpg`

### Error: "API de GitHub no funciona"

Verifica:
- Conexión a internet
- Límite de API (60 peticiones/hora)
- CORS está habilitado

---

## 🎯 Checklist Pre-Despliegue

- [ ] Actualizar usuario de GitHub en `index.html`
- [ ] Cambiar enlaces de redes sociales
- [ ] Actualizar email de contacto
- [ ] Reemplazar foto de perfil
- [ ] Actualizar `data/experience.json`
- [ ] Probar localmente
- [ ] Verificar todas las rutas
- [ ] Probar en móvil
- [ ] Configurar formulario de contacto (EmailJS/Formspree)

---

## 📞 Comandos Útiles

```bash
# Ver información del proyecto
vercel inspect

# Ver lista de despliegues
vercel ls

# Eliminar un despliegue
vercel rm [deployment-url]

# Ver logs
vercel logs

# Abrir proyecto en el navegador
vercel open
```

---

## 🎉 ¡Listo!

Tu portafolio estará disponible en:
- **URL de Vercel**: `https://tu-proyecto.vercel.app`
- **Dominio personalizado**: Si lo configuraste

### Próximos Pasos:

1. Comparte tu portafolio en LinkedIn
2. Agrégalo a tu CV
3. Actualízalo regularmente con nuevos proyectos
4. Monitorea las visitas en Vercel Analytics

---

**¿Necesitas ayuda?**
- [Documentación de Vercel](https://vercel.com/docs)
- [Soporte de Vercel](https://vercel.com/support)
