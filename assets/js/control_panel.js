// data.js

const siteEmail = "example@gmail.com";
const sitePhone = "+218-91-0000000";
const siteAddress = "طرابلس - ليبيا";

// ننتظر تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-email]").forEach(el => el.textContent = siteEmail);
        document.querySelectorAll("[data-phone]").forEach(el => el.textContent = sitePhone);
            document.querySelectorAll("[data-address]").forEach(el => el.textContent = siteAddress);
            });
            
