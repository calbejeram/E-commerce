// FUNCTIONS
// Adding a product to the product wish lists
export function addProductToWishList(wishListButtons, productData) {
    for (let i = 0; i < wishListButtons.length; i++) {
        wishListButtons[i].addEventListener("click", () => {
    
            const productId = wishListButtons[i].id;
            const selectedProductItem = productData.find(laptop => laptop.productId == productId);
            const productWishListArray = JSON.parse(localStorage.getItem("Product Wish Lists")) || [];
            
            
            if (productWishListArray.some(item => item.productId === selectedProductItem.productId)) {
                Swal.fire({
                    title: 'Already in Wish Lists',
                    text: "This item is already added in your wish lists.",
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Remove this item from wish lists'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: 'Removed',
                        text: 'This is item has been removed from your wish lists.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                        });
                        const indexToRemove = productWishListArray.findIndex(item => item.productId == productId);
                        if (indexToRemove !== -1) {
                            productWishListArray.splice(indexToRemove, 1);
                        }
    
                        localStorage.setItem("Product Wish Lists", JSON.stringify(productWishListArray));
                        window.location.reload();
                    };
                  });
            } else {
                Swal.fire({
                    title: 'Add to Wish List?',
                    text: "Are you sure to add this item to your wish lists?",
                    iconHtml: '<i class="bi bi-heart-fill text-danger"></i>',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, add this item.'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: 'Added to your Wish Lists.',
                        text: 'This item is successfully added to your wish lists.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                        });
    
                        console.log(selectedProductItem.addProductDate)
                        productWishListArray.push(selectedProductItem);
                        localStorage.setItem("Product Wish Lists", JSON.stringify(productWishListArray));
                        window.location.reload();
                    };
                  });
    
                };
        });
    };
};