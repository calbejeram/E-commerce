import { cartCount } from "./functions/cartCount.js";
import { wishListCount } from "./functions/wishListCount.js";
import { addProductToWishList } from "./functions/addingProductToWishLists.js";
import { productAccessoriesData } from "./instances/accessoriesdata.js";
import { productLaptopData } from "./instances/laptopdata.js";
import { productDesktopsData } from "./instances/desktopdata.js";
import { productKeyboardData } from "./instances/keyboardsdata.js";
import { productMiceData } from "./instances/micedata.js";
import { productMonitorData } from "./instances/monitordata.js"

// VARIABLES
const productCartListsContainer = document.getElementById("productCartListsContainer");
const cartLists = localStorage.getItem("Product Cart Lists") ? JSON.parse(localStorage.getItem("Product Cart Lists")) : []
const cartListsCount = document.getElementById("cartListsCount");
const cartListsTextCount = document.getElementById("cartListsTextCount");
// const dataSet = [
//     productAccessoriesData,
//     productDesktopsData,
//     productLaptopData,
//     productKeyboardData,
//     productMiceData,
//     productMonitorData
// ];


cartListsCount.innerHTML = cartLists.length;
cartListsTextCount.innerHTML = cartLists.length;

// Wish List Count
wishListCount();

// Cart List Count
cartCount();

// Adding product to wishlist


// FUNCTIONS
// Rendering Product Items Wish Lists to Page
function renderProductItemsCartLists() {
    const cartListLength = cartLists.length
    if (cartListLength <= 0) {
        const productCartListItemContainer = document.createElement("div");
        productCartListItemContainer.className = "col-12 col-lg-12";

        productCartListItemContainer.innerHTML = `
        <div class="d-flex align-items-center justify-content-center border rounded-3 p-5">
            <div class="text-center">
                <i class="bi bi-cart-x-fill text-success" style="font-size: 3rem"></i>
                <h5 class="fw-bold">No items in your Cart</h5>
                <p>Add an item to your cart and they will show up here.</p>
            </div>
        </div>
        `
        productCartListsContainer.appendChild(productCartListItemContainer);
    } else {
        for (let i = 0; i < cartLists.length; i++) {
            const cartListItem = cartLists[i];
    
            const productCartListItemContainer = document.createElement("div");
            productCartListItemContainer.className = "col-12 col-lg-12";
    
            productCartListItemContainer.innerHTML = `
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-3 col-lg-2 p-2">
                            <img src="${cartListItem.productImgUrl}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-6 col-lg-7 d-flex align-items-center">
                            <div class="card-body">
                                <h6 class="card-title fw-bold">${cartListItem.productName}</h6>
                            </div>
                        </div>
                        <div class="col-3 col-lg-3">
                            
                        </div>
                    </div>
                </div>
                `;
    
            productCartListsContainer.appendChild(productCartListItemContainer);
        };
    }

    
    
};

renderProductItemsCartLists();