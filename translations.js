// Complete translations for the portfolio website
const translations = {
    ru: {
        page: {
            title: "Product Analyst / Analytics Engineer"
        },
        nav: {
            brand: "Портфолио",
            about: "О себе",
            skills: "Навыки",
            experience: "Опыт",
            education: "Образование",
            publications: "Публикации",
            projects: "Проекты",
            contact: "Контакты",
            tooltip: {
                analytics: "Показать проекты по продуктовой аналитике",
                engineering: "Показать инженерные и AI проекты"
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
        skills: {
            title: "Навыки",
            analyticsCategory: "Продуктовая аналитика",
            engineeringCategory: "Инженерия и ML"
        },
        experience: {
            title: "Опыт работы",
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
            title: "Образование",
            degree1: "Applied Mathematics, Gubkin University (B.Sc.)",
            degree2: "Translator in Professional Communication"
        },
        publications: {
            title: "Публикации",
            researchgate: "ResearchGate",
            conferences: "Конференции"
        },
        projects: {
            title: "Проекты",
            project1: {
                title: "Анализ поведения пользователей",
                description: "Комплексный анализ поведения пользователей с использованием cohort analysis и retention метрик. Результат - увеличение удержания на 30%."
            },
            project2: {
                title: "Фреймворк A/B тестирования",
                description: "Разработка фреймворка для проведения и анализа A/B тестов с автоматическим расчетом статистической значимости."
            },
            project3: {
                title: "Модель прогнозирования оттока",
                description: "ML-модель для прогнозирования оттока пользователей с точностью 87%. Интеграция с production pipeline через API."
            },
            project4: {
                title: "Автоматизация Data Pipeline",
                description: "Построение автоматизированного ETL pipeline с использованием Airflow и dbt для обработки данных в реальном времени."
            },
            project5: {
                title: "AI-помощник для аналитики",
                description: "Разработка чат-бота на базе LLM для автоматического ответа на аналитические вопросы и генерации SQL запросов."
            },
            project6: {
                title: "Дашборд доходов",
                description: "Интерактивный дашборд для отслеживания revenue метрик в реальном времени с drill-down функциональностью."
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
            skills: "Skills",
            experience: "Experience",
            education: "Education",
            publications: "Publications",
            projects: "Projects",
            contact: "Contact",
            tooltip: {
                analytics: "Show Product Analytics projects",
                engineering: "Show Engineering & AI projects"
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
        skills: {
            title: "Skills",
            analyticsCategory: "Product Analytics",
            engineeringCategory: "Engineering & ML"
        },
        experience: {
            title: "Work Experience",
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
            title: "Education",
            degree1: "Applied Mathematics, Gubkin University (B.Sc.)",
            degree2: "Translator in Professional Communication"
        },
        publications: {
            title: "Publications",
            researchgate: "ResearchGate",
            conferences: "Conferences"
        },
        projects: {
            title: "Projects",
            project1: {
                title: "User Behavior Analysis",
                description: "Comprehensive user behavior analysis using cohort analysis and retention metrics. Result - 30% increase in user retention."
            },
            project2: {
                title: "A/B Testing Framework",
                description: "Development of a framework for conducting and analyzing A/B tests with automatic statistical significance calculation."
            },
            project3: {
                title: "Churn Prediction Model",
                description: "ML model for predicting user churn with 87% accuracy. Integration with production pipeline via API."
            },
            project4: {
                title: "Data Pipeline Automation",
                description: "Building automated ETL pipeline using Airflow and dbt for real-time data processing."
            },
            project5: {
                title: "AI-Powered Analytics Assistant",
                description: "Development of an LLM-based chatbot for automatic answers to analytical questions and SQL query generation."
            },
            project6: {
                title: "Revenue Dashboard",
                description: "Interactive dashboard for tracking revenue metrics in real-time with drill-down functionality."
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

