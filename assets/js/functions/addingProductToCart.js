// FUNCTIONS
// Adding a product item to product cart
export function addProductToCart(addToCartButtons, productData) {
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click", () => {
    
            const productId = addToCartButtons[i].id;
            const selectedProductItem = productData.find(laptop => laptop.productId == productId);
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