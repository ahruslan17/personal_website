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
                title: "Data Analyst",
                company: "Gear Games",
                desc: "Automated data workflows, built retention analytics, created player segmentation via clustering",
                desc1: "Проведение глубоких аналитических исследований. Повысил Retention-1d на 30%, завершил 10+ успешных AB-тестов",
                desc2: "Улучшение аналитических Python-библиотек. Создал многопоточную выгрузку данных, ускорив загрузку в 50+ раз",
                desc3: "Создание ML-кластеризации входящего трафика. Достоверная разметка игроков по 1-му дню жизни в игре для маркетинга и монетизации. Сократил расходы на закупку трафика, повысил точность таргетинговой системы офферов",
                desc4: "Автоматизация отчётности и ETL-процессы. Разработал отчёт по ретеншену, отчёт по основным метрикам и многие др.",
                desc5: "Развитие AI, LLM, MCP. Создал ai-инцидент менеджера, ассистента по заведению задач, MCP YoutTrack, MCP OpenSearch",
                desc6: "Создание дашбордов, схем ивентов и алертинга в реальном времени на базе OpenSearch/ElasticSearch",
                desc7: "Активное участие в жизни компании, разработка системы прогнозов для внутреннего турнира",
                desc8: "Исполнение обязанностей тимлида команды разработки и техлида отдела аналитики: проведение дейликов, планирование спринтов, координация работы кросс-функциональной команды из 10 человек, выпуск фичей"
            },
            job2: {
                date: "10/2022 – 01/2024 (удалённо)",
                title: "Fullstack Analyst",
                company: "Quant Shark Technologies (стартап)",
                desc: "Разработал и внедрил архитектуру системы бэктестов для тестирования криптотрейдинговых стратегий на исторических данных",
                desc2: "Создал и автоматизировал новостную торговую стратегию, открывающую длинные позиции на вторичных биржах сразу после появления новостей о листинге токена на Binance — с автоматическим парсингом новостей и интеграцией с API бирж",
                desc3: "Исследовал, построил и протестировал стратегию статистического арбитража с динамическим окном переобучения на основе научных публикаций",
                desc4: "Настроил и поддерживал инфраструктуру для автоматизированной торговли на выделенном сервере Ubuntu, обеспечив стабильное выполнение и мониторинг стратегий",
                desc5: "Подготовил технические спецификации и архитектурную документацию для системы бэктестов, использовавшиеся разработчиками для дальнейшего расширения проекта"
            },
            job3: {
                date: "06/2022 – 09/2022",
                title: "Junior ML&AI Researcher",
                company: "ООО «НИИгазэкономика»",
                desc: "Решал задачи в области детекции аномалий временных рядов (ML, AI)"
            }
        },
        education: {
            title: "Образование и публикации",
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
                title: "Data Analyst",
                company: "Gear Games",
                desc: "Automated data workflows, built retention analytics, created player segmentation via clustering",
                desc1: "Conducted deep analytical research. Improved Retention-1d by 30%, completed 10+ successful AB-tests",
                desc2: "Enhanced analytical Python libraries. Created multi-threaded data export, accelerated loading by 50+ times",
                desc3: "Created ML clustering for incoming traffic. Accurate player labeling by 1st day of life in-game for marketing and monetization. Reduced traffic acquisition costs, improved targeting system accuracy for offers",
                desc4: "Report automation and ETL processes. Developed retention report, key metrics report and many others",
                desc5: "AI, LLM, MCP development. Created AI incident manager, task creation assistant, MCP YouTrack, MCP OpenSearch",
                desc6: "Created dashboards, event schemas and real-time alerting based on OpenSearch/ElasticSearch",
                desc7: "Active participation in company life, developed forecasting system for internal tournament",
                desc8: "Execution of team lead responsibilities for development team and tech lead for analytics department: conducted daily standups, sprint planning, coordinated work of cross-functional team of 10 people, released features"
            },
            job2: {
                date: "10/2022 – 01/2024 (Remote)",
                title: "Fullstack Analyst",
                company: "Quant Shark Technologies (startup)",
                desc: "Designed and implemented the architecture of a comprehensive backtesting system for cryptocurrency trading strategies on historical market data",
                desc2: "Developed and automated a news-driven trading bot that opens long positions on secondary exchanges immediately after listings are announced for new tokens on Binance, integrating real-time news parsing and exchange APIs",
                desc3: "Researched, built, and backtested statistical arbitrage strategies with adaptive retraining windows based on academic literature",
                desc4: "Deployed and maintained trading automation infrastructure on a dedicated Ubuntu server, ensuring stable execution and monitoring of live strategies",
                desc5: "Authored technical specifications and architectural documentation for the backtesting framework to guide further development by the engineering team"
            },
            job3: {
                date: "06/2022 – 09/2022",
                title: "Junior ML&AI Researcher",
                company: "NIIgazEconomika LLC",
                desc: "Solved problems in the field of time series anomaly detection (ML, AI)"
            }
        },
        education: {
            title: "Education & Publications",
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

