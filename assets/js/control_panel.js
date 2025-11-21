// data.js

const siteEmail = "example@gmail.com";
const sitePhone = "+218-91-0000000";
const siteAddress = "طرابلس - ليبيا";
const siteWebsite = "www.x.com";
const siteBirthday = "5 June 2000";
const siteAge = '50';
const siteFreelance = 'Not Available';

// ننتظر تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-email]").forEach(el => el.textContent = siteEmail);
    document.querySelectorAll("[data-phone]").forEach(el => el.textContent = sitePhone);
    document.querySelectorAll("[data-address]").forEach(el => el.textContent = siteAddress);
    document.querySelectorAll("[data-birthday]").forEach(el => el.textContent = siteBirthday);
    document.querySelectorAll("[data-age]").forEach(el => el.textContent = siteAge);
    document.querySelectorAll("[data-freelance]").forEach(el => el.textContent = siteFreelance);
    document.querySelectorAll("[data-website]").forEach(el => el.textContent = siteWebsite);
});
            
