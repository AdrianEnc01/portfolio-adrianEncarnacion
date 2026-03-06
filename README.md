# 🚀 Portafolio Profesional - QA & Software Engineering Specialist

Portafolio moderno y bilingüe (ES/EN) construido con Tailwind CSS, que muestra proyectos de GitHub, redes sociales y formulario de contacto.

## ✨ Características

- 🎨 **Tailwind CSS** - Framework CSS moderno
- 📂 **GitHub Projects** - Carga dinámica de repositorios
- 🌐 **Redes Sociales** - LinkedIn, GitHub, Twitter, Email
- 📧 **Formulario de Contacto** - Con validación y mensajes de estado
- 🌍 **Bilingüe** - Español e Inglés
- 📱 **Responsive** - Optimizado para todos los dispositivos
- ⚡ **Animaciones** - Efectos suaves y modernos

## 🏗️ Estructura del Proyecto

```
portfolio-clean/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos personalizados
│   ├── js/
│   │   ├── main.js         # Funcionalidad principal
│   │   └── language-switcher.js  # Sistema bilingüe
│   └── images/
│       └── profile/        # Imagen de perfil
├── data/
│   ├── content-en.json     # Traducciones inglés
│   ├── content-es.json     # Traducciones español
│   ├── experience.json     # Experiencia profesional
│   └── tech-stack.json     # Stack tecnológico
├── vercel.json             # Configuración de Vercel
└── README.md               # Este archivo
```

## 🚀 Inicio Rápido

### Desarrollo Local

```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node.js
npx serve

# Visita: http://localhost:8000
```

### Personalización

1. **Usuario de GitHub**: Edita el valor en `index.html` línea ~115
2. **Redes Sociales**: Actualiza los enlaces en la sección "SOCIAL MEDIA"
3. **Email**: Cambia el mailto en el formulario de contacto
4. **Foto de Perfil**: Reemplaza `assets/images/profile/profile-placeholder.jpg`
5. **Experiencia**: Edita `data/experience.json`
6. **Contenido**: Modifica `data/content-en.json` y `data/content-es.json`

## 📧 Configurar Formulario de Contacto

### Opción 1: EmailJS

```javascript
// Agrega en index.html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// Configura en main.js
emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData);
```

### Opción 2: Formspree

```javascript
// En main.js
fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData)
});
```

## 🌐 Despliegue en Vercel

### Método 1: Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Método 2: GitHub + Vercel

1. Sube el código a GitHub
2. Conecta tu repositorio en [vercel.com](https://vercel.com)
3. Vercel desplegará automáticamente

## 🎨 Personalización de Colores

Edita en `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'electric-blue': '#00d4ff',  // Tu color primario
                'cyber-green': '#00ff88',    // Tu color secundario
            }
        }
    }
}
```

## 📱 Responsive

- **Móvil**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Tecnologías

- HTML5
- Tailwind CSS (CDN)
- JavaScript (Vanilla)
- Font Awesome Icons
- GitHub API

## 📄 Licencia

Libre para uso personal y comercial.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Siéntete libre de abrir issues o pull requests.

---

**Desarrollado con ❤️ para Excelencia en Ingeniería de Calidad**
