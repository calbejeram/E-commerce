import { cartCount } from "./functions/cartCount.js";
import { wishListCount } from "./functions/wishListCount.js";
import { productLaptopData } from "./instances/laptopdata.js";
import { productAccessoriesData } from "./instances/accessoriesdata.js";
import { productDesktopsData } from "./instances/desktopdata.js";
import { productKeyboardData } from "./instances/keyboardsdata.js";
import { productMiceData } from "./instances/micedata.js";
import { productMonitorData } from "./instances/monitordata.js";

// VARIABLES
const productWishListsContainer = document.getElementById("productWishListsContainer");
const wishLists = localStorage.getItem("Product Wish Lists") ? JSON.parse(localStorage.getItem("Product Wish Lists")) : []
const wishListsCount = document.getElementById("wishListsCount");
const wishListsTextCount = document.getElementById("wishListsTextCount");
const deleteButtons = document.getElementsByClassName("delete-button")
const cartButtons = document.getElementsByClassName("cart-button")
wishListsCount.innerHTML = wishLists.length;
wishListsTextCount.innerHTML = wishLists.length;

const dataSet = [
    ...productLaptopData,
    ...productAccessoriesData,
    ...productDesktopsData,
    ...productKeyboardData,
    ...productMiceData,
    ...productMonitorData
];

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
                    <div class="row p-1 p-lg-3">
                        <div class="col-4 col-lg-2 d-flex align-items-center">
                            <img src="${wishListItem.productImgUrl}" class="img-fluid rounded-3" alt="...">
                        </div>
                        <div class="col-8 col-lg-10 d-flex align-items-center p-3">
                            <div class="row w-100">
                                <div class="col-12 col-lg-6 d-flex flex-column align-items-start">
                                    <h6 class="card-title fw-bold">${wishListItem.productName}</h6>
                                    <p class="text-danger m-0 small">Items Remaining: <span class="fw-bold">${wishListItem.productStocks}</span></p>
                                </div>
                                <div class="col-12 col-lg-3 d-flex flex-column align-items-start">
                                    <p class="text-success fw-bold m-0">₱ ${wishListItem.productPrice}</p>
                                </div>
                                <div class="col-12 col-lg-3 d-flex align-items-center justify-content-start p-0">
                                    <span class="py-2 px-2 px-lg-4" title="Remove to Wish Lists"><i class="bi bi-trash3 delete-button"></i></span>
                                    <span class="py-2 px-2 px-lg-4" title="Add to Cart"><i id="${wishListItem.productId}" class="bi bi-cart-plus-fill cart-button"></i></span>    
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


function deleteItem(index) {
    wishLists.splice(index, 1);

    localStorage.setItem("Product Wish Lists", JSON.stringify(wishLists));

    const productWishListItemContainers = document.getElementsByClassName("col-12 col-lg-12");
    const itemToRemove = productWishListItemContainers[index];

    itemToRemove.remove();

    wishListsCount.innerHTML = wishLists.length;
    wishListsTextCount.innerHTML = wishLists.length;
    window.location.reload();
}


for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function (event) {
        const itemIndex = Array.from(deleteButtons).indexOf(event.target);
        Swal.fire({
            title: 'Remove from Wish Lists',
            text: "You are removing this item from wish lists.",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Remove'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: 'Removed',
                text: 'This is item has been removed from your wish lists.',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
                });

                if (itemIndex !== -1) {
                    deleteItem(itemIndex);
                };
            };
          });
        
    });
};

for (let i = 0; i < cartButtons.length; i++) {  
    cartButtons[i].addEventListener("click", () => {

        const productId = cartButtons[i].id;
        const selectedProductItem = dataSet.find(item => item.productId == productId);
        const productCartListArray = JSON.parse(localStorage.getItem("Product Cart Lists")) || [];
        
        if (productCartListArray.some(item => item.productId === selectedProductItem.productId)) {
            Swal.fire({
                title: 'Already in Cart',
                text: "This item is already added in your cart.",
                icon: 'error',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Remove this item from cart'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: 'Removed',
                    text: 'This is item has been removed from your cart.',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                    });
                    const indexToRemove = productCartListArray.findIndex(item => item.productId == productId);
                    if (indexToRemove !== -1) {
                        productCartListArray.splice(indexToRemove, 1);
                    }

                    localStorage.setItem("Product Cart Lists", JSON.stringify(productCartListArray));
                    window.location.reload();
                };
              });
        } else {
            Swal.fire({
                title: 'Add to Cart?',
                text: "Are you sure to add this item to your cart?",
                iconHtml: '<i class="bi bi-cart-fill text-success"></i>',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, add this item.'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: 'Added to your cart.',
                    text: 'This item is successfully added to your cart.',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                    });

                    productCartListArray.push(selectedProductItem);
                    localStorage.setItem("Product Cart Lists", JSON.stringify(productCartListArray));
                    window.location.reload();
                };
              });

            };
    });
};

function addedToCart(cartButtons, productData) {
    for (let i = 0; i < cartButtons.length; i++) {
        const productId = cartButtons[i].id;
        const selectedProductItem = productData.find(laptop => laptop.productId == productId);
        const productCartListArray = JSON.parse(localStorage.getItem("Product Cart Lists")) || [];
    
        if (productCartListArray.some(item => item.productId === selectedProductItem.productId)) {
            cartButtons[i].className = "bi bi-cart-check-fill text-success cart-button";
        } else {
            cartButtons[i].className = "bi bi-cart-plus cart-button";
        };
    };
};

addedToCart(cartButtons, dataSet);