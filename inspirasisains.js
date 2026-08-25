// Script untuk toggle tema gelap dan terang
const themeToggle = document.getElementById('theme-toggle');
let darkTheme = false;

themeToggle.addEventListener('click', () => {
    if (!darkTheme) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'white';
        themeToggle.textContent = '☀️';
        darkTheme = true;
    } else {
        document.body.style.backgroundColor = '#f5f5f5';
        document.body.style.color = '#333';
        themeToggle.textContent = '🌙';
        darkTheme = false;
    }
});
