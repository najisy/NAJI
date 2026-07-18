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
  const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-regular fa-moon"></i>';
    }
});
const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function () {
    searchBox.classList.toggle("show");

    if (searchBox.classList.contains("show")) {
        searchInput.focus();
    }
});

const profileBtn = document.getElementById("profileBtn");
const aboutSection = document.getElementById("about");

profileBtn.addEventListener("click", function () {
    aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        buttons.forEach(b=>b.classList.remove("active"));
        btn.classList.add("active");
    });
});
// تحميل الوضع المحفوظ
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// تبديل الوضع
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
document.addEventListener("click", function (e) {
    if (
        !searchBox.contains(e.target) &&
        !searchBtn.contains(e.target)
    ) {
        searchBox.classList.remove("show");
    }
});
// إغلاق صندوق البحث عند الضغط خارجه
document.addEventListener("click", function (event) {
    const clickedInsideSearch = searchBox.contains(event.target);
    const clickedSearchButton = searchBtn.contains(event.target);

    if (!clickedInsideSearch && !clickedSearchButton) {
        searchBox.classList.remove("show");
    }
});


// البحث الحقيقي داخل محتوى الصفحة
searchInput.addEventListener("keydown", function (event) {
    if (event.key !== "Enter") return;

    const searchText = searchInput.value.trim().toLowerCase();

    if (searchText === "") return;

    const elements = document.querySelectorAll(
        ".content h1, .content h2, .content h3, .content p, .content a"
    );

    let foundElement = null;

    elements.forEach(function (element) {
        element.classList.remove("search-result");

        const elementText = element.textContent.trim().toLowerCase();

        if (!foundElement && elementText.includes(searchText)) {
            foundElement = element;
        }
    });

    if (foundElement) {
        foundElement.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        foundElement.classList.add("search-result");

        searchBox.classList.remove("show");

        setTimeout(function () {
            foundElement.classList.remove("search-result");
        }, 3000);
    } else {
        alert("لم يتم العثور على نتيجة");
    }
});