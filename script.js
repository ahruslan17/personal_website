// Language Manager
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('portfolio-lang') || 'ru';
        this.langToggle = document.getElementById('langToggle');
        this.translations = window.translations || {};
        
        // Wait a bit for translations to load if not available immediately
        if (Object.keys(this.translations).length === 0) {
            console.log('⏳ Translations not loaded yet, waiting...');
            setTimeout(() => {
                this.translations = window.translations || {};
                this.init();
            }, 100);
        } else {
            this.init();
        }
    }

    init() {
        console.log('🌐 LanguageManager initializing...');
        console.log('Current language:', this.currentLang);
        console.log('Lang toggle element:', this.langToggle);
        console.log('Translations available:', Object.keys(this.translations));
        
        // Set initial language
        this.setLanguage(this.currentLang);

        // Add click event listener
        if (this.langToggle) {
            this.langToggle.addEventListener('click', async (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('🔄 Language toggle clicked!');
                await this.toggleLanguage();
            });
            console.log('✅ Language toggle event listener added');
        } else {
            console.error('❌ Language toggle element not found!');
        }
    }

    setLanguage(lang) {
        console.log('🔄 Setting language to:', lang);
        this.currentLang = lang;
        document.body.setAttribute('data-lang', lang);
        document.documentElement.setAttribute('lang', lang);
        localStorage.setItem('portfolio-lang', lang);

        // Update language toggle button
        if (this.langToggle) {
            const langOptions = this.langToggle.querySelectorAll('.lang-option');
            langOptions.forEach(option => {
                if (option.getAttribute('data-lang') === lang) {
                    option.classList.add('active');
                } else {
                    option.classList.remove('active');
                }
            });
        }

        // Update all translatable elements
        this.updateTranslations();
        console.log('✅ Language set to:', lang);
    }

    async toggleLanguage() {
        const newLang = this.currentLang === 'ru' ? 'en' : 'ru';
        console.log('🔄 Toggling language from', this.currentLang, 'to', newLang);
        
        // Start animation if available
        if (window.languageAnimation && !window.languageAnimation.isAnimating) {
            // Start animation and change language in the middle
            const animationPromise = window.languageAnimation.animateLanguageSwitch(this.currentLang, newLang);
            
            // Change language after pixels scatter
            setTimeout(() => {
                this.setLanguage(newLang);
            }, 1000);
            
            await animationPromise;
        } else {
            // Fallback: just change language without animation
            this.setLanguage(newLang);
        }
    }

    updateTranslations() {
        console.log('🔄 Updating translations for language:', this.currentLang);
        const elements = document.querySelectorAll('[data-i18n]');
        console.log('Found', elements.length, 'elements to translate');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            if (translation) {
                // Special handling for title tag
                if (element.tagName === 'TITLE') {
                    element.textContent = translation;
                } else {
                    element.innerHTML = translation;
                }
            } else {
                console.warn('⚠️ No translation found for key:', key);
            }
        });
        console.log('✅ Translations updated');
    }

    getTranslation(key) {
        const keys = key.split('.');
        let translation = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                return null;
            }
        }
        
        return translation;
    }
}

// Theme Toggle Functionality
class ThemeManager {
    constructor() {
        this.body = document.body;
        this.themeToggle = document.getElementById('themeToggle');
        this.themeTooltip = document.getElementById('themeTooltip');
        this.ANALYTICS_THEME = 'theme-analytics';
        this.ENGINEERING_THEME = 'theme-engineering';
        
        this.init();
    }

    init() {
        // Load saved theme from localStorage or default to analytics
        const savedTheme = localStorage.getItem('portfolio-theme') || this.ANALYTICS_THEME;
        this.setTheme(savedTheme);

        // Add click event listener
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Add smooth scroll for navigation links
        this.initSmoothScroll();

        // Add scroll animations
        this.initScrollAnimations();

        // Show tooltip on first visit
        this.initTooltip();
    }

