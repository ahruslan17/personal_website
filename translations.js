// Complete translations for the portfolio website
const translations = {
    ru: {
        page: {
            title: "Product Analyst / Analytics Engineer"
        },
        nav: {
            brand: "Портфолио",
            about: "О себе",
            experience: "Опыт",
            stack: "Стэк",
            education: "Образование",
            projects: "Проекты",
            contact: "Контакты",
            tooltip: {
                analytics: "Показать портфолио по продуктовой аналитике",
                engineering: "Показать портфолио инженера AI и аналитики"
            },
            stackTooltip: {
                analytics: "Показать аналитический стак",
                engineering: "Показать инженерный стак"
            }
        },
        hero: {
            greeting: "Привет, я",
            name: "Руслан Ахметзянов",
            roleAnalytics: "Product Analyst",
            roleEngineering: "Analytics Engineer",
            descAnalytics: "Превращаю данные в инсайты, которые двигают продукт вперед",
            descEngineering: "Строю масштабируемые data-решения с использованием ML и AI",
            btnProjects: "Мои проекты",
            btnContact: "Связаться"
        },
        about: {
            title: "О себе",
            p1: {
                strong: "Как Product Analyst,",
                text: "я провожу сложные исследования пользовательского поведения, A/B-тесты и создаю дашборды для принятия решений. Проектирую аналитические события и схемы данных в OpenSearch и PostgreSQL."
            },
            p2: {
                strong: "Как Analytics Engineer,",
                text: "я разрабатываю надежные ETL-процессы, создаю ML-модели и внедряю AI-решения для автоматизации аналитических процессов."
            },
            stat1: "года опыта",
            stat2: "аналитических исследований",
            stat3: "автоматизированных отчётов / ETL-процессов"
        },
        stack: {
            title: "Стэк",
            analytics: {
                title: "Продуктовая аналитика",
                sql: {
                    desc: "SQL (PostgreSQL, OpenSearch, MySQL) — написание сложных запросов с оконными функциями, CTE и агрегациями; создание автоматизаций и обёрток на Python. Применяется для подготовки витрин данных, расчёта продуктовых метрик и оптимизации хранилищ под аналитические задачи.",
                    level: "Уровень: Средний"
                },
                python: {
                    desc: "Python (pandas, numpy, scipy, matplotlib, seaborn) — обработка, анализ и визуализация данных; построение когорт, воронок, расчёт метрик, проведение A/B-тестов и проверка гипотез. Используется для анализа пользовательского поведения, проверки продуктовых изменений и оценки эффективности фич.",
                    level: "Уровень: Продвинутый"
                },
                tableau: {
                    desc: "Jupyter / Google Colab — исследовательский анализ данных (EDA), визуализация инсайтов и подготовка интерактивных отчётов. Используется для прототипирования аналитических решений и быстрой проверки гипотез.",
                    level: "Уровень: Продвинутый"
                },
                abtesting: {
                    desc: "BI (OpenSearch Dashboards) — построение дашбордов и алертов для мониторинга ключевых продуктовых метрик (DAU/MAU, Retention, LTV, ARPU, Conversion). Позволяет отслеживать динамику поведения пользователей и выявлять точки роста.",
                    level: "Уровень: Продвинутый"
                },
                opensearch: {
                    desc: "Git / Cron / REST API — автоматизация ETL-процессов, интеграция данных из внешних систем и версионирование аналитических решений. Обеспечивает воспроизводимость анализа и стабильное обновление отчётов.",
                    level: "Уровень: Средний"
                }
            },
            engineering: {
                title: "Инженерия и ML",
                python_adv: {
                    desc: "Python (pandas, numpy, scipy, scikit-learn, multiprocessing, joblib) — разработка аналитических и ML-библиотек, реализация ООП-архитектуры (фабрики, фабричные методы, абстрактные классы), векторизация и параллельные вычисления. Используется для повышения эффективности вычислений и масштабирования аналитических систем.",
                    level: "Уровень: Продвинутый"
                },
                ml: {
                    desc: "ML & AI (scikit-learn, catboost, xgboost, tensorflow, statsmodels, prophet) — реализация моделей регрессии, классификации, кластеризации и временных рядов (ARIMA, SARIMAX); прогнозирование метрик и анализ аномалий. Применяется для построения автоматизированных ML-пайплайнов и предиктивных моделей.",
                    level: "Уровень: Средний"
                },
                dataeng: {
                    desc: "AI Tools (Cursor, Open WebUI, LangFlow, Ollama) — разработка и настройка LLM-пайплайнов, интеграция моделей через API и создание прототипов AI-решений на базе open-source фреймворков. Используется для внедрения AI-инструментов в аналитику и автоматизацию.",
                    level: "Уровень: Средний"
                },
                cloud: {
                    desc: "Orchestration & DevOps (Docker, Airflow, Cron, Git) — контейнеризация и деплой аналитических и ML-систем, настройка планировщиков, CI/CD и мониторинга пайплайнов. Обеспечивает стабильную работу ETL и воспроизводимость ML-экспериментов.",
                    level: "Уровень: Средний"
                },
                llm: {
                    desc: "APIs & Integration (REST, FastAPI, Requests) — интеграция внешних данных, разработка микросервисов и API для обмена результатами аналитики и моделей. Позволяет масштабировать систему и связывать аналитические модули с внешними сервисами.",
                    level: "Уровень: Средний"
                }
            }
        },
        experience: {
            title: "Опыт работы",
            expandHint: "Кликни, чтобы увидеть больше",
            job1: {
                date: "03/2024 – Present",
                title: "Senior Data Analyst (ML/DS)",
                company: '<a href="https://gear-games.com/ru/" target="_blank" rel="noopener">Gear Games</a>',
                desc: "Веду продуктовую аналитику, автоматизирую AI-процессы и управляю кросс-функциональной командой",
                desc1: "Проведение глубоких аналитических исследований. Повысил Retention-1d на 30%.",
                desc2: "Развитие культуры A/B тестирования. Создал автоматизированные алгоритмы дизайна и расчёта результатов A/B тестов. Завершил 20+ успешных AB-тестов.",
                desc3: "Улучшение аналитических Python-библиотек. Создал библиотеку многопоточной выгрузки данных, ускорив загрузку в 50+ раз.",
                desc4: "Создание ML-кластеризации входящего трафика. Достоверная разметка игроков по 1-му дню жизни в игре для маркетинга и монетизации. Сократил расходы на закупку трафика, повысил точность таргетинговой системы офферов.",
                desc5: "Автоматизация отчётности и ETL-процессы. Разработал отчёт по ретеншену, кросс-проектный отчёт по основным метрикам и многие др.",
                desc6: "Развитие AI, LLM, MCP. Создал AI-инцидент менеджера, ассистента по заведению задач, MCP YouTrack, MCP OpenSearch.",
                desc7: "Создание дашбордов, схем ивентов и алертинга в реальном времени на базе OpenSearch/ElasticSearch.",
                desc8: "Активное участие в жизни компании, разработка системы прогнозов для внутреннего турнира.",
                desc9: "Исполнение обязанностей тимлида команды разработки и техлида отдела аналитики: проведение дейликов, планирование спринтов, координация работы кросс-функциональной команды из 10 человек, выпуск фичей."
            },
            job2: {
                date: "10/2022 – 01/2024 (удалённо)",
                title: "Quantitative Researcher / Algorithmic Trading Developer",
                company: '<a href="https://qtshark.com/" target="_blank" rel="noopener">Quant Shark Technologies</a>',
                desc: "Исследовал и автоматизировал алгоритмические стратегии для крипторынка",
                desc1: 'Изучил и реализовал стратегию из научной статьи "Evaluation of Dynamic Cointegration-Based Pairs Trading Strategy in the Cryptocurrency Market" (Masood Tadi, Irina Kortchemski, 2021).',
                desc2: "Курировал создание и архитектуру внутренней системы бэктестинга: подготовка технической документации для разработки; проектирование пайплайна загрузки данных, расчётов и визуализации результатов.",
                desc3: "Автоматизировал исполнение торговых стратегий через API криптобирж: реализовал стратегию автоматического открытия позиций при публикации новостей о листинге токена; обеспечил развёртывание стратегий на выделенном сервере под управлением Ubuntu.",
                desc4: "Проводил оптимизацию параметров торговых стратегий."
            },
            job3: {
                date: "08/2021 – 09/2022",
                title: "Data Analyst / Technical Specialist",
                company: '<a href="https://incraft3d.ru/" target="_blank" rel="noopener">InCraft by Baustov</a>',
                desc: "Цифровизировал производство 3D-печати и построил аналитическую инфраструктуру",
                desc1: "Разработал с нуля систему учёта оборудования и расходных материалов для 3D-принтеров — реализовал отслеживание поступлений, текущих остатков и использования комплектующих.",
                desc2: "Оптимизировал параметры 3D-печати на основе анализа производственных данных, что сократило брак и снизило расход материалов.",
                desc3: "Создал плагин для Cura (Python) для версионирования параметров печати и ведения технических заметок, что повысило воспроизводимость результатов.",
                desc4: "Построил модель прогнозирования спроса и сезонности расходников, позволившую планировать закупки заранее и поддерживать нужный уровень запасов в периоды пиковых заказов.",
                desc5: 'Записывал обучающие видео по эксплуатации 3D-принтеров. <a href="https://www.youtube.com/watch?v=sfYMo3Qh5Ek" target="_blank" rel="noopener">Пример видео</a>'
            },
            job4: {
                date: "06/2022 – 09/2022",
                title: "Intern ML&AI — стажировка",
                company: '<a href="https://niigazekonomika.gazprom.ru/" target="_blank" rel="noopener">NIIgazEconomika LLC</a>',
                desc: "Работал с задачами детектирования аномалий во временных рядах",
                desc1: "Исследования в области детектирования аномалий во временных рядах с применением методов машинного обучения и искусственного интеллекта.",
                desc2: "Разработал модель детекции аномалий временных рядов при помощи кластеризации."
            }
        },
        education: {
            title: "Образование",
            university: "Российский государственный университет нефти и газа имени И.М. Губкина",
            degree1: {
                badge: "Бакалавр",
                title: "Прикладная математика"
            },
            degree2: {
                title: "Переводчик в сфере профессиональной коммуникации"
            },
            period1: "2019 - 2023",
            period2: "2021 - 2023",
            publicationsTitle: "Публикации",
            pub1: "Surrogate Models for the Compressibility Factor of Natural Gas",
            pub2: "Machine Learning-Based Models for the Compressibility Factor of Natural Gas",
            pub3: "Intelligent Analysis Of Geological And Geophysical Data",
            pub4: "A series of digests of scientific and technical publications"
        },
        publications: {
            title: "Публикации",
            researchgate: "ResearchGate",
            conferences: "Конференции"
        },
        projects: {
            title: "Проекты",
            wip: {
                title: "Раздел находится в разработке",
                description: "Проекты смотреть на GitHub:"
            }
        },
        contact: {
            title: "Связаться со мной",
            text: "Открыт для интересных проектов и предложений о сотрудничестве",
            email: "your.email@example.com",
            linkedin: "LinkedIn",
            github: "GitHub",
            telegram: "Telegram"
        },
        footer: {
            copyright: "&copy; 2025 Руслан Ахметзянов. Все права защищены."
        }
    },
    en: {
        page: {
            title: "Product Analyst / Analytics Engineer"
        },
        nav: {
            brand: "Portfolio",
            about: "About",
            experience: "Experience",
            stack: "Stack",
            education: "Education",
            projects: "Projects",
            contact: "Contact",
            tooltip: {
                analytics: "Show Product Analytics portfolio",
                engineering: "Show Engineering & AI Analytics portfolio"
            },
            stackTooltip: {
                analytics: "Show Analytics Stack",
                engineering: "Show Engineering Stack"
            }
        },
        hero: {
            greeting: "Hi, I'm",
            name: "Ruslan Akhmetzianov",
            roleAnalytics: "Product Analyst",
            roleEngineering: "Analytics Engineer",
            descAnalytics: "Transforming data into insights that drive product growth",
            descEngineering: "Building scalable data solutions using ML and AI",
            btnProjects: "My Projects",
            btnContact: "Get in Touch"
        },
        about: {
            title: "About Me",
            p1: {
                strong: "As a Product Analyst,",
                text: "I conduct complex user behavior research, A/B tests, and create dashboards for decision making. Design analytical events and data schemas in OpenSearch and PostgreSQL."
            },
            p2: {
                strong: "As an Analytics Engineer,",
                text: "I develop robust ETL processes, create ML models, and implement AI solutions to automate analytical processes."
            },
            stat1: "Years of Experience",
            stat2: "Analytical Studies",
            stat3: "Automated Reports / ETL Processes"
        },
        stack: {
            title: "Stack",
            analytics: {
                title: "Product Analytics",
                sql: {
                    desc: "SQL (PostgreSQL, OpenSearch, MySQL) — writing complex queries with window functions, CTEs and aggregations; creating automations and wrappers in Python. Used for preparing data marts, calculating product metrics and optimizing warehouses for analytical tasks.",
                    level: "Level: Intermediate"
                },
                python: {
                    desc: "Python (pandas, numpy, scipy, matplotlib, seaborn) — data processing, analysis and visualization; building cohorts, funnels, metric calculations, conducting A/B tests and hypothesis testing. Used for analyzing user behavior, validating product changes and evaluating feature effectiveness.",
                    level: "Level: Advanced"
                },
                tableau: {
                    desc: "Jupyter / Google Colab — exploratory data analysis (EDA), insight visualization and interactive report preparation. Used for prototyping analytical solutions and rapid hypothesis validation.",
                    level: "Level: Advanced"
                },
                abtesting: {
                    desc: "BI (OpenSearch Dashboards) — building dashboards and alerts for monitoring key product metrics (DAU/MAU, Retention, LTV, ARPU, Conversion). Enables tracking user behavior trends and identifying growth opportunities.",
                    level: "Level: Advanced"
                },
                opensearch: {
                    desc: "Git / Cron / REST API — ETL process automation, external data integration and analytical solution versioning. Ensures analysis reproducibility and stable report updates.",
                    level: "Level: Intermediate"
                }
            },
            engineering: {
                title: "Engineering & ML",
                python_adv: {
                    desc: "Python (pandas, numpy, scipy, scikit-learn, multiprocessing, joblib) — developing analytical and ML libraries, implementing OOP architecture (factories, factory methods, abstract classes), vectorization and parallel computing. Used to improve calculation efficiency and scale analytical systems.",
                    level: "Level: Advanced"
                },
                ml: {
                    desc: "ML & AI (scikit-learn, catboost, xgboost, tensorflow, statsmodels, prophet) — implementing regression, classification, clustering and time series models (ARIMA, SARIMAX); metric forecasting and anomaly analysis. Used for building automated ML pipelines and predictive models.",
                    level: "Level: Intermediate"
                },
                dataeng: {
                    desc: "AI Tools (Cursor, Open WebUI, LangFlow, Ollama) — developing and configuring LLM pipelines, model integration via API and creating AI solution prototypes based on open-source frameworks. Used for integrating AI tools into analytics and automation.",
                    level: "Level: Intermediate"
                },
                cloud: {
                    desc: "Orchestration & DevOps (Docker, Airflow, Cron, Git) — containerization and deployment of analytical and ML systems, scheduler configuration, CI/CD and pipeline monitoring. Ensures stable ETL operation and ML experiment reproducibility.",
                    level: "Level: Intermediate"
                },
                llm: {
                    desc: "APIs & Integration (REST, FastAPI, Requests) — external data integration, microservice development and API for exchanging analytics and model results. Enables system scaling and connecting analytical modules with external services.",
                    level: "Level: Intermediate"
                }
            }
        },
        experience: {
            title: "Work Experience",
            expandHint: "Click to see more",
            job1: {
                date: "03/2024 – Present",
                title: "Senior Data Analyst (ML/DS)",
                company: '<a href="https://gear-games.com/ru/" target="_blank" rel="noopener">Gear Games</a>',
                desc: "Conducted in-depth analytical research and increased 1-day retention by 30% through product insights and experimentation.",
                desc1: "Conducted in-depth analytical research and increased 1-day retention by 30% through product insights and experimentation.",
                desc2: "Developed the company’s A/B testing culture — built automated frameworks for experiment design and result evaluation; successfully completed 20+ A/B tests.",
                desc3: "Enhanced internal Python analytics libraries: created a multithreaded data extraction library, accelerating data loading by 50×.",
                desc4: "Implemented ML-based clustering of incoming traffic: accurately labeled users based on their first-day behavior to improve marketing and monetization efficiency; reduced user acquisition costs and improved targeting accuracy.",
                desc5: "Automated reporting and ETL workflows: built retention dashboards and cross-project performance reports.",
                desc6: "Pioneered internal AI and LLM initiatives: developed an AI incident manager, task assistant, MCP integrations for YouTrack and OpenSearch.",
                desc7: "Designed real-time dashboards, event schemas, and alerting systems on top of OpenSearch/ElasticSearch.",
                desc8: "Contributed to company-wide initiatives, including building a forecasting system for the internal tournament.",
                desc9: "Acted as Tech Lead and Interim Team Lead: led daily meetings, sprint planning, and coordinated a cross-functional team of 10 people to deliver product features."
            },
            job2: {
                date: "10/2022 – 01/2024 (Remote)",
                title: "Quantitative Researcher / Algorithmic Trading Developer",
                company: '<a href="https://qtshark.com/" target="_blank" rel="noopener">Quant Shark Technologies (Startup by Kamtor)</a>',
                desc: "Studied and implemented algorithmic trading strategies while building the startup’s quantitative research stack.",
                desc1: 'Studied and implemented the strategy from the academic paper “Evaluation of Dynamic Cointegration-Based Pairs Trading Strategy in the Cryptocurrency Market” (Masood Tadi & Irina Kortchemski, 2021).',
                desc2: "Supervised the architecture and development of an internal backtesting system, including technical documentation, data ingestion pipeline, computation modules, and visualization layer.",
                desc3: "Automated trading strategies via cryptocurrency exchange APIs: implemented a strategy that automatically opens long positions upon Binance listing announcements; deployed and maintained trading bots on dedicated Ubuntu servers.",
                desc4: "Performed parameter optimization and sensitivity analysis of trading strategies."
            },
            job3: {
                date: "08/2021 – 09/2022",
                title: "Data Analyst / Technical Specialist",
                company: '<a href="https://incraft3d.ru/" target="_blank" rel="noopener">InCraft by Baustov</a>',
                desc: "Designed and automated core analytics tooling for a 3D-printing production workflow.",
                desc1: "Designed and built a custom equipment and consumables tracking system for 3D printers, covering supply, stock, and utilization workflows.",
                desc2: "Optimized 3D printing parameters through data-driven analysis, reducing material waste and print errors.",
                desc3: "Developed a custom Python plugin for Cura to version-control print settings and store technical notes, improving reproducibility of production results.",
                desc4: "Built a demand and seasonality forecasting model to optimize supply planning and ensure stock availability during peak order periods.",
                desc5: 'Created educational videos on 3D printer operation and maintenance. <a href="https://www.youtube.com/watch?v=sfYMo3Qh5Ek" target="_blank" rel="noopener">Example video</a>'
            },
            job4: {
                date: "06/2022 – 09/2022",
                title: "ML & AI Intern",
                company: '<a href="https://niigazekonomika.gazprom.ru/" target="_blank" rel="noopener">NIIgazEconomika LLC</a>',
                desc: "Contributed to applied research on AI-driven anomaly detection for industrial data.",
                desc1: "Conducted research on time series anomaly detection using machine learning and AI-based methods.",
                desc2: "Developed a clustering-based anomaly detection model for identifying irregularities in production and operational data."
            }
        },
        education: {
            title: "Education",
            university: "Gubkin Russian State University of Oil and Gas",
            degree1: {
                badge: "Bachelor",
                title: "Applied Mathematics"
            },
            degree2: {
                title: "Translator in Professional Communication"
            },
            period1: "2019 - 2023",
            period2: "2021 - 2023",
            publicationsTitle: "Publications",
            pub1: "Surrogate Models for the Compressibility Factor of Natural Gas",
            pub2: "Machine Learning-Based Models for the Compressibility Factor of Natural Gas",
            pub3: "Intelligent Analysis Of Geological And Geophysical Data",
            pub4: "A series of digests of scientific and technical publications"
        },
        publications: {
            title: "Publications",
            researchgate: "ResearchGate",
            conferences: "Conferences"
        },
        projects: {
            title: "Projects",
            wip: {
                title: "Section is under construction",
                description: "View projects on GitHub:"
            }
        },
        contact: {
            title: "Get in Touch",
            text: "Open to interesting projects and collaboration opportunities",
            email: "your.email@example.com",
            linkedin: "LinkedIn",
            github: "GitHub",
            telegram: "Telegram"
        },
        footer: {
            copyright: "&copy; 2025 Ruslan Akhmetzianov. All rights reserved."
        }
    }
};

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}

// Make translations globally available
window.translations = translations;

// Debug log
console.log('📚 Translations loaded:', Object.keys(translations));

