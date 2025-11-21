// data.js

function calculateAge(birth) {
    const birthObj = new Date(birth);
    const today = new Date();

    let age = today.getFullYear() - birthObj.getFullYear();

    // تصحيح العمر إذا لم يصل يوم ميلادك في هذه السنة بعد
    const monthDiff = today.getMonth() - birthObj.getMonth();
    const dayDiff = today.getDate() - birthObj.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}


const birthDate = "2000-06-05";
const siteEmail = "w.alboishe@gmail.com";
const sitePhone = "+218 91 0054012";
const siteAddress = "Tripoli, Libya";
const siteAddress_ar = "طرابلس - ليبيا";
const siteWebsite = "www.wesam.online";
const siteBirthday = "5 June 2000";
const siteBirthday_ar = "5 يونيو 2000";
const siteAge = calculateAge(birthDate);
const siteFreelance = 'Available';
const siteFreelance_ar = 'متوفر';

// ننتظر تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-email]").forEach(el => el.textContent = siteEmail);
    document.querySelectorAll("[data-phone]").forEach(el => el.textContent = sitePhone);
    document.querySelectorAll("[data-address]").forEach(el => el.textContent = siteAddress);
    document.querySelectorAll("[data-address-ar]").forEach(el => el.textContent = siteAddress_ar);
    document.querySelectorAll("[data-birthday]").forEach(el => el.textContent = siteBirthday);
    document.querySelectorAll("[data-birthday-ar]").forEach(el => el.textContent = siteBirthday_ar);
    document.querySelectorAll("[data-age]").forEach(el => el.textContent = siteAge);
    document.querySelectorAll("[data-freelance-ar]").forEach(el => el.textContent = siteFreelance_ar);
    document.querySelectorAll("[data-freelance]").forEach(el => el.textContent = siteFreelance);
    document.querySelectorAll("[data-website]").forEach(el => el.textContent = siteWebsite);
});

