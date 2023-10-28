import { quantity } from "./quantity.js";

// FUNCTIONS
// Rendering Product Items to Page
export function renderProductItems(productData, productContainer) {
    for (let i = 0; i < productData.length; i++) {
        const productItem = productData[i];
    
        const productItemContainer = document.createElement("div");
        productItemContainer.className = "col-6 col-lg-4 mb-4";

        
    
        productItemContainer.innerHTML = `
            <div class="card bg-white rounded-0 p-0">
                <img src="${productItem.productImgUrl}" class="card-img-top" alt="${productItem.productName}">
                <div class="card-body px-3">
                    <p class="card-text m-0 fw-bold">${productItem.productName}</p>
                    <p class="card-text fw-bold text-success m-0">₱ ${productItem.productPrice}</p>
                    <div class="d-flex flex-column flex-lg-row justify-content-between mb-2">
                        <p class="card-text text-success m-0 fw-bold">
                            <i class="bi bi-star-fill text-warning" style="font-size: 0.7rem"></i>
                            <i class="bi bi-star-fill text-warning" style="font-size: 0.7rem"></i>
                            <i class="bi bi-star-fill text-warning" style="font-size: 0.7rem"></i>
                            <i class="bi bi-star-fill text-warning" style="font-size: 0.7rem"></i>
                            <i class="bi bi-star-fill text-warning" style="font-size: 0.7rem"></i>
                        </p>
                        <p class="card-text text-success m-0">${productItem.productSold} <i class="bi bi-check-circle-fill text-success"></i> Sold</p>
                    </div>
                    <div class="row g-2">
                        <div class="col-12 col-lg-8">
                            <button type="button" id="${productItem.productId}" class="viewDetails btn btn-success w-100" data-bs-toggle="modal" data-bs-target="#productDetailsModal">View Details</button>
                        </div>
                        <div class="col-6 col-lg-2">
                            <button type="button" id="${productItem.productId}" class="wishListButton btn w-100"><i class="bi bi-heart me-2 me-lg-0" title="Add to Wish Lists"></i><span class="d-lg-none">Add to Wish Lists</span></button>
                        </div>
                        <div class="col-6 col-lg-2">
                            <button type="button" id="${productItem.productId}" class="addToCartButton btn w-100"><i class="bi bi-cart-plus me-2 me-lg-0" title="Add to Cart"></i><span class="d-lg-none">Add to Cart</span></button>
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
        `;

        productContainer.appendChild(productItemContainer);
    };
};

quantity();