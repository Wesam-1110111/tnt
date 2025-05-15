const themeCheckbox = document.getElementById('theme-checkbox');
const footer = document.getElementById('my-id');


// Load the saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    footer.classList.add('dark-background');
    themeCheckbox.checked = true;
}

// Add event listener to the checkbox
themeCheckbox.addEventListener('change', function() {
    if (themeCheckbox.checked) {
        document.body.classList.add('dark-theme');
        footer.classList.add('dark-background');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        footer.classList.remove('dark-background');
        localStorage.setItem('theme', 'light');
    }
});
