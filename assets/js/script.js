// Variables
const showBtn = document.getElementById("showBtn");
const navbar = document.getElementById("navbar");
const showRow = document.querySelector("#hiddenRow");

// Functions
showBtn.addEventListener("click", () => {
    if (showRow.style.display == "none" || showRow.style.display == "") {
        showRow.style.display = "flex";
        showBtn.innerText = "Hide";
    } else {
        showRow.style.display = "none";
        showBtn.innerText = "View All";
    }
});

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    
    if (scroll > 20) {
        navbar.classList.add("bg-secondary");
    } else {
        navbar.classList.remove("bg-secondary");
    }
})
