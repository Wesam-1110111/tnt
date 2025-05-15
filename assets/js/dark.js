const themeCheckbox = document.getElementById('theme-checkbox');
const hero = document.getElementById('hero');
const footer = document.getElementById('footer');

// Load the saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    hero.classList.add('dark-theme');
    footer.classList.add('dark-theme');

    themeCheckbox.checked = true;
}

// Add event listener to the checkbox
themeCheckbox.addEventListener('change', function() {
    if (themeCheckbox.checked) {
        document.body.classList.add('dark-theme');
        hero.classList.add('dark-theme');
        footer.classList.add('dark-theme');

        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        hero.classList.remove('dark-theme');
        footer.classList.remove('dark-theme');

        localStorage.setItem('theme', 'light');
    }
});
