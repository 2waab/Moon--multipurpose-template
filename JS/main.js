// Animaion Of Scroll
let section = document.querySelector(".section-one");
let box1 = document.querySelector(".section-one .one");
let box2 = document.querySelector(".section-one .two");
let box3 = document.querySelector(".section-one .three");
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop + 100) {
        box1.classList.add("op");
    };
    if (window.scrollY >= section.offsetTop + 150) {
        box2.classList.add("op");
    };
    if (window.scrollY >= section.offsetTop + 200) {
        box3.classList.add("op");
    };
};

// Full Screen Navigathion
let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");
let link = document.querySelectorAll("nav a");
toggler.onclick = function () {
    nav.classList.add("open");
};
close.onclick = function () {
    nav.classList.remove("open");
};
document.onkeyup = function (e) {
    if (e.key === "Escape") {
        nav.classList.remove("open");
    };
};
for (let i = 0; i <= link.length; i++) {
    link[i].addEventListener("click", function () {
        nav.classList.remove("open");
    });
};
