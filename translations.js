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
            stack: "Stack",
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
            p1: "<strong class='analytics-highlight'>Как Product Analyst,</strong> я провожу сложные исследования пользовательского поведения, A/B-тесты и создаю дашборды для принятия решений. Проектирую аналитические события и схемы данных в OpenSearch и PostgreSQL.",
            p2: "<strong class='engineering-highlight'>Как Analytics Engineer,</strong> я разрабатываю надежные ETL-процессы, создаю ML-модели и внедряю AI-решения для автоматизации аналитических процессов.",
            stat1: "года опыта",
            stat2: "аналитических исследований",
            stat3: "автоматизированных отчётов / ETL-процессов"
        },
        stack: {
            title: "Stack",
            analytics: {
                title: "Продуктовая аналитика",
                sql: {
                    desc: "Продвинутый уровень: сложные запросы, оптимизация, оконные функции. Работа с миллиардами строк данных.",
                    level: "Уровень: Продвинутый"
                },
                python: {
                    desc: "Продвинутый уровень: многопоточность, оптимизация памяти, сложная агрегация данных. Ускорил ETL в 50+ раз.",
                    level: "Уровень: Продвинутый"
                },
                tableau: {
                    desc: "Средний уровень: создание дашбордов, сложные вычисления, интеграция с различными источниками данных.",
                    level: "Уровень: Средний"
                },
                abtesting: {
                    desc: "Продвинутый уровень: провёл 10+ успешных A/B-тестов, статистический анализ, определение значимости.",
                    level: "Уровень: Продвинутый"
                },
                opensearch: {
                    desc: "Продвинутый уровень: проектирование схем событий, создание дашбордов, алертинг в реальном времени.",
                    level: "Уровень: Продвинутый"
                }
            },
            engineering: {
                title: "Инженерия и ML",
                python_adv: {
                    desc: "Продвинутый уровень: FastAPI, async/await, метапрограммирование, создание библиотек. Разработка MCP серверов.",
                    level: "Уровень: Продвинутый"
                },
                ml: {
                    desc: "Средний уровень: кластеризация, классификация, time series, feature engineering. Создал ML-кластеризацию трафика.",
                    level: "Уровень: Средний"
                },
                dataeng: {
                    desc: "Базовый уровень: проектирование ETL процессов, автоматизация отчётности, работа с таблицами.",
                    level: "Уровень: Базовый"
                },
                cloud: {
                    desc: "Базовый уровень: использование облачных сервисов для аналитики, базовые знания инфраструктуры.",
                    level: "Уровень: Базовый"
                },
                llm: {
                    desc: "Средний уровень: разработка AI-менеджеров, MCP серверов, интеграция LLM. Создал AI-инцидент менеджера.",
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
            p1: "<strong class='analytics-highlight'>As a Product Analyst,</strong> I conduct complex user behavior research, A/B tests, and create dashboards for decision making. Design analytical events and data schemas in OpenSearch and PostgreSQL.",
            p2: "<strong class='engineering-highlight'>As an Analytics Engineer,</strong> I develop robust ETL processes, create ML models, and implement AI solutions to automate analytical processes.",
            stat1: "Years of Experience",
            stat2: "Analytical Studies",
            stat3: "Automated Reports / ETL Processes"
        },
        stack: {
            title: "Stack",
            analytics: {
                title: "Product Analytics",
                sql: {
                    desc: "Advanced level: complex queries, optimization, window functions. Working with billions of rows of data.",
                    level: "Level: Advanced"
                },
                python: {
                    desc: "Advanced level: multithreading, memory optimization, complex data aggregation. Accelerated ETL by 50+ times.",
                    level: "Level: Advanced"
                },
                tableau: {
                    desc: "Intermediate level: creating dashboards, complex calculations, integration with various data sources.",
                    level: "Level: Intermediate"
                },
                abtesting: {
                    desc: "Advanced level: conducted 10+ successful A/B tests, statistical analysis, significance determination.",
                    level: "Level: Advanced"
                },
                opensearch: {
                    desc: "Advanced level: designing event schemas, creating dashboards, real-time alerting.",
                    level: "Level: Advanced"
                }
            },
            engineering: {
                title: "Engineering & ML",
                python_adv: {
                    desc: "Advanced level: FastAPI, async/await, metaprogramming, creating libraries. MCP server development.",
                    level: "Level: Advanced"
                },
                ml: {
                    desc: "Intermediate level: clustering, classification, time series, feature engineering. Created ML traffic clustering.",
                    level: "Level: Intermediate"
                },
                dataeng: {
                    desc: "Basic level: ETL process design, report automation, working with tables.",
                    level: "Level: Basic"
                },
                cloud: {
                    desc: "Basic level: using cloud services for analytics, basic infrastructure knowledge.",
                    level: "Level: Basic"
                },
                llm: {
                    desc: "Intermediate level: developing AI managers, MCP servers, LLM integration. Created AI incident manager.",
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

