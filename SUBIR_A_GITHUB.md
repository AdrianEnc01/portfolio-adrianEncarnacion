# 🚀 CÓMO SUBIR A TU GITHUB - PASO A PASO

## ✅ Git Ya Está Inicializado

El repositorio Git ya está configurado y listo. Solo necesitas conectarlo con tu GitHub.

---

## 📋 PASOS A SEGUIR

### PASO 1: Crear Repositorio en GitHub

1. **Abre tu navegador** y ve a: [https://github.com/new](https://github.com/new)

2. **Configura el repositorio:**
   - **Repository name**: `portfolio-qa-specialist` (o el nombre que prefieras)
   - **Description**: `Professional Portfolio - Senior QA & Software Engineering Specialist`
   - **Visibility**: ✅ Public (para que Vercel pueda acceder)
   - **NO marques** ninguna opción de inicialización (README, .gitignore, license)
   
3. **Haz clic en** "Create repository"

4. **Copia la URL** que aparece (algo como):
   ```
   https://github.com/TU-USUARIO/portfolio-qa-specialist.git
   ```

---

### PASO 2: Conectar y Subir el Código

Abre **PowerShell** en la carpeta `portfolio-clean` y ejecuta:

```powershell
# Conectar con tu repositorio de GitHub (REEMPLAZA con tu URL)
git remote add origin https://github.com/TU-USUARIO/portfolio-qa-specialist.git

# Verificar que se agregó correctamente
git remote -v

# Subir el código a GitHub
git push -u origin main
```

**Nota**: Si te pide autenticación, usa tu token de GitHub (no tu contraseña).

---

### PASO 3: Verificar en GitHub

1. Refresca la página de tu repositorio en GitHub
2. Deberías ver todos tus archivos subidos
3. Verifica que aparezcan:
   - ✅ index.html
   - ✅ assets/
   - ✅ data/
   - ✅ vercel.json
   - ✅ README.md

---

## 🔐 Autenticación con GitHub

### Opción 1: Token de Acceso Personal (Recomendado)

Si GitHub te pide usuario y contraseña:

1. **Genera un token**:
   - Ve a: [github.com/settings/tokens](https://github.com/settings/tokens)
   - Click en "Generate new token" → "Generate new token (classic)"
   - Nombre: "Portfolio Deploy"
   - Selecciona: ✅ repo (todos los permisos de repo)
   - Click en "Generate token"
   - **COPIA EL TOKEN** (solo se muestra una vez)

2. **Usa el token como contraseña**:
   - Usuario: tu nombre de usuario de GitHub
   - Contraseña: pega el token que copiaste

### Opción 2: GitHub CLI

```powershell
# Instalar GitHub CLI
winget install --id GitHub.cli

# Autenticar
gh auth login

# Seguir las instrucciones en pantalla
```

### Opción 3: SSH (Avanzado)

Si prefieres usar SSH, sigue: [docs.github.com/authentication/connecting-to-github-with-ssh](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

---

## 🎯 COMANDOS COMPLETOS (Copia y Pega)

```powershell
# 1. Navega a la carpeta (si no estás ahí)
cd "C:\Users\adencarnacion\OneDrive - GBM Corporacion\Escritorio\Portafolio_AdrianEncarnacion\portfolio-clean"

# 2. Conecta con GitHub (REEMPLAZA TU-USUARIO y NOMBRE-REPO)
git remote add origin https://github.com/TU-USUARIO/NOMBRE-REPO.git

# 3. Verifica la conexión
git remote -v

# 4. Sube el código
git push -u origin main
```

---

## ✅ Verificación

Después de hacer push, deberías ver:

```
Enumerating objects: 24, done.
Counting objects: 100% (24/24), done.
Delta compression using up to 8 threads
Compressing objects: 100% (21/21), done.
Writing objects: 100% (24/24), 123.45 KiB | 12.34 MiB/s, done.
Total 24 (delta 2), reused 0 (delta 0), pack-reused 0
To https://github.com/TU-USUARIO/portfolio-qa-specialist.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## 🔄 Actualizar el Repositorio (Futuros Cambios)

Cuando hagas cambios en tu portafolio:

```powershell
# 1. Agregar cambios
git add .

# 2. Hacer commit
git commit -m "Update: descripción de tus cambios"

# 3. Subir a GitHub
git push
```

---

## 🐛 Solución de Problemas

### Error: "remote origin already exists"

```powershell
# Eliminar el remote existente
git remote remove origin

# Agregar de nuevo
git remote add origin https://github.com/TU-USUARIO/NOMBRE-REPO.git
```

### Error: "failed to push some refs"

```powershell
# Forzar el push (solo la primera vez)
git push -u origin main --force
```

### Error: "Authentication failed"

- Verifica que estés usando un token de acceso personal, no tu contraseña
- Genera un nuevo token en: [github.com/settings/tokens](https://github.com/settings/tokens)

### Error: "Permission denied (publickey)"

Estás intentando usar SSH sin configurarlo. Usa HTTPS en su lugar:

```powershell
git remote set-url origin https://github.com/TU-USUARIO/NOMBRE-REPO.git
```

---

## 📊 Estado Actual del Repositorio

```powershell
# Ver el estado
git status

# Ver el historial de commits
git log --oneline

# Ver los remotes configurados
git remote -v
```

---

## 🎉 DESPUÉS DE SUBIR A GITHUB

### Siguiente Paso: Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Inicia sesión con tu cuenta de GitHub
3. Click en "Add New Project"
4. Selecciona tu repositorio `portfolio-qa-specialist`
5. Click en "Deploy"
6. ¡Listo! Tu sitio estará en línea en 1-2 minutos

---

## 📝 Información del Repositorio

**Archivos incluidos**: 19 archivos
**Commits**: 1 (Initial commit)
**Rama**: main
**Estado**: ✅ Listo para push

---

## 🔗 Enlaces Útiles

- **GitHub Docs**: [docs.github.com](https://docs.github.com)
- **Git Cheat Sheet**: [education.github.com/git-cheat-sheet-education.pdf](https://education.github.com/git-cheat-sheet-education.pdf)
- **Tokens de GitHub**: [github.com/settings/tokens](https://github.com/settings/tokens)

---

## ✅ Checklist

- [ ] Crear repositorio en GitHub
- [ ] Copiar URL del repositorio
- [ ] Ejecutar `git remote add origin URL`
- [ ] Ejecutar `git push -u origin main`
- [ ] Verificar archivos en GitHub
- [ ] Conectar con Vercel
- [ ] Desplegar

---

**¿Listo para subir?** 

Ejecuta los comandos del PASO 2 y tu código estará en GitHub en menos de 1 minuto.

**¡Éxito! 🚀**
