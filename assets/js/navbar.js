// VARIABLES
const navbar = document.getElementById("navbar");
const navbarLinks = document.querySelectorAll(".navbar .nav .navbar-link");
const navbarBtnToggler = document.getElementById("navbarButtonToggler");
const navbarNav = document.getElementById("navbarNav");
const showBtnHottestProduct = document.getElementById("showBtn");
const hottestProductsContainerr = document.querySelector("#hottestProducts");
const searchButtonMobile = document.getElementById("searchButtonMobile");
const searchBoxInputMobile = document.getElementById("searchBoxInputMobile");
const searchButtonLarge = document.getElementById("searchButtonLarge");
const searchBoxInputLarge = document.getElementById("searchBoxInputLarge");


// FUNCTIONS
// Navbar Scroll
window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    scroll > 80 ? navbar.classList.add("bg-secondary") : navbar.classList.remove("bg-secondary");

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

// Search and Cart Button
searchButtonMobile.addEventListener("click", () => {
    if (searchBoxInputMobile.classList.contains("d-none")) {
        searchBoxInputMobile.classList.remove("d-none");
        searchBoxInputMobile.classList.add("d-block");
        searchButtonMobile.classList.add("border")
    } else {
        searchBoxInputMobile.classList.remove("d-block");
        searchBoxInputMobile.classList.add("d-none");
        searchButtonMobile.classList.remove("border");
        searchBoxInputMobile.value = "";
    }
})

searchButtonLarge.addEventListener("click", () => {
    if (searchBoxInputLarge.classList.contains("d-none")) {
        searchBoxInputLarge.classList.remove("d-none");
        searchBoxInputLarge.classList.add("d-block");
        searchButtonLarge.classList.add("border");
    } else {
        searchBoxInputLarge.classList.remove("d-block");
        searchBoxInputLarge.classList.add("d-none");
        searchButtonLarge.classList.remove("border");
        searchBoxInputLarge.value = "";
    }
})