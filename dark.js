const toggleThemeButton = document.querySelector(".toggle-theme");
const icon = document.querySelector(".icon");
const body = document.body;

toggleThemeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // تغيير الأيقونة بين الشمس والقمر
    if (body.classList.contains("dark-mode")) {
        icon.textContent = "🌙"; // قمر
        localStorage.setItem("theme", "dark");
    } else {
        icon.textContent = "🌞"; // شمس
        localStorage.setItem("theme", "light");
    }
});

// تحميل الوضع المحفوظ عند فتح الصفحة
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        icon.textContent = "🌙"; // قمر
    } else {
        icon.textContent = "🌞"; // شمس
    }
});
