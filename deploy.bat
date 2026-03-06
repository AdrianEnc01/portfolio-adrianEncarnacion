@echo off
REM Script de despliegue para Vercel (Windows)
REM Uso: deploy.bat

echo 🚀 Preparando despliegue del portafolio...

REM Verificar si Git está inicializado
if not exist ".git" (
    echo 📦 Inicializando repositorio Git...
    git init
    git add .
    git commit -m "Initial commit: Professional Portfolio"
    echo ✅ Repositorio Git inicializado
) else (
    echo ✅ Repositorio Git ya existe
)

REM Verificar si Vercel CLI está instalado
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Vercel CLI no está instalado
    echo 📥 Instalando Vercel CLI...
    npm install -g vercel
)

echo 🔐 Iniciando sesión en Vercel...
vercel login

echo 🚀 Desplegando a Vercel...
vercel --prod

echo ✅ ¡Despliegue completado!
echo 🌐 Tu portafolio está en línea

pause
