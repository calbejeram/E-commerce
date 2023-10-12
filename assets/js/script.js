// Variables
const showBtn = document.getElementById("showBtn");
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
