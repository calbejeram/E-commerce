import { cartCount } from "./functions/cartCount.js";
import { wishListCount } from "./functions/wishListCount.js";
import { productLaptopData } from "./instances/laptopdata.js";
import { productAccessoriesData } from "./instances/accessoriesdata.js";
import { productDesktopsData } from "./instances/desktopdata.js";
import { productKeyboardData } from "./instances/keyboardsdata.js";
import { productMiceData } from "./instances/micedata.js";
import { productMonitorData } from "./instances/monitordata.js";
import { quantity } from "./functions/quantity.js";

// VARIABLES
const productWishListsContainer = document.getElementById("productWishListsContainer");
const wishLists = localStorage.getItem("Product Wish Lists") ? JSON.parse(localStorage.getItem("Product Wish Lists")) : []
const wishListsCount = document.getElementById("wishListsCount");
const wishListsTextCount = document.getElementById("wishListsTextCount");
const deleteButtons = document.getElementsByClassName("delete-button")
const cartButtons = document.getElementsByClassName("cart-button");
const viewDetailsModal = document.getElementsByClassName("view-details-modal");
const sort = document.querySelectorAll("#priceLowToHigh, #priceHighToLow");
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
                                    <span class="py-2 px-2 px-lg-4" title="Add to Cart"><i id="${wishListItem.productId}" class="bi bi-eye-fill view-details-modal" data-bs-toggle="modal" data-bs-target="#productDetailsModal"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal -->
                <div class="modal fade" id="productDetailsModal">
                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable ">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="modalProductTitle"></h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div id="modalBody" class="modal-body">
        
                            </div>
                            <div class="modal-footer">
                                <p>Quantity: </p>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button id="minusButton" type="button" class="btn btn-success w-25"><i class="bi bi-dash"></i></button>
                                    <span class="px-3 py-2 text-center" id="quantity"></span>
                                    <button id="addButton" type="button" class="btn btn-success w-25"><i class="bi bi-plus"></i></button>
                                </div>
                                <button class="btn btn-success w-25">Buy</button>
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


function deleleItemWishList() {
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
};

deleleItemWishList();

function addingItemToCart() {
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
};

addingItemToCart()

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




function productSorting(productData, productContainer) {
    const setActive = (id) => {
        sort.forEach(item => {
            item === id ? item.classList.add("active") : item.classList.remove("active");
        });
    };
    
    sort.forEach(item => {
        item.addEventListener("click", () => {
            setActive(item);
            if (item.innerHTML === "Price Low to High") {
                productContainer.innerHTML = "";
                productData.sort((a, b) => parseFloat(a.productPrice.replace(/,/g, '')) - parseFloat(b.productPrice.replace(/,/g, '')));
                renderProductItemsWishLists();
                deleleItemWishList();
                addedToCart(cartButtons, dataSet);
                addingItemToCart();
                quantity();
                renderProductDetailsModal(viewDetailsModal, wishLists);
                
            } else {
                productContainer.innerHTML = "";
                productData.sort((a, b) => parseFloat(b.productPrice.replace(/,/g, '')) - parseFloat(a.productPrice.replace(/,/g, '')));
                renderProductItemsWishLists();
                deleleItemWishList();
                addedToCart(cartButtons, dataSet);
                addingItemToCart();
                quantity();
                renderProductDetailsModal(viewDetailsModal, wishLists);
            }
        });
    });
};

productSorting(wishLists, productWishListsContainer);


function renderProductDetailsModal(viewDetails, productData) {
    for (let i = 0; i < viewDetails.length; i++) {
        viewDetails[i].addEventListener("click", () => {
            const productId = viewDetails[i].id;
            const selectedProductItem = productData.find(item => item.productId == productId);
    
            const modalTitle = document.getElementById("modalProductTitle");
            const modalBody = document.getElementById("modalBody");

            modalTitle.innerHTML = selectedProductItem.productName;
            modalBody.innerHTML = `
            <div id="carouselLaptopIndicators" class="carousel slide">
                <div id="carouselInner" class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${selectedProductItem.productImgUrl}" class="img-fluid" alt="${selectedProductItem.productName}">
                    </div>
                </div>
                <div id="carouselIndicators" class="carousel-indicators position-relative m-0">
                    <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style="height: 80px; width: 80px; background: url('${selectedProductItem.productImgUrl}') no-repeat center center/cover;"></button>
                    <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="1" aria-label="Slide 2"style="height: 80px; width: 80px; background: url('${selectedProductItem.productImagesUrl.image1}') no-repeat center center/ cover;"></button>
                    <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="2" aria-label="Slide 3" style="height: 80px; width: 80px; background: url('${selectedProductItem.productImagesUrl.image2}') no-repeat center center/ cover;"></button>
                    <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="3" aria-label="Slide 4" style="height: 80px; width: 80px; background: url('${selectedProductItem.productImagesUrl.image3}') no-repeat center center/ cover;"></button>
                    <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="4" aria-label="Slide 5" style="height: 80px; width: 80px; background: url('${selectedProductItem.productImagesUrl.image4}') no-repeat center center/ cover;"></button>
                    <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="5" aria-label="Slide 6" style="height: 80px; width: 80px; background: url('${selectedProductItem.productImagesUrl.image5}') no-repeat center center/ cover;"></button>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
    
            <hr>

            <div id="productDescriptions" class="col-12 col-lg-12">
                <h3>${selectedProductItem.productName}</h3>
                <h3 class="text-success fw-bold">₱ ${selectedProductItem.productPrice}</h3>
                <p>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                </p>
                <h4><i class="bi bi-list-task me-2"></i>Descriptions</h4>
                <h6>Quick Specs</h6>
            </div>
            `

            const productDescriptions = document.getElementById("productDescriptions");
            const productSpecs = document.createElement("ul");
            const carouselInner = document.getElementById("carouselInner");

            for (const specs in selectedProductItem.productSpecs) {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<li>${specs[0].toUpperCase() + specs.substring(1)}: <span class="fw-bold text-primary">${selectedProductItem.productSpecs[specs]}</span></li>`;
                productSpecs.appendChild(listItem);
            };

            for (const img in selectedProductItem.productImagesUrl) {
                const carouselDiv = document.createElement("div");
                carouselDiv.className = "carousel-item";
                carouselDiv.innerHTML = `<img src="${selectedProductItem.productImagesUrl[img]}" class="img-fluid" alt="${selectedProductItem.productName}">`;
                carouselInner.appendChild(carouselDiv);
            };
            
            productDescriptions.appendChild(productSpecs);
        });
    };
};

renderProductDetailsModal(viewDetailsModal, wishLists);
quantity();