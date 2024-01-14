let currentLanguage = 'en';

function toggleLanguage() {
    const greetingElement = document.getElementById('greeting');

    if (currentLanguage === 'en') {
        greetingElement.textContent = 'Привет, мир!';
    } else {
        greetingElement.textContent = 'Hello, World!';
    }

    // Toggle current language
    currentLanguage = (currentLanguage === 'en') ? 'ru' : 'en';
}
