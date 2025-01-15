const toggleThemeButton = document.querySelector(".toggle-theme");
const body = document.body;

toggleThemeButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // حفظ الوضع في localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// تحميل الوضع المحفوظ عند فتح الصفحة
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }
});
