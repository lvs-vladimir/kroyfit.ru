#!/bin/bash
# Тестирование приложения kroyfit

BASE_URL="http://localhost:3000"
PASSED=0
FAILED=0

test_endpoint() {
  local name=$1
  local method=$2
  local url=$3
  local expected=$4
  local cookies=$5
  
  echo -n "Тест: $name... "
  
  if [ -n "$cookies" ]; then
    result=$(curl -s -o /dev/null -w "%{http_code}" -b "$cookies" "$url")
  else
    result=$(curl -s -o /dev/null -w "%{http_code}" "$url")
  fi
  
  if [ "$result" = "$expected" ]; then
    echo "✓ PASSED (got $result)"
    ((PASSED++))
  else
    echo "✗ FAILED (expected $expected, got $result)"
    ((FAILED++))
  fi
}

echo "========================================"
echo "ТЕСТИРОВАНИЕ ПРИЛОЖЕНИЯ KROYFIT"
echo "========================================"
echo ""

# Тесты главной страницы
test_endpoint "Главная страница" "GET" "$BASE_URL/" "200"
test_endpoint "Список курсов" "GET" "$BASE_URL/api/courses" "200"

# Тесты админки
test_endpoint "Логин админки" "GET" "$BASE_URL/admin/login" "200"

# Тест авторизации с сохранением cookie
echo ""
echo "Тестирование авторизации..."

# Получаем токен и сохраняем cookie
LOGIN_RESULT=$(curl -s -X POST "$BASE_URL/api/admin/login" \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@kroyfit.ru","password":"admin123456"}' \
  -c /tmp/cookies.txt)
  
if echo "$LOGIN_RESULT" | grep -q "token"; then
  echo "✓ Авторизация работает"
  ((PASSED++))
  
  # Тесты с авторизацией через cookie файл
  test_endpoint "Dashboard (с cookie)" "GET" "$BASE_URL/admin" "200" "/tmp/cookies.txt"
  test_endpoint "Курсы (с cookie)" "GET" "$BASE_URL/admin/courses" "200" "/tmp/cookies.txt"
  test_endpoint "Пользователи (с cookie)" "GET" "$BASE_URL/admin/users" "200" "/tmp/cookies.txt"
  test_endpoint "Настройки (с cookie)" "GET" "$BASE_URL/admin/settings" "200" "/tmp/cookies.txt"
  test_endpoint "План (с cookie)" "GET" "$BASE_URL/admin/plan" "200" "/tmp/cookies.txt"
  
  # Тест API плана
  test_endpoint "API: GET /api/plan" "GET" "$BASE_URL/api/plan" "200"
else
  echo "✗ Авторизация не работает"
  ((FAILED++))
fi

# Дополнительные тесты API
echo ""
echo "Дополнительные тесты API:"
test_endpoint "API курс (slug)" "GET" "$BASE_URL/api/courses/tekhnologiya-poshiva" "200"

echo ""
echo "========================================"
echo "РЕЗУЛЬТАТЫ: $PASSED passed, $FAILED failed"
echo "========================================"

if [ $FAILED -eq 0 ]; then
  echo "✓ ВСЕ ТЕСТЫ ПРОЙДЕНЫ!"
  exit 0
else
  echo "✗ ЕСТЬ ОШИБКИ!"
  exit 1
fi
