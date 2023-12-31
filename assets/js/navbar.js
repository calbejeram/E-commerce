// VARIABLES
const navbar = document.getElementById("navbar");
const navbarLinks = document.querySelectorAll(".navbar .nav .navbar-link");
const navbarBtnToggler = document.getElementById("navbarButtonToggler");
const navbarNav = document.getElementById("navbarNav");
const showBtnHottestProduct = document.getElementById("showBtn");
const hottestProductsContainerr = document.querySelector("#hottestProducts");
const buttonsRight = document.querySelectorAll("#searchButtonMobile, #searchButtonLarge, #wishListButtonMobile, #wishListButtonLarge, #cartButtonMobile, #cartButtonLarge, #userButtonMobile, #userButtonLarge");
const searchButtonMobile = document.getElementById("searchButtonMobile");
const searchBoxInputMobile = document.getElementById("searchBoxInputMobile");
const searchButtonLarge = document.getElementById("searchButtonLarge");
const searchBoxInputLarge = document.getElementById("searchBoxInputLarge");
const cartButtonLarge = document.getElementById("cartButtonLarge");
const wishListCountMobile = document.getElementById("wishListCountMobile");
const wishListCountLarge = document.getElementById("wishListCountLarge");
const cartCountMobile = document.getElementById("cartCountMobile");
const cartCountLarge = document.getElementById("cartCountLarge");

const wishLists = localStorage.getItem("Product Wish Lists") ? JSON.parse(localStorage.getItem("Product Wish Lists")) : []
wishListCountMobile.innerHTML = wishLists.length;
wishListCountLarge.innerHTML = wishLists.length;

// Cart List Count
const cart = localStorage.getItem("Product Cart Lists") ? JSON.parse(localStorage.getItem("Product Cart Lists")) : []
cartCountMobile.innerHTML = cart.length;
cartCountLarge.innerHTML = cart.length;


// FUNCTIONS

// Navbar Scroll
function navbarScroll() {
    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
    
        scroll > 80 ? navbar.classList.add("bg-secondary") : navbar.classList.remove("bg-secondary");
    
        if (scroll <= 1100) {
            showBtnHottestProduct.innerHTML = `<p class="m-0">See More <i class="bi bi-caret-down-fill"></i></p>`;
            hottestProductsContainerr.style.height = "75vh";
            hottestProductsContainerr.style.overflow = "hidden";
            hottestProductsContainerr.style.position = "relative";
        }
    });
};

navbarScroll();


// Navbar Links
function navbarLinksFunc() {
    navbarLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbarBtnToggler.classList.contains("collapsed") ? navbarBtnToggler.classList.remove("collapsed") : navbarBtnToggler.classList.add("collapsed");
            navbarNav.classList.contains("show") ? navbarNav.classList.remove("show") : navbarNav.classList.add("show");
        });
    });
    
    
    const setActive = (id) => {
        buttonsRight.forEach(button => {
            button === id ? button.className = "nav-button btn btn-primary rounded-circle position-relative" : button.className = "nav-button btn bg-white bg-opacity-25 rounded-circle position-relative"
        });
    };
    
    buttonsRight.forEach(button => {
        button.addEventListener("click", () => {
            setActive(button);
        })
    });
};

navbarLinksFunc();

// // Search Button
function navbarButtons() {
    searchButtonLarge.addEventListener("click", () => {
        if (searchBoxInputLarge.classList.contains("d-none")) {
            searchBoxInputLarge.classList.remove("d-none");
            searchBoxInputLarge.classList.add("d-block");
        } else {
            searchBoxInputLarge.classList.remove("d-block");
            searchBoxInputLarge.classList.add("d-none");
            searchButtonLarge.className = "nav-button btn bg-white bg-opacity-25 rounded-circle"
            searchBoxInputLarge.value = "";
        }
    });
    
    searchButtonMobile.addEventListener("click", () => {
        if (searchBoxInputMobile.classList.contains("d-none")) {
            searchBoxInputMobile.classList.remove("d-none");
            searchBoxInputMobile.classList.add("d-block");
        } else {
            searchBoxInputMobile.classList.remove("d-block");
            searchBoxInputMobile.classList.add("d-none");
            searchButtonMobile.className = "nav-button btn bg-white bg-opacity-25 rounded-circle"
            searchBoxInputMobile.value = "";
        }
    });
};

navbarButtons();