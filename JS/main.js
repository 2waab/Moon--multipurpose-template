let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");
let link = document.querySelector("nav a");

toggler.onclick = () => {
    nav.classList.add("open");
};

link.onclick = () => {
    nav.classList.remove("open");
};

close.onclick = () => {
    nav.classList.remove("open");
};

document.onkeyup = (e) => {
    // console.log(e);
    if (e.key === "Escape") {
        nav.classList.remove("open");
    }
};