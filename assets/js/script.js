
// VARIABLES
const showBtn = document.getElementById("showBtn");
const navbar = document.getElementById("navbar");
const showRow = document.querySelector("#hiddenRow");
const products = document.querySelectorAll("#laptopProducts, #monitorProducts, #desktopProducts, #accessoriesProducts, #miceProducts, #keyboardProducts, #productSeriesSelect");
const navbarLinks = document.querySelectorAll(".navbar .nav .navbar-link");
const navbarBtnToggler = document.getElementById("navbarButtonToggler");
const navbarNav = document.getElementById("navbarNav");

// FUNCTIONS

// View hottest laptops
showBtn.addEventListener("click", () => {
    if (showRow.style.display == "none" || showRow.style.display == "") {
        showRow.style.display = "flex";
        showBtn.innerText = "Hide";
    } else {
        showRow.style.display = "none";
        showBtn.innerText = "View All";
    }
});

// Navbar Scroll
window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    
    if (scroll > 80) {
        navbar.classList.add("bg-secondary");
    } else {
        navbar.classList.remove("bg-secondary");
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

// Products
// products.forEach((product) => {
//     product.addEventListener("click", () => {
//         defaultProductSeries.classList.add("d-none")
//         productSeriesTitle.innerText = product.innerHTML;
//         productSeriesSelected.innerHTML = product.innerHTML;
//     });
// });

// function setActive(id) {
//     products.forEach(product => {
//         if (product === id) {
//             product.classList.add("active");
//         } else {
//             product.classList.remove("active");
//         }
//     });
// };

// products.forEach(product => {
//     product.addEventListener("click", () => {
//         setActive(product)
//     });
// });

// productSeriesSelect.addEventListener("click", () => {
//     defaultProductSeries.classList.remove("d-none")
// });