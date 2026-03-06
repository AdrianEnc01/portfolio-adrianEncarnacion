#!/bin/bash

# Script de despliegue para Vercel
# Uso: bash deploy.sh

echo "🚀 Preparando despliegue del portafolio..."

# Verificar si Git está inicializado
if [ ! -d ".git" ]; then
    echo "📦 Inicializando repositorio Git..."
    git init
    git add .
    git commit -m "Initial commit: Professional Portfolio"
    echo "✅ Repositorio Git inicializado"
else
    echo "✅ Repositorio Git ya existe"
fi

# Verificar si Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI no está instalado"
    echo "📥 Instalando Vercel CLI..."
    npm install -g vercel
fi

echo "🔐 Iniciando sesión en Vercel..."
vercel login

echo "🚀 Desplegando a Vercel..."
vercel --prod

echo "✅ ¡Despliegue completado!"
echo "🌐 Tu portafolio está en línea"
