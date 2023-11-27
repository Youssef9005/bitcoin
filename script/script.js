// Start Header
let header = document.querySelector("header");
let navMenu = document.querySelector(".toggle-menu");
let nav = document.querySelector("header .container nav");
let xMark = document.querySelector("header .container nav div");
let navUl = document.querySelectorAll("header .container nav ul li a");


window.onscroll = function () {
    if (window.scrollY != 0) {
        header.style.backgroundColor = "hsl(0, 0%, 13%)";
    } else {
        header.style.backgroundColor = "hsl(40, 100%, 2%)";
    }
};


navMenu.onclick = function () {
    let spans = document.querySelectorAll(".toggle-menu span");
    spans[1].classList.add("active");
    nav.classList.add("active");
    xMark.classList.add("show");
    document.body.style.overflow = "hidden"
    function reset() {
        nav.classList.remove("active");
        xMark.classList.remove("show");
        spans[1].classList.remove("active");
        document.body.style.overflow = "scroll"
    };

    xMark.addEventListener("click" , reset);
    navUl.forEach((link) => {
        link.addEventListener("click" , reset)
    });
};
// End Header

// Market Start
let spanPrice = document.querySelectorAll(".price");

spanPrice.forEach((filter) => {
    if(filter.textContent.indexOf("-") != -1) {
        filter.setAttribute("style" , "--arrow-color: hsl(354, 86%, 65%)");
    } else {
        filter.setAttribute("style" , "--arrow-color: hsl(161, 50%, 57%)");
    }
});
// Markter End