    initTooltip() {
        this.heroSection = document.querySelector('.hero');
        this.isHovered = false;
        this.isOnHeroSection = true;

        // Position tooltip relative to button
        this.positionTooltip();

        // Initial show after delay
        setTimeout(() => {
            this.updateTooltipVisibility();
        }, 1500);

        // Handle hover
        this.themeToggle.parentElement.addEventListener('mouseenter', () => {
            this.isHovered = true;
            this.updateTooltipVisibility();
        });

        this.themeToggle.parentElement.addEventListener('mouseleave', () => {
            this.isHovered = false;
            this.updateTooltipVisibility();
        });

        // Handle scroll and resize
        let ticking = false;
        const handleScrollAndResize = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.handleTooltipScroll();
                    this.positionTooltip();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScrollAndResize, { passive: true });
        window.addEventListener('resize', handleScrollAndResize, { passive: true });
    }

    positionTooltip() {
        // Calculate button position
        const buttonRect = this.themeToggle.getBoundingClientRect();
        
        // Position tooltip below the button
        const tooltipTop = buttonRect.bottom + 20;
        const tooltipLeft = buttonRect.left + (buttonRect.width / 2) - 140; // Center tooltip (280px / 2)
        
        // Calculate arrow position to point to button center
        const buttonCenterX = buttonRect.left + (buttonRect.width / 2);
        const tooltipLeftPos = tooltipLeft;
        const arrowOffset = buttonCenterX - tooltipLeftPos;
        
        this.themeTooltip.style.top = `${tooltipTop}px`;
        this.themeTooltip.style.left = `${tooltipLeft}px`;
        this.themeTooltip.style.right = 'auto';
        
        // Set arrow position to point to button center
        this.themeTooltip.style.setProperty('--arrow-offset', `${arrowOffset}px`);
    }

    handleTooltipScroll() {
        if (!this.heroSection) return;

        const heroBottom = this.heroSection.offsetTop + this.heroSection.offsetHeight;
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // Check if we're on hero section (with some margin)
        const wasOnHero = this.isOnHeroSection;
        this.isOnHeroSection = scrollPosition < heroBottom - 150;

        // Update visibility if state changed
        if (wasOnHero !== this.isOnHeroSection) {
            this.updateTooltipVisibility();
        }
    }

    updateTooltipVisibility() {
        // Don't control tooltip if we're in Stack section - let StackHintManager handle it
        if (window.stackHintManager && window.stackHintManager.isInStackSection) {
            return;
        }
        
        // Show tooltip ONLY if: on hero section AND (always OR hovering)
        // When not on hero - show ONLY on hover
        if (this.isOnHeroSection) {
            // On hero section - always show (unless manually hovering out)
            this.themeTooltip.classList.add('show');
        } else {
            // Not on hero section - show only on hover
            if (this.isHovered) {
                this.themeTooltip.classList.add('show');
            } else {
                this.themeTooltip.classList.remove('show');
            }
        }
    }

    setTheme(theme) {
        if (theme === this.ANALYTICS_THEME) {
            this.body.classList.remove(this.ENGINEERING_THEME);
            this.body.classList.add(this.ANALYTICS_THEME);
        } else {
            this.body.classList.remove(this.ANALYTICS_THEME);
            this.body.classList.add(this.ENGINEERING_THEME);
        }
        
        localStorage.setItem('portfolio-theme', theme);
    }

    toggleTheme() {
        const currentTheme = this.body.classList.contains(this.ANALYTICS_THEME) 
            ? this.ANALYTICS_THEME 
            : this.ENGINEERING_THEME;
        
        const newTheme = currentTheme === this.ANALYTICS_THEME 
            ? this.ENGINEERING_THEME 
            : this.ANALYTICS_THEME;
        
        this.setTheme(newTheme);
        
        // Add a little feedback animation
        this.themeToggle.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.themeToggle.style.transform = '';
        }, 200);
    }

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    initScrollAnimations() {
        // Enhanced Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered animation delay
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0) scale(1)';
                        entry.target.classList.add('animate-in');
                    }, index * 100);
                }
            });
        }, observerOptions);

        // Observe elements for animation with different animation types
        const elementsToAnimate = document.querySelectorAll(
            '.stat-item, .skill-category, .timeline-item, .project-card, .contact-link'
        );

        elementsToAnimate.forEach((el, index) => {
            // Set initial state
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px) scale(0.9)';
            el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            
            // Add different animation types based on element
            if (el.classList.contains('stat-item')) {
                el.style.transform = 'translateY(30px) scale(0.95)';
            } else if (el.classList.contains('skill-category')) {
                el.style.transform = 'translateX(-30px) scale(0.95)';
            } else if (el.classList.contains('timeline-item')) {
                el.style.transform = 'translateX(30px) scale(0.95)';
            } else if (el.classList.contains('project-card')) {
                el.style.transform = 'translateY(40px) rotateX(10deg) scale(0.9)';
            } else if (el.classList.contains('contact-link')) {
                el.style.transform = 'translateX(-20px) scale(0.95)';
            }
            
            observer.observe(el);
        });

        // Typing effect removed - name will be static
    }

}

