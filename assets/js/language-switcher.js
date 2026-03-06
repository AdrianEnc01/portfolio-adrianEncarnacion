/* ============================================
   BILINGUAL LANGUAGE SWITCHER
   Supports English (EN) and Spanish (ES)
   ============================================ */

class LanguageSwitcher {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
        this.translations = {};
        this.init();
    }
    
    async init() {
        // Load both language files
        await this.loadTranslations();
        
        // Set up language buttons
        this.setupLanguageButtons();
        
        // Apply saved language
        this.applyLanguage(this.currentLanguage);
    }
    
    async loadTranslations() {
        try {
            // Load English translations
            const enResponse = await fetch('data/content-en.json');
            this.translations.en = await enResponse.json();
            
            // Load Spanish translations
            const esResponse = await fetch('data/content-es.json');
            this.translations.es = await esResponse.json();
            
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }
    
    setupLanguageButtons() {
        const langButtons = document.querySelectorAll('.lang-btn');
        
        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
        });
    }
    
    switchLanguage(lang) {
        if (lang === this.currentLanguage) return;
        
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        // Update button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
        
        // Apply translations
        this.applyLanguage(lang);
        
        // Dispatch custom event for other components
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }
    
    applyLanguage(lang) {
        const translations = this.translations[lang];
        if (!translations) return;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getNestedTranslation(translations, key);
            
            if (translation) {
                // Check if element is an input or textarea
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
    
    getNestedTranslation(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }
}

// Initialize language switcher when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new LanguageSwitcher();
});
