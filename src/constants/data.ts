export const HERO_DATA = {
    name: "Байэль Эркинбеков",
    title: "Frontend Developer (React / TypeScript)",
    subtitle:
        "Разрабатываю быстрые, отзывчивые и интеллектуальные веб-приложения.",
    description:
        "Опыт реализации проектов с нуля: от валидной адаптивной вёрстки до написания backend-части на Node.js и деплоя. Фокусируюсь на чистоте кода, строгой типизации и интеграции современных AI-инструментов в разработку.",
};

export const SKILLS = {
    frontend: [
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3 / SCSS",
        "Styled Components",
        "React Router",
    ],
    backend: ["Node.js", "REST API", "Telegram Bot API"],
    infrastructure: [
        "Nginx",
        "Linux / VPS",
        "HTTPS / CORS",
        "Деплой и настройка доменов",
    ],
    tools: ["Git / GitHub", "Vite", "Figma", "Адаптивная вёрстка"],
};

export const WORK_APPROACH = {
    principles: [
        {
            title: "Декомпозиция и планирование",
            text: "Разбиваю сложные бизнес-требования на атомарные задачи. Сначала проектирую архитектуру данных и API, только затем перехожу к написанию кода.",
        },
        {
            title: "Чистота и типизация",
            text: "Пишу код, который легко читать и поддерживать. Обязательно использую строгую типизацию TypeScript для предотвращения ошибок на этапе разработки.",
        },
        {
            title: "AI-Driven Development",
            text: "Активно использую ИИ как умного ассистента: для написания рутинных тестов, генерации регулярных выражений, быстрого рефакторинга и поиска edge-кейсов. Это ускоряет разработку в 2 раза.",
        },
    ],
};

export const EXPERIENCES = [
    {
        company: "FCCS / Фриланс",
        role: "Frontend Developer",
        period: "2024 — Настоящее время",
        description:
            "Проектирование и разработка клиентской части веб-приложений и адаптивных корпоративных интерфейсов. Оптимизация производительности фронтенда, рефакторинг legacy-кода с переходом на современный стек React + TypeScript, тесная интеграция с бэкенд-службами через REST API.",
        achievements: [
            "Перевел ключевые модули внутренней системы на React + TypeScript, повысив стабильность приложения.",
            "Оптимизировал скорость загрузки интерфейсов на 30% за счет настройки lazy loading и оптимизации ассетов.",
            "Внедрил использование AI-инструментов для автоматизации написания юнит-тестов и рутинного рефакторинга.",
        ],
    },
];

export const PROJECTS = [
    {
        title: "Movie Genss",
        description:
            "Полноценное SPA-приложение для поиска фильмов с использованием TMDB API. Реализованы детальные страницы, интеграция YouTube Player API для трейлеров, плавный Skeleton Loading и CI/CD через Vercel с защитой API-ключей.",
        stack: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "React Router",
            "Vercel",
        ],
        github: "https://github.com/genssi/movie-genss",
        deploy: "https://movie-genss.vercel.app/"
    },
    {
        title: "GitHub Explorer",
        description:
            "Сервис поиска пользователей GitHub с применением debounce-фильтрации. Карточки профилей отображают подробную статистику, а списки репозиториев поддерживают сортировку по звёздам, дате и имени. Реализована обработка 404 ошибок.",
        stack: ["React", "TypeScript", "Vite", "Кастомные хуки"],
        github: "https://github.com/genssi/GitHub-Explorer",
        deploy: "https://git-hub-explorer-beta.vercel.app/"
    },
    {
        title: "MyBaskets.online",
        description:
            "E-commerce проект полного цикла разработки. Написана бизнес-логика, UI, а также бэкенд-часть на Node.js. Интегрированы Telegram-уведомления о заказах через Bot API. Настроен HTTPS, CORS и Nginx на собственном VPS.",
        stack: [
            "React",
            "Node.js",
            "Styled Components",
            "Telegram API",
            "Nginx",
            "VPS",
        ],
        github: "https://github.com/genssi/Soul-House",
        deploy: ""
    },
    {
        title: "Другие проекты",
        description:
            "В моем профиле на GitHub вы найдете и другие работы: учебные репозитории, и тд. Коллекция учебных и пет-проектов на GitHub. Эксперименты с React, TypeScript, CSS-анимациями и API. ",
        stack: [
            "React",
            "Node.js",
            "Styled Components",
            "Telegram API",
            "Nginx",
            "VPS",
        ],
        github: "https://github.com/genssi/Soul-House",
        deploy: ""
    },
];

export const CONTACTS = {
    email: "2001shermurzaev@gmail.com",
    telegram: "@genss_gitignore",
    github: "https://github.com/genssi",
    location: "Бишкек, Кыргызстан",
};