// Enhanced Particle Effect for Background
class ParticleEffect {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 80;
        this.mouse = { x: 0, y: 0 };
        this.isMouseMoving = false;
        this.mouseTimeout = null;
        
        this.init();
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '0';
        this.canvas.style.opacity = '0.4';
        
        document.body.insertBefore(this.canvas, document.body.firstChild);
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        
        this.createParticles();
        this.animate();
    }

    handleMouseMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        this.isMouseMoving = true;
        
        clearTimeout(this.mouseTimeout);
        this.mouseTimeout = setTimeout(() => {
            this.isMouseMoving = false;
        }, 1000);
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.8,
                vy: (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 3 + 1,
                opacity: Math.random() * 0.5 + 0.2,
                pulse: Math.random() * Math.PI * 2
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Get current theme color
        const style = getComputedStyle(document.body);
        const primaryColor = style.getPropertyValue('--primary-color').trim();
        
        this.particles.forEach((particle, index) => {
            // Update particle position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Add pulsing effect
            particle.pulse += 0.02;
            const pulseRadius = particle.radius + Math.sin(particle.pulse) * 0.5;
            
            // Mouse interaction
            if (this.isMouseMoving) {
                const dx = this.mouse.x - particle.x;
                const dy = this.mouse.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    const force = (100 - distance) / 100;
                    particle.vx += (dx / distance) * force * 0.01;
                    particle.vy += (dy / distance) * force * 0.01;
                }
            }
            
            // Apply friction
            particle.vx *= 0.99;
            particle.vy *= 0.99;
            
            // Wrap around screen
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle with glow effect
            this.ctx.save();
            this.ctx.globalAlpha = particle.opacity;
            
            // Glow effect
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = primaryColor;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, pulseRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = primaryColor;
            this.ctx.fill();
            
            this.ctx.restore();
        });
        
        // Connect nearby particles with enhanced lines
        this.particles.forEach((p1, i) => {
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    this.ctx.save();
                    this.ctx.globalAlpha = (1 - distance / 120) * 0.3;
                    this.ctx.strokeStyle = primaryColor;
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.stroke();
                    this.ctx.restore();
                }
            });
        });
        
        requestAnimationFrame(() => this.animate());
    }
}


// Enhanced Project Filter with Morphing Animations
class ProjectFilter {
    constructor() {
        this.init();
    }

