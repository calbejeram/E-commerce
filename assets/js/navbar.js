// VARIABLES
const navbar = document.getElementById("navbar");
const navbarLinks = document.querySelectorAll(".navbar .nav .navbar-link");
const navbarBtnToggler = document.getElementById("navbarButtonToggler");
const navbarNav = document.getElementById("navbarNav");
const showBtnHottestProduct = document.getElementById("showBtn");
const hottestProductsContainerr = document.querySelector("#hottestProducts");
const buttonsRight = document.querySelectorAll("#searchButtonMobile, #searchButtonLarge, #cartButtonMobile, #cartButtonLarge, #userButtonMobile, #userButtonLarge");
const searchButtonMobile = document.getElementById("searchButtonMobile");
const searchBoxInputMobile = document.getElementById("searchBoxInputMobile");
const searchButtonLarge = document.getElementById("searchButtonLarge");
const searchBoxInputLarge = document.getElementById("searchBoxInputLarge");
const cartButtonLarge = document.getElementById("cartButtonLarge");


// FUNCTIONS
// Navbar Scroll
window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    scroll > 80 ? navbar.classList.add("bg-secondary") : navbar.classList.remove("bg-secondary");

    if (scroll <= 1100) {
        showBtnHottestProduct.innerText = "See More";
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


const setActive = (id) => {
    buttonsRight.forEach(button => {
        if (button === id) {
            button.className = "nav-button btn btn-primary rounded-circle";
        } else {
            button.className = "nav-button btn bg-white bg-opacity-25 rounded-circle";
        }
    })
}

buttonsRight.forEach(button => {
    button.addEventListener("click", () => {
        setActive(button);
    })
})

// // Search and Cart Button
// searchButtonMobile.addEventListener("click", () => {
//     if (searchBoxInputMobile.classList.contains("d-none")) {
//         searchBoxInputMobile.classList.remove("d-none");
//         searchBoxInputMobile.classList.add("d-block");
//         searchButtonMobile.classList.add("border")
//     } else {
//         searchBoxInputMobile.classList.remove("d-block");
//         searchBoxInputMobile.classList.add("d-none");
//         searchButtonMobile.classList.remove("border");
//         searchBoxInputMobile.value = "";
//     }
// })

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

// cartButtonLarge.addEventListener("click", () => {
//     const modalContainer = document.createElement("div");
//     modalContainer.className = "modal fade";
//     modalContainer.id = "cartModal";
    
//     modalContainer.innerHTML = `
//     <div class="modal-dialog">
//     <div class="modal-content">
//     <div class="modal-header">
//     <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//       ...
//       </div>
//       <div class="modal-footer">
//       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//       <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//       </div>
//       </div>
//       `
//       cartButtonLarge.setAttribute("data-bs-toggle", "modal")
//       cartButtonLarge.setAttribute("data-bs-target", "#cartModal")
      
//     document.querySelector(".cart-modal").appendChild(modalContainer);
    
// })