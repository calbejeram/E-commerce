import { cartCount } from "./functions/cartCount.js";
import { wishListCount } from "./functions/wishListCount.js";
import { productLaptopData } from "./instances/laptopdata.js";
import { productAccessoriesData } from "./instances/accessoriesdata.js";
import { productDesktopsData } from "./instances/desktopdata.js";
import { productKeyboardData } from "./instances/keyboardsdata.js";
import { productMiceData } from "./instances/micedata.js";
import { productMonitorData } from "./instances/monitordata.js";
import { addProductToWishList } from "./functions/addingProductToWishLists.js";
import { quantity } from "./functions/quantity.js";

// VARIABLES
const productCartListsContainer = document.getElementById("productCartListsContainer");
const cartLists = localStorage.getItem("Product Cart Lists") ? JSON.parse(localStorage.getItem("Product Cart Lists")) : []
const cartListsCount = document.getElementById("cartListsCount");
const cartListsTextCount = document.getElementById("cartListsTextCount");
const wishListButtons = document.getElementsByClassName("wishlist-button");
const deleteButtons = document.getElementsByClassName("delete-button");
const checkBoxButtons = document.getElementsByClassName("cart-checkbox");
cartListsCount.innerHTML = cartLists.length;
cartListsTextCount.innerHTML = cartLists.length;

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
// Rendering Product Items Cart Lists to Page
function renderProductItemsWishLists() {
    const cartListLength = cartLists.length
    if (cartListLength <= 0) {
        const productCartListItemContainer = document.createElement("div");
        productCartListItemContainer.className = "col-12 col-lg-12";

        productCartListItemContainer.innerHTML = `
        <div class="d-flex align-items-center justify-content-center border rounded-3 p-5">
            <div class="text-center">
                <i class="bi bi-cart-x-fill text-success" style="font-size: 3rem"></i>
                <h5 class="fw-bold">No items in your Cart List</h5>
                <p>Add an item to your cart list and they will show up here.</p>
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
                    <div class="row p-1 p-lg-3">
                        <div class="col-2 col-lg-1 d-flex align-items-center justify-content-center">
                            <div class="form-check ">
                                <input class="form-check-input cart-checkbox" type="checkbox" value="" id="${cartListItem.productId}">
                            </div>
                        </div>
                        <div class="col-4 col-lg-2 d-flex align-items-center">
                            <img src="${cartListItem.productImgUrl}" class="img-fluid rounded-3" alt="...">
                        </div>
                        <div class="col-6 col-lg-9 d-flex align-items-center p-3">
                            <div class="row w-100">
                                <div class="col-12 col-lg-6 d-flex flex-column align-items-start">
                                    <h6 class="card-title fw-bold">${cartListItem.productName}</h6>
                                    <p class="text-danger m-0 small">Items Remaining: <span class="fw-bold">${cartListItem.productStocks}</span></p>
                                </div>
                                <div class="col-12 col-lg-3 d-flex flex-column align-items-start">
                                    <p class="text-success fw-bold m-0">₱ ${cartListItem.productPrice}</p>
                                    <div class="d-flex flex-row">
                                        <span class="py-2 px-2 px-lg-2" title="Remove to Cart Lists"><i class="bi bi-trash3 delete-button"></i></span>    
                                        <span class="py-2 px-2 px-lg-2" title="Add to Wish Lists"><i id="${cartListItem.productId}" class="bi bi-heart wishlist-button"></i></span>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-3 d-flex flex-column align-items-start">
                                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                        <button id="minusButton" type="button" class="btn btn-success w-25"><i class="bi bi-dash"></i></button>
                                        <span class="px-3 py-2 text-center" id="quantity"></span>
                                        <button id="addButton" type="button" class="btn btn-success w-25"><i class="bi bi-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
    
            productCartListsContainer.appendChild(productCartListItemContainer);
            quantity();
        };
    };
};

quantity();

renderProductItemsWishLists();

function deleteItemCartList() {
    function deleteItem(index) {
        cartLists.splice(index, 1);
    
        localStorage.setItem("Product Cart Lists", JSON.stringify(cartLists));
    
        const productCartListItemContainer = document.getElementsByClassName("col-12 col-lg-12");
        const itemToRemove = productCartListItemContainer[index];
    
        itemToRemove.remove();
    
        cartListsCount.innerHTML = cartLists.length;
        cartListsTextCount.innerHTML = cartLists.length;
        window.location.reload();
    }
    
    
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function (event) {
            const itemIndex = Array.from(deleteButtons).indexOf(event.target);
            Swal.fire({
                title: 'Remove from Cart Lists',
                text: "You are removing this item from cart lists.",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonColor: '#d33',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Remove'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: 'Removed',
                    text: 'This is item has been removed from your cart lists.',
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
};

deleteItemCartList();


addProductToWishList(wishListButtons, dataSet);

function addedToWishList(wishListButtons, productData) {
    for (let i = 0; i < wishListButtons.length; i++) {
        const productId = wishListButtons[i].id;
        const selectedProductItem = productData.find(laptop => laptop.productId == productId);
        const productWishListArray = JSON.parse(localStorage.getItem("Product Wish Lists")) || [];
    
        if (productWishListArray.some(item => item.productId === selectedProductItem.productId)) {
            wishListButtons[i].className = "bi bi-heart-fill text-danger me-2 me-lg-0 wishlist-button";
        } else {
            wishListButtons[i].className = "bi bi-heart me-2 me-lg-0 wishlist-button";
        };
    };
};

addedToWishList(wishListButtons, dataSet);



let subtotal = 0;  // Initialize subtotal outside the loop

for (let i = 0; i < checkBoxButtons.length; i++) {
  checkBoxButtons[i].addEventListener("click", () => {
    const checkbox = checkBoxButtons[i];
    const productId = checkBoxButtons[i].id;
    checkbox.setAttribute("checked", "checked");

    const productCartListArray = JSON.parse(localStorage.getItem("Product Cart Lists")) || [];
    const selectedProductItem = productCartListArray.find(item => item.productId == productId);

    if (checkbox.checked) {
      console.log(true);
      subtotal = subtotal + parseInt(selectedProductItem.productPrice);  // Accumulate the prices
      console.log(subtotal);
      quantity();
      console.log(quantity())
    } else {
      console.log(false);
      subtotal = subtotal - parseInt(selectedProductItem.productPrice);  // Accumulate the prices
      console.log(subtotal);
    }
  });
}






  