    init() {
        const themeToggle = document.getElementById('themeToggle');
        
        themeToggle.addEventListener('click', () => {
            // Add morphing effect to project cards
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
                card.style.transform = 'scale(0.95) rotateY(5deg)';
                
                setTimeout(() => {
                    card.style.transform = '';
                }, 300 + (index * 100));
            });

            // Add morphing effect to skill categories
            const skillCategories = document.querySelectorAll('.skill-category');
            skillCategories.forEach((category, index) => {
                category.style.transition = `all 0.5s ease ${index * 0.1}s`;
                category.style.transform = 'scale(0.98) rotateX(5deg)';
                
                setTimeout(() => {
                    category.style.transform = '';
                }, 200 + (index * 100));
            });
        });
    }
}

// Morphing Animation Manager
class MorphingAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Add morphing effects to theme toggle
        const themeToggle = document.getElementById('themeToggle');
        
        themeToggle.addEventListener('click', () => {
            // Add ripple effect
            this.createRippleEffect(themeToggle);
            
            // Add morphing to hero visual
            this.morphHeroVisual();
        });
    }

    createRippleEffect(element) {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(var(--primary-color-rgb), 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.left = '50%';
        ripple.style.top = '50%';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.marginLeft = '-50px';
        ripple.style.marginTop = '-50px';
        ripple.style.pointerEvents = 'none';
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    morphHeroVisual() {
        const visualCircle = document.querySelector('.visual-circle');
        if (visualCircle) {
            visualCircle.style.animation = 'morphing 1s ease-in-out';
            setTimeout(() => {
                visualCircle.style.animation = 'pulse 3s ease-in-out infinite, morphing 8s ease-in-out infinite';
            }, 1000);
        }
    }
}

// Navbar Scroll Effect
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.lastScroll = 0;
        
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                this.navbar.style.padding = '0.5rem 0';
                this.navbar.style.boxShadow = '0 4px 20px var(--shadow-color)';
            } else {
                this.navbar.style.padding = '1rem 0';
                this.navbar.style.boxShadow = '0 2px 10px var(--shadow-color)';
            }
            
            this.lastScroll = currentScroll;
        });
    }
}

// Timeline Accordion Manager
class TimelineAccordionManager {
    constructor() {
        this.timelineItems = document.querySelectorAll('.timeline-item');
        this.expandHint = document.getElementById('expandHint');
        this.hasClickedSecondItem = false;
        this.init();
    }

    init() {
        this.timelineItems.forEach(item => {
            const content = item.querySelector('.timeline-content');
            content.addEventListener('click', () => this.toggleItem(item));
        });
        
        // Set first item as expanded by default
        if (this.timelineItems.length > 0) {
            this.timelineItems[0].classList.add('expanded');
        }
        
        // Show hint for second item after a delay
        setTimeout(() => {
            this.showHint();
        }, 2000);
    }

    toggleItem(clickedItem) {
        this.timelineItems.forEach(item => {
            item.classList.toggle('expanded', item === clickedItem);
        });
        
        // Hide hint when second item is clicked
        if (clickedItem === this.timelineItems[1] && !this.hasClickedSecondItem) {
            this.hideHint();
            this.hasClickedSecondItem = true;
        }
    }
    
    showHint() {
        if (this.expandHint && !this.hasClickedSecondItem) {
            setTimeout(() => {
                this.expandHint.classList.add('show');
            }, 500);
        }
    }
    
    hideHint() {
        if (this.expandHint) {
            this.expandHint.classList.remove('show');
            setTimeout(() => {
                this.expandHint.classList.add('hidden');
            }, 500);
        }
    }
}

// Stack Tool Card Manager
class StackToolManager {
    constructor() {
        this.init();
    }

