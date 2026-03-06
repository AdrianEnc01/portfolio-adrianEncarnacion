@echo off
REM Script para subir el portafolio a GitHub
REM Uso: subir-github.bat

echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                                                              ║
echo ║           SUBIR PORTAFOLIO A GITHUB                          ║
echo ║                                                              ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.

REM Verificar si Git está instalado
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Git no está instalado
    echo.
    echo Por favor instala Git desde: https://git-scm.com
    pause
    exit /b 1
)

echo ✅ Git está instalado
echo.

REM Solicitar información del repositorio
echo 📝 Necesito información de tu repositorio de GitHub
echo.
echo 1. Ve a: https://github.com/new
echo 2. Crea un nuevo repositorio
echo 3. Copia la URL del repositorio
echo.

set /p REPO_URL="Pega la URL de tu repositorio (ej: https://github.com/usuario/repo.git): "

if "%REPO_URL%"=="" (
    echo ❌ No ingresaste una URL
    pause
    exit /b 1
)

echo.
echo 🔗 URL del repositorio: %REPO_URL%
echo.

REM Verificar si ya existe un remote
git remote -v | findstr "origin" >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo ⚠️  Ya existe un remote 'origin'
    echo 🔄 Eliminando remote existente...
    git remote remove origin
)

REM Agregar el remote
echo 📡 Conectando con GitHub...
git remote add origin %REPO_URL%

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Error al agregar el remote
    pause
    exit /b 1
)

echo ✅ Conectado con GitHub
echo.

REM Verificar la conexión
echo 🔍 Verificando conexión...
git remote -v
echo.

REM Subir el código
echo 🚀 Subiendo código a GitHub...
echo.
git push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Error al subir el código
    echo.
    echo Posibles soluciones:
    echo 1. Verifica que el repositorio esté vacío en GitHub
    echo 2. Usa un token de acceso personal en lugar de contraseña
    echo 3. Genera un token en: https://github.com/settings/tokens
    echo.
    echo Si el error persiste, intenta:
    echo    git push -u origin main --force
    echo.
    pause
    exit /b 1
)

echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                                                              ║
echo ║              ✅ ¡CÓDIGO SUBIDO EXITOSAMENTE!                 ║
echo ║                                                              ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.
echo 🌐 Tu código está en GitHub
echo.
echo 📋 Próximos pasos:
echo.
echo 1. Ve a tu repositorio en GitHub
echo 2. Verifica que todos los archivos estén ahí
echo 3. Ve a vercel.com para desplegar
echo.
echo 🚀 Para desplegar en Vercel:
echo    - Inicia sesión en vercel.com con GitHub
echo    - Importa tu repositorio
echo    - Haz clic en Deploy
echo.

pause
