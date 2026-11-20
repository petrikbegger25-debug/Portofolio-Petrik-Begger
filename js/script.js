document.getElementById("year").textContent = new Date().getFullYear();

const navbar = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
});

const roles = ["Cyber Security", "Web Development", "Mahasiswa Sistem Informasi"];
const typed = document.getElementById("typed");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const current = roles[roleIndex];
    charIndex += deleting ? -1 : 1;
    typed.textContent = current.substring(0, charIndex);

    let delay = deleting ? 40 : 90;
    if (!deleting && charIndex === current.length) {
        deleting = true;
        delay = 1600;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 400;
    }
    setTimeout(typeEffect, delay);
}
typeEffect();

const projectModal = document.getElementById("projectModal");
projectModal.addEventListener("show.bs.modal", (event) => {
    const card = event.relatedTarget.closest(".project-card");
    const img = card.querySelector("img");
    document.getElementById("projectModalTitle").textContent = card.querySelector(".card-title").textContent;
    document.getElementById("projectModalText").textContent = card.querySelector(".card-text").textContent;
    document.getElementById("projectModalImg").src = img.src;
    document.getElementById("projectModalImg").alt = img.alt;
});