    init() {
        const toolCards = document.querySelectorAll('.stack-tool-card');
        
        toolCards.forEach(card => {
            card.addEventListener('click', () => {
                // Toggle active state
                card.classList.toggle('active');
            });
        });
        
        // Initialize visibility based on current theme
        this.updateStackVisibility();
        
        // Listen for theme changes
        const themeObserver = new MutationObserver(() => {
            this.updateStackVisibility();
        });
        
        themeObserver.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
    
    updateStackVisibility() {
        const analyticsStack = document.querySelector('.analytics-stack');
        const engineeringStack = document.querySelector('.engineering-stack');
        const isAnalytics = document.body.classList.contains('theme-analytics');
        
        if (analyticsStack && engineeringStack) {
            // Remove all classes
            analyticsStack.classList.remove('show', 'hide');
            engineeringStack.classList.remove('show', 'hide');
            
            // Add appropriate classes
            if (isAnalytics) {
                analyticsStack.classList.add('show');
                engineeringStack.classList.add('hide');
            } else {
                analyticsStack.classList.add('hide');
                engineeringStack.classList.add('show');
            }
        }
    }
}

// Stack Hint Manager - updates navbar tooltip text based on section
class StackHintManager {
    constructor() {
        this.isInStackSection = false;
        this.tooltip = document.getElementById('themeTooltip');
        this.analyticsText = this.tooltip?.querySelector('.analytics-text');
        this.engineeringText = this.tooltip?.querySelector('.engineering-text');
        this.themeToggle = document.querySelector('.theme-toggle-navbar');
        this.init();
    }
    
