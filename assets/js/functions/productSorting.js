// import { productLaptopData } from "../instances/laptopdata.js";
import { renderProductItems } from "./renderProductItem.js";
import { addProductToWishList } from "./addingProductToWishLists.js";
import { addProductToCart } from "./addingProductToCart.js";
import { addedToWishList } from "./checkingIfAddedToWishLists.js";
import { addedToCart } from "./checkingIfAddedToCart.js";
import { renderProductDetailsModal } from "./renderProductModalDetails.js";
import { quantity } from "./quantity.js";

// VARIABLES
const sort = document.querySelectorAll("#bestSeller, #priceLowToHigh, #priceHighToLow");
const laptopProductContainer = document.getElementById("laptopProductContainer"); //Done
const wishListButtons = document.getElementsByClassName("wishListButton"); //Done
const addToCartButtons = document.getElementsByClassName("addToCartButton"); //Done
const viewDetails = document.getElementsByClassName("viewDetails"); //Done

// FUNCTIONS
// Sorting product items by Best Seller/Price Low to High/Price High to Low
export function productSorting(productData, productData2, productContainer) {
    const setActive = (id) => {
        sort.forEach(item => {
            item === id ? item.classList.add("active") : item.classList.remove("active");
        });
    };
    
    sort.forEach(item => {
        item.addEventListener("click", () => {
            setActive(item);
            if (item.innerHTML === "Best Seller") {
                productContainer.innerHTML = "";
                const bestSellerProducts = productData.slice().sort((a, b) => b.productSold - a.productSold);
                renderProductItems(bestSellerProducts, productContainer);
                addProductToWishList(wishListButtons, productData2);
                addProductToCart(addToCartButtons, productData2);
                addedToWishList(wishListButtons, productData2);
                addedToCart(addToCartButtons, productData2);
                renderProductDetailsModal(viewDetails, productData2);
                quantity();
            } else if (item.innerHTML === "Price Low to High") {
                productContainer.innerHTML = "";
                productData.sort((a, b) => parseFloat(a.productPrice.replace(/,/g, '')) - parseFloat(b.productPrice.replace(/,/g, '')));
                renderProductItems(productData2, productContainer);
                addProductToWishList(wishListButtons, productData2);
                addProductToCart(addToCartButtons, productData2);
                addedToWishList(wishListButtons, productData2);
                addedToCart(addToCartButtons, productData2);
                renderProductDetailsModal(viewDetails, productData2);
                quantity();
            } else {
                productContainer.innerHTML = "";
                productData.sort((a, b) => parseFloat(b.productPrice.replace(/,/g, '')) - parseFloat(a.productPrice.replace(/,/g, '')));
                renderProductItems(productData2, productContainer);
                addProductToWishList(wishListButtons, productData2);
                addProductToCart(addToCartButtons, productData2);
                addedToWishList(wishListButtons, productData2);
                addedToCart(addToCartButtons, productData2);
                renderProductDetailsModal(viewDetails, productData2);
                quantity();
            }
        });
    });
};