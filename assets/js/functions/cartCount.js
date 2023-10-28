// VARIABLES
const cartCountMobile = document.getElementById("cartCountMobile");
const cartCountLarge = document.getElementById("cartCountLarge");
const cartLists = localStorage.getItem("Product Cart Lists") ? JSON.parse(localStorage.getItem("Product Cart Lists")) : []

// FUNCTIONS
// Appending cart list count to span text
export function cartCount() {
    cartCountMobile.innerHTML = cartLists.length;
    cartCountLarge.innerHTML = cartLists.length;
};