    init() {
        // Observe when Stack section is visible
        const stackSection = document.getElementById('stack');
        if (!stackSection) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const wasInStackSection = this.isInStackSection;
                this.isInStackSection = entry.isIntersecting;
                this.updateTooltipText();
                
                // Always show hint when in Stack section
                if (this.isInStackSection) {
                    this.showHint();
                    this.tooltip.classList.add('stack-hint-active');
                } else if (wasInStackSection) {
                    // Hide hint when leaving Stack section
                    this.hideHint();
                    this.tooltip.classList.remove('stack-hint-active');
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(stackSection);
        
        // Listen for theme changes
        const themeObserver = new MutationObserver(() => {
            this.updateTooltipText();
        });
        
        themeObserver.observe(document.body, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
    
    showHint() {
        if (!this.tooltip || !this.themeToggle) return;
        
        // Show tooltip - it will stay visible while in Stack section
        this.tooltip.classList.add('show');
    }
    
    hideHint() {
        if (this.tooltip) {
            this.tooltip.classList.remove('show');
        }
    }
    
    updateTooltipText() {
        if (!this.tooltip || !this.analyticsText || !this.engineeringText) return;
        
        const lang = document.documentElement.lang || 'ru';
        const translationsObj = translations[lang];
        const isAnalytics = document.body.classList.contains('theme-analytics');
        
        if (!translationsObj?.nav) return;
        
        if (this.isInStackSection) {
            // In Stack section - show stack-related tooltip
            if (!translationsObj.nav.stackTooltip) return;
            
            if (isAnalytics) {
                // Analytics theme -> show engineering stack hint
                this.analyticsText.style.display = 'none';
                this.engineeringText.style.display = 'block';
                this.engineeringText.textContent = translationsObj.nav.stackTooltip.engineering;
            } else {
                // Engineering theme -> show analytics stack hint
                this.analyticsText.style.display = 'block';
                this.engineeringText.style.display = 'none';
                this.analyticsText.textContent = translationsObj.nav.stackTooltip.analytics;
            }
            
            // Ensure hint stays visible in Stack section
            this.tooltip.classList.add('show');
            this.tooltip.classList.add('stack-hint-active');
        } else {
            // In other sections - show portfolio-related tooltip
            if (!translationsObj.nav.tooltip) return;
            
            if (isAnalytics) {
                // Analytics theme -> show engineering portfolio hint
                this.analyticsText.style.display = 'none';
                this.engineeringText.style.display = 'block';
                this.engineeringText.textContent = translationsObj.nav.tooltip.engineering;
            } else {
                // Engineering theme -> show analytics portfolio hint
                this.analyticsText.style.display = 'block';
                this.engineeringText.style.display = 'none';
                this.analyticsText.textContent = translationsObj.nav.tooltip.analytics;
            }
            
            // Remove Stack-specific classes when not in Stack
            this.tooltip.classList.remove('stack-hint-active');
        }
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio initializing with enhanced animations...');
    
    // Initialize opening animation
    const openingAnimation = new OpeningAnimation();
    window.openingAnimation = openingAnimation;
    
    // Initialize language animation
    const languageAnimation = new LanguageSwitchAnimation();
    window.languageAnimation = languageAnimation;
    
    // Initialize language manager
    const languageManager = new LanguageManager();
    
    // Make language manager globally accessible for debugging
    window.languageManager = languageManager;
    
    // Initialize theme manager
    const themeManager = new ThemeManager();
    
    // Initialize enhanced particle effect
    const particleEffect = new ParticleEffect();
    
    // Initialize enhanced project filter
    const projectFilter = new ProjectFilter();
    
    // Initialize morphing animations
    const morphingAnimations = new MorphingAnimations();
    
    // Initialize timeline accordion manager
    const timelineAccordion = new TimelineAccordionManager();
    
    // Initialize navbar scroll effect
    const navbarScroll = new NavbarScroll();
    
    // Initialize stack tool manager
    const stackToolManager = new StackToolManager();
    
    // Initialize stack hint manager and make it globally accessible
    const stackHintManager = new StackHintManager();
    window.stackHintManager = stackHintManager;
    
    console.log('✅ Portfolio website initialized with cool animations!');
    console.log('💡 Hover over the theme toggle button (📊/💻) in navbar to see what it does!');
    console.log('🌐 Switch language using the RU/EN toggle in the navbar.');
    console.log('✨ Move your mouse around to interact with the particle system!');
    console.log('🎬 Click RU/EN to see the amazing pixel scatter animation!');
    console.log('🔧 Language manager available as window.languageManager for debugging');
    console.log('🎭 Test pixel animation with: testPixelAnimation()');
    console.log('🎬 Test opening animation with: testOpeningAnimation()');
    
    // Play opening animation
    setTimeout(() => {
        openingAnimation.playOpeningAnimation();
    }, 500);
    
    // Test language switching after a short delay
    setTimeout(() => {
        console.log('🧪 Testing language switching...');
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            console.log('✅ Language toggle element found');
            console.log('Current language:', languageManager.currentLang);
            console.log('Available translations:', Object.keys(languageManager.translations));
        } else {
            console.error('❌ Language toggle element not found!');
        }
    }, 1000);
});

// Easter egg: Console greeting
console.log('%c Welcome to my Portfolio! ', 'background: linear-gradient(135deg, #FF6B35, #00FF9F); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c Looking at the code? I like your style! 😎', 'color: #FF6B35; font-size: 14px;');

// Minimal Opening Animation for Website
class OpeningAnimation {
    constructor() {
        this.overlay = null;
        this.isAnimating = false;
        this.init();
    }

    init() {
        this.createOverlay();
    }

    createOverlay() {
        // Create minimal overlay container
        this.overlay = document.createElement('div');
        this.overlay.className = 'minimal-animation-overlay';
        this.overlay.style.background = 'var(--bg-color)';
        this.overlay.style.position = 'fixed';
        this.overlay.style.top = '0';
        this.overlay.style.left = '0';
        this.overlay.style.width = '100%';
        this.overlay.style.height = '100%';
        this.overlay.style.zIndex = '10000';
        this.overlay.style.display = 'flex';
        this.overlay.style.alignItems = 'center';
        this.overlay.style.justifyContent = 'center';
        this.overlay.style.flexDirection = 'column';
        this.overlay.style.overflow = 'hidden';
        document.body.appendChild(this.overlay);
    }


    async playOpeningAnimation() {
        if (this.isAnimating) return;
        this.isAnimating = true;

        console.log('✨ Playing minimal opening animation...');

        try {
            // Step 1: Hide main content
            document.body.classList.add('opening-animation');
            
            // Step 2: Create minimal welcome screen
            await this.createMinimalWelcome();
            
            // Step 3: Wait briefly
            await this.delay(1500);
            
            // Step 4: Fade out overlay and show content
            await this.fadeOutOverlay();
            
            // Step 5: Show main content
            document.body.classList.remove('opening-animation');
            document.body.classList.add('opening-animation-complete');
            
            // Step 6: Clean up
            this.cleanup();
            
        } catch (error) {
            console.error('❌ Minimal animation error:', error);
            document.body.classList.remove('opening-animation');
            document.body.classList.add('opening-animation-complete');
            this.cleanup();
        } finally {
            this.isAnimating = false;
        }
    }

    async createMinimalWelcome() {
        return new Promise((resolve) => {
            // Create minimal welcome elements
            const welcomeContainer = document.createElement('div');
            welcomeContainer.style.textAlign = 'center';
            welcomeContainer.style.color = 'var(--text-color)';
            welcomeContainer.style.fontFamily = "'Inter', sans-serif";
            welcomeContainer.style.position = 'relative';
            welcomeContainer.style.zIndex = '2';
            
            // Main title with minimal appearance
            const title = document.createElement('h1');
            title.textContent = 'Welcome';
            title.style.fontSize = '4rem';
            title.style.fontWeight = '300';
            title.style.margin = '0';
            title.style.opacity = '0';
            title.style.transform = 'translateY(20px)';
            title.style.animation = 'minimalFadeIn 1s ease forwards';
            title.style.letterSpacing = '2px';
            title.style.color = 'var(--primary-color)';
            
            // Subtitle with minimal appearance
            const subtitle = document.createElement('p');
            subtitle.textContent = 'to my portfolio';
            subtitle.style.fontSize = '1.2rem';
            subtitle.style.fontWeight = '400';
            subtitle.style.margin = '20px 0 0 0';
            subtitle.style.opacity = '0';
            subtitle.style.transform = 'translateY(15px)';
            subtitle.style.animation = 'minimalFadeIn 0.8s ease 0.3s forwards';
            subtitle.style.letterSpacing = '1px';
            subtitle.style.color = 'var(--text-color)';
            subtitle.style.opacity = '0.8';
            
            // Minimal loading indicator
            const loader = document.createElement('div');
            loader.style.width = '80px';
            loader.style.height = '2px';
            loader.style.background = 'var(--primary-color)';
            loader.style.margin = '40px auto 0';
            loader.style.borderRadius = '1px';
            loader.style.opacity = '0';
            loader.style.animation = 'minimalFadeIn 0.6s ease 0.6s forwards, minimalPulse 1.5s ease-in-out infinite 1.2s';
            
            // Add elements to container
            welcomeContainer.appendChild(title);
            welcomeContainer.appendChild(subtitle);
            welcomeContainer.appendChild(loader);
            
            // Add to overlay
            this.overlay.appendChild(welcomeContainer);
            
            // Resolve after animation setup
            setTimeout(() => resolve(), 100);
        });
    }


    async fadeOutOverlay() {
        return new Promise((resolve) => {
            let progress = 0;
            const duration = 800;
            const startTime = performance.now();
            
            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                progress = Math.min(elapsed / duration, 1);
                
                // Minimal fade out effect
                this.overlay.style.opacity = 1 - progress;
                this.overlay.style.transform = `scale(${1 + progress * 0.02})`;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            
            requestAnimationFrame(animate);
        });
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    cleanup() {
        if (this.overlay && this.overlay.parentNode) {
            this.overlay.parentNode.removeChild(this.overlay);
        }
    }
}

// Language Switch Animation with Pixel Effect
class LanguageSwitchAnimation {
    constructor() {
        this.overlay = null;
        this.isAnimating = false;
        this.init();
    }

    init() {
        this.createOverlay();
    }

    createOverlay() {
        // Create overlay container for smooth transition
        this.overlay = document.createElement('div');
        this.overlay.className = 'language-animation-overlay';
        this.overlay.style.position = 'fixed';
        this.overlay.style.top = '0';
        this.overlay.style.left = '0';
        this.overlay.style.width = '100%';
        this.overlay.style.height = '100%';
        this.overlay.style.zIndex = '10000';
        this.overlay.style.pointerEvents = 'none';
        this.overlay.style.opacity = '0';
        this.overlay.style.background = 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(0, 255, 159, 0.1))';
        this.overlay.style.backdropFilter = 'blur(0px)';
        this.overlay.style.transition = 'opacity 0.2s ease, backdrop-filter 0.2s ease';
        
        document.body.appendChild(this.overlay);
    }

    async animateLanguageSwitch(fromLang, toLang) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        console.log('🎬 Starting smooth language switch animation:', fromLang, '→', toLang);

        try {
            // Step 1: Show overlay with blur effect
            this.overlay.style.opacity = '1';
            this.overlay.style.backdropFilter = 'blur(8px)';
            
            // Step 2: Create wave effect across the page
            await this.createWaveEffect();
            
            // Step 3: Wait for wave to complete (reduced from 800ms to 400ms)
            await this.delay(400);
            
            // Step 4: Fade out overlay
            this.overlay.style.opacity = '0';
            this.overlay.style.backdropFilter = 'blur(0px)';
            
            // Step 5: Clean up after transition (reduced from 300ms to 200ms)
            setTimeout(() => this.cleanup(), 200);
            
        } catch (error) {
            console.error('❌ Language switch animation error:', error);
            this.cleanup();
        } finally {
            this.isAnimating = false;
        }
    }

    async createWaveEffect() {
        return new Promise((resolve) => {
            // Create wave elements that sweep across the page (reduced to 2 waves)
            const waveCount = 2;
            let completedWaves = 0;
            
            for (let i = 0; i < waveCount; i++) {
                const wave = document.createElement('div');
                wave.style.position = 'absolute';
                wave.style.top = '0';
                wave.style.left = '-100%';
                wave.style.width = '100%';
                wave.style.height = '100%';
                wave.style.background = `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(var(--primary-color-rgb), 0.1) 50%, 
                    transparent 100%)`;
                wave.style.zIndex = '10001';
                wave.style.pointerEvents = 'none';
                wave.style.animation = `waveSweep 0.8s ease-out forwards`; // Reduced from 1.2s to 0.8s
                wave.style.animationDelay = `${i * 0.1}s`; // Reduced from 0.2s to 0.1s
                
                this.overlay.appendChild(wave);
                
                // Remove wave after animation
                setTimeout(() => {
                    if (wave.parentNode) {
                        wave.parentNode.removeChild(wave);
                    }
                    completedWaves++;
                    if (completedWaves === waveCount) {
                        resolve();
                    }
                }, 800 + (i * 100)); // Reduced timing
            }
        });
    }


    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    cleanup() {
        if (this.overlay && this.overlay.parentNode) {
            this.overlay.parentNode.removeChild(this.overlay);
        }
        // Recreate overlay for next use
        this.createOverlay();
    }
}

// Debug functions for testing language switching
window.testLanguageSwitch = function() {
    if (window.languageManager) {
        console.log('🧪 Testing language switch...');
        window.languageManager.toggleLanguage();
    } else {
        console.error('❌ Language manager not available');
    }
};

window.setLanguage = function(lang) {
    if (window.languageManager) {
        console.log('🧪 Setting language to:', lang);
        window.languageManager.setLanguage(lang);
    } else {
        console.error('❌ Language manager not available');
    }
};

window.testPixelAnimation = function() {
    if (window.languageAnimation) {
        console.log('🎬 Testing pixel animation...');
        window.languageAnimation.animateLanguageSwitch('ru', 'en');
    } else {
        console.error('❌ Language animation not available');
    }
};

window.testOpeningAnimation = function() {
    if (window.openingAnimation) {
        console.log('🎬 Testing opening animation...');
        window.openingAnimation.playOpeningAnimation();
    } else {
        console.error('❌ Opening animation not available');
    }
};

