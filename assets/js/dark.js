// const toggleThemeButton = document.querySelector(".toggle-theme");
// const body = document.body;

// toggleThemeButton.addEventListener("click", () => {
//     body.classList.toggle("dark-mode");

//     // تغيير الأيقونة بين الشمس والقمر
//     if (body.classList.contains("dark-mode")) {
//         localStorage.setItem("theme", "dark");
//     } else {
//         localStorage.setItem("theme", "light");
//     }
// });

// // تحميل الوضع المحفوظ عند فتح الصفحة
// window.addEventListener("load", () => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "dark") {
//         body.classList.add("dark-mode");
//     } else {
//         console.log('');
//     }
// });

// script.js
document.getElementById('theme-checkbox').addEventListener('change', function() {
    document.body.classList.toggle('dark-theme');
});
const body = document.body;

if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
}

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark-theme");
    }
});