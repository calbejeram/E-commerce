import { cartCount } from "./functions/cartCount.js";
import { wishListCount } from "./functions/wishListCount.js";

// VARIABLES
const productWishListsContainer = document.getElementById("productWishListsContainer");
const wishLists = localStorage.getItem("Product Wish Lists") ? JSON.parse(localStorage.getItem("Product Wish Lists")) : []
const wishListsCount = document.getElementById("wishListsCount");
const wishListsTextCount = document.getElementById("wishListsTextCount");
const deleteButton = document.getElementsByClassName("delete-button")
wishListsCount.innerHTML = wishLists.length;
wishListsTextCount.innerHTML = wishLists.length;

// Wish List Count
wishListCount();

// Cart List Count
cartCount();


// FUNCTIONS
// Rendering Product Items Wish Lists to Page
function renderProductItemsWishLists() {
    const wishListLength = wishLists.length
    if (wishListLength <= 0) {
        const productWishListItemContainer = document.createElement("div");
        productWishListItemContainer.className = "col-12 col-lg-12";

        productWishListItemContainer.innerHTML = `
        <div class="d-flex align-items-center justify-content-center border rounded-3 p-5">
            <div class="text-center">
                <i class="bi bi-heartbreak-fill text-danger" style="font-size: 3rem"></i>
                <h5 class="fw-bold">No items in your Wish List</h5>
                <p>Add an item to your wish list and they will show up here.</p>
            </div>
        </div>
        `
        productWishListsContainer.appendChild(productWishListItemContainer);
    } else {
        for (let i = 0; i < wishLists.length; i++) {
            const wishListItem = wishLists[i];
    
            const productWishListItemContainer = document.createElement("div");
            productWishListItemContainer.className = "col-12 col-lg-12";
    
            productWishListItemContainer.innerHTML = `
                <div class="card mb-3">
                    <div class="row">
                        <div class="col-4 col-lg-2 p-2 d-flex align-items-center">
                            <img src="${wishListItem.productImgUrl}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-8 col-lg-10 d-flex align-items-center p-3">
                            <div class="row">
                                <div class="col-12 col-lg-8 d-flex flex-column align-items-start">
                                    <h6 class="card-title fw-bold">${wishListItem.productName}</h6>
                                    <p class="text-success fw-bold m-0">₱ ${wishListItem.productPrice}</p>
                                </div>
                                <div class="col-12 col-lg-4 d-flex align-items-center justify-content-end justify-content-lg-evenly">
                                    <button class="btn btn-danger mx-1 delete-button"><i class="bi bi-trash3"></i></button>
                                    <button class="btn btn-success mx-1"><i class="bi bi-cart-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
    
            productWishListsContainer.appendChild(productWishListItemContainer);
        };
    };

    
    
};

renderProductItemsWishLists();