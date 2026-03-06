@echo off
REM Script para actualizar Vercel con el código correcto
REM Uso: actualizar-vercel.bat

echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                                                              ║
echo ║           ACTUALIZAR VERCEL CON CÓDIGO CORRECTO              ║
echo ║                                                              ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.

echo 🔍 Verificando estado actual...
echo.

REM Verificar si Git está instalizado
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

REM Mostrar estado actual
echo 📊 Estado del repositorio:
git status
echo.

REM Solicitar URL del repositorio
echo 📝 Necesito la URL de tu repositorio en GitHub
echo.
echo Para encontrarla:
echo 1. Ve a: https://vercel.com/dashboard
echo 2. Click en tu proyecto: portfolio-adrian-encarnacion
echo 3. Ve a Settings → Git
echo 4. Copia la URL del repositorio
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
    echo 🔄 Actualizando URL del remote...
    git remote set-url origin %REPO_URL%
) else (
    echo 📡 Agregando remote...
    git remote add origin %REPO_URL%
)

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Error al configurar el remote
    pause
    exit /b 1
)

echo ✅ Remote configurado
echo.

REM Verificar la conexión
echo 🔍 Verificando conexión...
git remote -v
echo.

REM Confirmar antes de hacer force push
echo ⚠️  IMPORTANTE: Este comando sobrescribirá el código en GitHub
echo.
echo Esto es lo que queremos porque el código actual no tiene las mejoras.
echo.
set /p CONFIRM="¿Estás seguro de continuar? (S/N): "

if /i not "%CONFIRM%"=="S" (
    echo ❌ Operación cancelada
    pause
    exit /b 0
)

echo.
echo 🚀 Actualizando repositorio en GitHub...
echo.

REM Hacer force push
git push -f origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo ❌ Error al actualizar el repositorio
    echo.
    echo Posibles soluciones:
    echo 1. Verifica que la URL del repositorio sea correcta
    echo 2. Usa un token de acceso personal en lugar de contraseña
    echo 3. Genera un token en: https://github.com/settings/tokens
    echo.
    pause
    exit /b 1
)

echo.
echo ╔══════════════════════════════════════════════════════════════╗
echo ║                                                              ║
echo ║              ✅ ¡REPOSITORIO ACTUALIZADO!                    ║
echo ║                                                              ║
echo ╚══════════════════════════════════════════════════════════════╝
echo.
echo 🎉 El código correcto está ahora en GitHub
echo.
echo 📋 Próximos pasos:
echo.
echo 1. Ve a tu Dashboard de Vercel: https://vercel.com/dashboard
echo 2. Verás un nuevo despliegue en progreso
echo 3. Espera 1-2 minutos
echo 4. Refresca tu sitio: https://portfolio-adrian-encarnacion.vercel.app/
echo 5. ¡Deberías ver todas las mejoras!
echo.
echo ✅ Verificaciones:
echo    - Sección "GitHub Projects"
echo    - Sección "Connect With Me"
echo    - Formulario mejorado con campo Subject
echo    - Diseño moderno con Tailwind CSS
echo.

pause
