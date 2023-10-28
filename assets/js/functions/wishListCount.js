// VARIABLES
const wishListCountMobile = document.getElementById("wishListCountMobile");
const wishListCountLarge = document.getElementById("wishListCountLarge");
const wishLists = localStorage.getItem("Product Wish Lists") ? JSON.parse(localStorage.getItem("Product Wish Lists")) : []

// FUNCTIONS
// Appending wish list count to span text
export function wishListCount() {
    wishListCountMobile.innerHTML = wishLists.length;
    wishListCountLarge.innerHTML = wishLists.length;
};