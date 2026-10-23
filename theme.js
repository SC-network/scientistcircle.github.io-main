/* theme.js - logika tema gelap/terang. */
(function () {
    const STORAGE_KEY = 'theme';
    const root = document.documentElement; // class "dark-mode" dipasang di <html>

    function getSavedTheme() {
        try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
    }
    function saveTheme(theme) {
        try { localStorage.setItem(STORAGE_KEY, theme); } catch (e) {}
    }
    function getInitialTheme() {
        const saved = getSavedTheme();
        if (saved === 'dark' || saved === 'light') return saved;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark' : 'light';
    }
    function applyTheme(theme) {
        const isDark = theme === 'dark';
        root.classList.toggle('dark-mode', isDark);
        document.querySelectorAll('.theme-toggle').forEach(function (button) {
            button.textContent = isDark ? '☀️' : '🌙';
            button.setAttribute('type', 'button');
            button.setAttribute('aria-pressed', String(isDark));
            button.setAttribute('aria-label', isDark ? 'Ubah ke tema terang' : 'Ubah ke tema gelap');
        });
    }

    applyTheme(getInitialTheme()); // langsung (di <head>), tombol belum ada

    document.addEventListener('DOMContentLoaded', function () {
        applyTheme(getInitialTheme()); // sekarang tombol sudah ada
        document.querySelectorAll('.theme-toggle').forEach(function (button) {
            button.addEventListener('click', function () {
                const next = root.classList.contains('dark-mode') ? 'light' : 'dark';
                applyTheme(next);
                saveTheme(next);
            });
        });
    });

    // Sinkron antar tab yang sedang terbuka
    window.addEventListener('storage', function (e) {
        if (e.key === STORAGE_KEY && (e.newValue === 'dark' || e.newValue === 'light')) {
            applyTheme(e.newValue);
        }
    });
})();
