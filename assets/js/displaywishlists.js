import { cartCount } from "./functions/cartCount.js";
import { wishListCount } from "./functions/wishListCount.js";

// VARIABLES
const productWishListsContainer = document.getElementById("productWishListsContainer");
const wishLists = localStorage.getItem("Product Wish Lists") ? JSON.parse(localStorage.getItem("Product Wish Lists")) : []
const wishListsCount = document.getElementById("wishListsCount");
const wishListsTextCount = document.getElementById("wishListsTextCount");
const deleteButtons = document.getElementsByClassName("delete-button")
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
            

            <table class="table align-middle ">
                <tbody>
                    <tr>
                        <td style="width:200px">
                            <img src="${wishListItem.productImgUrl}" class="img-fluid rounded-3" alt="...">
                        </td>
                        <td style="width:600px">
                            <h6 class="card-title fw-bold">${wishListItem.productName}</h6>
                        </td>
                        <td style="width:200px">
                            <p class="text-success fw-bold m-0">₱ ${wishListItem.productPrice}</p>
                        </td>
                        <td  style="width:200px">
                            <span class="py-lg-2 px-lg-4" title="Remove to Wish Lists"><i class="bi bi-trash3-fill delete-button"></i></span>
                            <span class="py-lg-2 px-lg-4" title="Add to Cart"><i class="bi bi-cart-plus-fill cart-button"></i></span> 
                        </td>
                    </tr>
                </tbody>
            </table>
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
}