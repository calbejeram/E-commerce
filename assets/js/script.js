// VARIABLES
const showBtn = document.getElementById("showBtn");
const navbar = document.getElementById("navbar");
const showRow = document.querySelector("#hiddenRow");
const products = document.querySelectorAll("#laptopProducts, #monitorProducts, #desktopProducts, #accessoriesProducts, #miceProducts, #keyboardProducts");
const defaultProductSeries = document.getElementById("defaultProductSeries");
const productSeriesTitle = document.getElementById("productSeriesTitle");
const productSeriesSelect = document.getElementById("productSeriesSelect");
const productSeriesSelected = document.getElementById("productSeriesSelected");

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

// Products
products.forEach((product) => {
    product.addEventListener("click", () => {
        defaultProductSeries.classList.add("d-none")
        // defaultProductSeries.innerHTML = `<h1>${product.innerHTML}</h1>`;
        productSeriesTitle.innerText = product.innerHTML;
        productSeriesSelected.innerHTML = product.innerHTML;
        
        // if (product.classList.contains("active")) {
        //     product.classList.remove("active")
        // } else {
        //     product.classList.add("active")
        // }
    })
});

productSeriesSelect.addEventListener("click", () => {
    defaultProductSeries.classList.remove("d-none")
    productSeriesTitle.innerText = "Product Series";
});
