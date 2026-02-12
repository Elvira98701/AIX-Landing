# AIX Landing Page

Лендинг сервиса автоматизации для работы с Авито.

## Структура проекта

```
aix-landing/
├── index.html              # Главный HTML файл
├── css/
│   ├── style.css           # Скомпилированный CSS (minified)
│   ├── style.css.map       # Source map для отладки
│   ├── style.dev.css       # CSS для разработки (expanded)
│   └── style.dev.css.map
├── scss/
│   ├── style.scss          # Главный SCSS файл
│   ├── _variables.scss     # Переменные (цвета, шрифты, размеры)
│   ├── _reset.scss         # Сброс стилей
│   ├── _typography.scss    # Типографика
│   ├── _components.scss    # Компоненты (кнопки, контейнер)
│   ├── _header.scss        # Хедер
│   ├── _hero.scss          # Hero секция
│   ├── _partners.scss      # Блок партнёров
│   ├── _benefits.scss      # Преимущества
│   ├── _tools.scss         # Инструменты
│   ├── _testimonials.scss  # Отзывы
│   ├── _pricing.scss       # Тарифы
│   └── _footer.scss        # Футер
├── images/                 # Изображения (нужно скачать)
│   ├── icons/
│   ├── screenshots/
│   ├── partners/
│   └── devices/
└── fonts/                  # Локальные шрифты (опционально)
```

## Установка и запуск

### Требования
- Node.js 16+
- npm или yarn

### Установка зависимостей
```bash
npm install
```

### Компиляция SCSS
```bash
# Для продакшена (minified)
npx sass scss/style.scss css/style.css --style=compressed

# Для разработки (expanded)
npx sass scss/style.scss css/style.dev.css --style=expanded

# Watch mode
npx sass --watch scss/style.scss:css/style.css
```

## Важно: Изображения

Сейчас изображения загружаются с Figma API (временные ссылки на 7 дней).
Для продакшена нужно:

1. Экспортировать изображения из Figma
2. Оптимизировать (WebP, сжатие)
3. Заменить URL в index.html на локальные пути

### Список изображений для скачивания:

- `images/logo.png` — Логотип AIX
- `images/hero-glow.png` — Фоновое свечение hero
- `images/bg-gradient.png` — Фоновый градиент
- `images/icons/` — Все 3D иконки
- `images/screenshots/` — Скриншоты отзывов
- `images/partners/` — Логотипы партнёров
- `images/devices/iphone-frame.png` — Рамка iPhone

## Оптимизация для продакшена

### 1. Изображения
```bash
# Установить imagemin или использовать squoosh.app
# Конвертировать PNG в WebP где возможно
# Добавить srcset для ретины
```

### 2. Шрифты
Шрифты загружаются с Google Fonts. Для лучшей производительности:
- Скачать и разместить локально
- Использовать font-display: swap
- Предзагрузить критичные шрифты

### 3. CSS
```bash
# Уже минифицирован в style.css
# Можно дополнительно удалить source map в продакшене
```

### 4. HTML
```bash
# Минифицировать HTML
npx html-minifier index.html -o index.min.html --collapse-whitespace
```

## SEO

- ✅ Meta description
- ✅ Open Graph теги
- ✅ Семантическая разметка
- ⬜ robots.txt
- ⬜ sitemap.xml
- ⬜ Schema.org разметка
- ⬜ Favicon set (Apple Touch Icon, etc.)

## Браузерная совместимость

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Лицензия

Proprietary — AIX
# AIX-Landing
