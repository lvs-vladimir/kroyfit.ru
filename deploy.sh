#!/bin/bash
# Скрипт для сборки и запуска Nuxt приложения

PROJECT_DIR="/root/kroyfit"

echo "🔄 Начинаю..."

cd $PROJECT_DIR

# 1. Убить все процессы
echo "🛑 Убиваю все процессы..."
pkill -9 -f "nuxt\|kroyfit\|index.mjs" 2>/dev/null
sleep 1

# Проверяем что порт свободен
if lsof -i:3000 2>/dev/null | grep -q LISTEN; then
    echo "⚠️  Порт 3000 занят, убиваю..."
    lsof -ti:3000 | xargs kill -9 2>/dev/null
    sleep 1
fi

# 2. Очистить старые сборки
echo "🧹 Очищаю старые сборки..."
rm -rf .output .nuxt

# 3. Установить зависимости
echo "📦 Устанавливаю зависимости..."
npm install

# 4. Собрать проект
echo "🔨 Собираю проект..."
npm run build

# 5. Запустить сервер
echo "🚀 Запускаю сервер..."
NODE_ENV=production node .output/server/index.mjs > /tmp/nuxt.log 2>&1 &
sleep 2

# Проверяем что запустился
if lsof -i:3000 2>/dev/null | grep -q LISTEN; then
    echo "✅ Сервер запущен на порту 3000!"
else
    echo "❌ Ошибка запуска сервера!"
    tail -20 /tmp/nuxt.log
fi