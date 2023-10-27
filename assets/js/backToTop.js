// VARIABLES
const backToTopBtn = document.getElementById("backToTopBtn");

// FUNCTIONS
window.addEventListener("scroll", () => {
    let scroll = window.scrollY;


    if (scroll > 80) {
        backToTopBtn.classList.remove("d-none");
        backToTopBtn.classList.add("d-block");
    } else {
        backToTopBtn.classList.remove("d-block");
        backToTopBtn.classList.add("d-none")
    };
});