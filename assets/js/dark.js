const themeCheckbox = document.getElementById('theme-checkbox');
const hero = document.getElementById('hero');
const footer = document.getElementById('footer');

// Load the saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    hero.classList.add('dark-background');
    footer.classList.add('dark-background');

    themeCheckbox.checked = true;
}

// Add event listener to the checkbox
themeCheckbox.addEventListener('change', function() {
    if (themeCheckbox.checked) {
        document.body.classList.add('dark-theme');
        hero.classList.add('dark-background');
        footer.classList.add('dark-background');

        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        hero.classList.remove('dark-background');
        footer.classList.remove('dark-background');

        localStorage.setItem('theme', 'light');
    }
});
