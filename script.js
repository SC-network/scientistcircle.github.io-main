/* Splash Screen (khusus index.html).
   Logika tema ada di theme.js */
document.addEventListener('DOMContentLoaded', function () {
    const splashScreen = document.querySelector('.splash-screen');
    const progressFill = document.querySelector('.progress-fill');
    if (!splashScreen || !progressFill) return;

    let loaded = 0;
    const total = 100;

    function updateProgress() {
        if (loaded < total) {
            loaded += Math.random() * 5;
            if (loaded > total) loaded = total;
            progressFill.style.width = `${loaded}%`;
        }
    }

    const interval = setInterval(updateProgress, 2000);

    window.addEventListener('load', () => {
        clearInterval(interval);
        progressFill.style.width = '100%';
        setTimeout(() => {
            splashScreen.classList.add('hidden');
        }, 5000);
    });
});
