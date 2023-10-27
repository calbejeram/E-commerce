import { productLaptopData, productFilterData } from "./instances/laptopdata.js";
import { renderProductItems } from "./functions/renderProductItem.js";
import { renderProductFilter } from "./functions/renderProductFilter.js";
import { addProductToWishList } from "./functions/addingProductToWishLists.js";
import { addProductToCart } from "./functions/addingProductToCart.js";
import { addedToWishList } from "./functions/checkingIfAddedToWishLists.js";
import { addedToCart } from "./functions/checkingIfAddedToCart.js";
import { renderProductDetailsModal } from "./functions/renderProductModalDetails.js";
import { productSorting } from "./functions/productSorting.js";

// VARIABLE
const laptopProductContainer = document.getElementById("laptopProductContainer"); //Done
const filterContainerLarge = document.getElementById("filterContainerLarge"); //Done
const filterContainerMobile = document.getElementById("filterContainerMobile"); //Done
const wishListButtons = document.getElementsByClassName("wishListButton"); //Done
const addToCartButtons = document.getElementsByClassName("addToCartButton"); //Done
const viewDetails = document.getElementsByClassName("viewDetails"); //Done
const wishListCountMobile = document.getElementById("wishListCountMobile");
const wishListCountLarge = document.getElementById("wishListCountLarge");
const cartCountMobile = document.getElementById("cartCountMobile");
const cartCountLarge = document.getElementById("cartCountLarge");



// Wish List Count
const wishLists = localStorage.getItem("Product Wish Lists") ? JSON.parse(localStorage.getItem("Product Wish Lists")) : []
wishListCountMobile.innerHTML = wishLists.length;
wishListCountLarge.innerHTML = wishLists.length;

// Cart List Count
const cart = localStorage.getItem("Product Cart Lists") ? JSON.parse(localStorage.getItem("Product Cart Lists")) : []
cartCountMobile.innerHTML = cart.length;
cartCountLarge.innerHTML = cart.length;




// FUNCTION

// Setting Active class and Sorting Products
productSorting(productLaptopData);

// Product Card and Product Pop Up Modal
renderProductItems(productLaptopData, laptopProductContainer);

// Displaying the Filter Product Title and its Options to its specified parent element
renderProductFilter(productFilterData, filterContainerMobile, filterContainerLarge);

// Adding Product to Product Wish List Local Storage
addProductToWishList(wishListButtons, productLaptopData);

// Adding Product to Product Cart List Local Storage
addProductToCart(addToCartButtons, productLaptopData);

// Checking if the Product is already added/selected/removed to the wish list.
addedToWishList(wishListButtons, productLaptopData);

// Checking if the Product is already added/selected/removed to the cart list.
addedToCart(addToCartButtons, productLaptopData);

// Iputting the Selected/Clicked specific item from the Laptop Products
renderProductDetailsModal(viewDetails, productLaptopData);