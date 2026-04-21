const translations = {
    ar: {
        "nav-home": "الرئيسية",
        "nav-services": "خدماتنا",
        "hero-title": "صحراء لاير",
        "hero-desc": "بساطة التصميم بروح مغربية عصرية"
    },
    en: {
        "nav-home": "Home",
        "nav-services": "Services",
        "hero-title": "Sahara Layer",
        "hero-desc": "Design simplicity with a modern Moroccan spirit"
    }
    // يمكنك إضافة الفرنسية والإسبانية هنا بنفس النمط
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    // تحديث النصوص
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // تحديث العناوين الكبيرة يدوياً للتبسيط
    if(lang !== 'ar') {
        document.getElementById('hero-title').innerText = translations[lang]['hero-title'];
        document.getElementById('hero-desc').innerText = translations[lang]['hero-desc'];
    }
}
