// VARIABLES
const navbar = document.getElementById("navbar");
const navbarLinks = document.querySelectorAll(".navbar .nav .navbar-link");
const navbarBtnToggler = document.getElementById("navbarButtonToggler");
const navbarNav = document.getElementById("navbarNav");
const showBtnHottestProduct = document.getElementById("showBtn");
const hottestProductsContainerr = document.querySelector("#hottestProducts");

// FUNCTIONS
// Navbar Scroll
window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    console.log(scroll)
    
    if (scroll > 80) {
        navbar.classList.add("bg-secondary");
    } else {
        navbar.classList.remove("bg-secondary");
    }

    if (scroll <= 1100) {
        showBtnHottestProduct.innerText = "View All";
        hottestProductsContainerr.style.height = "75vh";
        hottestProductsContainerr.style.overflow = "hidden";
        hottestProductsContainerr.style.position = "relative";
    }
});

// Navbar Links
navbarLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navbarBtnToggler.classList.contains("collapsed")) {
            navbarBtnToggler.classList.remove("collapsed");
        } else {
            navbarBtnToggler.classList.add("collapsed");
        }

        if (navbarNav.classList.contains("show")) {
            navbarNav.classList.remove("show");
        } else {
            navbarNav.classList.add("show");
        }
    });
});