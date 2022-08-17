let toggler = document.querySelector(".toggle");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");
let link = document.querySelectorAll("nav a");

toggler.onclick = () => {
    nav.classList.add("open");
};

close.onclick = () => {
    nav.classList.remove("open");
};

for (let i = 0; i <= link.length; i++) {
    link[i].onclick = () => {
        nav.classList.remove("open");
    };
};

document.onkeyup = (e) => {
    // console.log(e);
    if (e.key === "Escape") {
        nav.classList.remove("open");
    }
};
