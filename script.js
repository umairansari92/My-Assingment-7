// Toggle dark mode
const btnToggle = document.querySelector('.btn-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}

btnToggle.addEventListener('click', () => {
    const theme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', theme);
});
