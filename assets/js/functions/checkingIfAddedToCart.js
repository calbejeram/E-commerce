// FUNCTION
// Check if the product item is already added in product cart lists
export function addedToCart(addToCartButtons, productData) {
    for (let i = 0; i < addToCartButtons.length; i++) {
        const productId = addToCartButtons[i].id;
        const selectedProductItem = productData.find(laptop => laptop.productId == productId);
        const productCartListArray = JSON.parse(localStorage.getItem("Product Cart Lists")) || [];
    
        if (productCartListArray.some(item => item.productId === selectedProductItem.productId)) {
            addToCartButtons[i].innerHTML = `<i class="bi bi-cart-check-fill text-success"></i>`
        } else {
            addToCartButtons[i].innerHTML = `<i class="bi bi-cart-plus"></i>`
        };
    };
};