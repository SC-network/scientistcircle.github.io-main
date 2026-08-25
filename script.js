document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const themeButton = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = '🌕';
        localStorage.setItem('theme', 'dark');
    } else {
        themeButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});

// Apply saved theme on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = '🌕';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-toggle').textContent = '🌙';
    }
});

// Apply saved theme on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = '🌕';
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-toggle').textContent = '🌙';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const splashScreen = document.querySelector(".splash-screen");
    const progressFill = document.querySelector(".progress-fill");

    let loaded = 0;
    const total = 100; // Total progress set to 100%

    // Update progress function
    function updateProgress() {
        if (loaded < total) {
            loaded += Math.random() * 5; // Increment loading progress randomly
            if (loaded > total) loaded = total; // Prevent over 100%
            progressFill.style.width = `${loaded}%`;
        }
    }

    // Simulate loading based on internet speed
    const interval = setInterval(updateProgress, 2000); // Update progress every 100ms

    // Event listener to hide splash screen when the page is fully loaded
    window.addEventListener('load', () => {
        clearInterval(interval);
        progressFill.style.width = '100%'; // Ensure progress bar reaches 100%
        setTimeout(() => {
            splashScreen.classList.add("hidden");
        }, 5000); // Add a small delay before hiding splash screen
    });
});
