const menuBtn = document.getElementById("menuBtn");
const menuContent = document.getElementById("menuContent");
const menuOverlay = document.getElementById("menuOverlay");

menuBtn.addEventListener("click", () => {
    menuContent.classList.toggle("open");
    menuOverlay.classList.toggle("show");
});

menuOverlay.addEventListener("click", () => {
    menuContent.classList.remove("open");
    menuOverlay.classList.remove("show");
});

document.querySelectorAll(".menu-content a").forEach(link => {
    link.addEventListener("click", () => {
        menuContent.classList.remove("open");
        menuOverlay.classList.remove("show");
    });
});