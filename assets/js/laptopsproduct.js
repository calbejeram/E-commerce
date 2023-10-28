import { productLaptopData, productFilterData } from "./instances/laptopdata.js";
import { renderProductItems } from "./functions/renderProductItem.js";
import { renderProductFilter } from "./functions/renderProductFilter.js";
import { addProductToWishList } from "./functions/addingProductToWishLists.js";
import { addProductToCart } from "./functions/addingProductToCart.js";
import { addedToWishList } from "./functions/checkingIfAddedToWishLists.js";
import { addedToCart } from "./functions/checkingIfAddedToCart.js";
import { renderProductDetailsModal } from "./functions/renderProductModalDetails.js";
import { productSorting } from "./functions/productSorting.js";
import { wishListCount } from "./functions/wishListCount.js";
import { cartCount } from "./functions/cartCount.js";

// VARIABLE
const laptopProductContainer = document.getElementById("laptopProductContainer");
const filterContainerLarge = document.getElementById("filterContainerLarge");
const filterContainerMobile = document.getElementById("filterContainerMobile");
const wishListButtons = document.getElementsByClassName("wishListButton");
const addToCartButtons = document.getElementsByClassName("addToCartButton");
const viewDetails = document.getElementsByClassName("viewDetails");

// FUNCTION

// Wish List Count
wishListCount();

// Cart List Count
cartCount();

// Setting Active class and Sorting Products
productSorting(productLaptopData, productLaptopData, laptopProductContainer);

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