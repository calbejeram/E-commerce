// FUNCTION
// Check if the product item is already added in product wish lists
export function addedToWishList(wishListButtons, productData) {
    for (let i = 0; i < wishListButtons.length; i++) {
        const productId = wishListButtons[i].id;
        const selectedProductItem = productData.find(laptop => laptop.productId == productId);
        const productWishListArray = JSON.parse(localStorage.getItem("Product Wish Lists")) || [];
    
        if (productWishListArray.some(item => item.productId === selectedProductItem.productId)) {
            wishListButtons[i].innerHTML = `<i class="bi bi-heart-fill text-danger me-2 me-lg-0"></i>`
        } else {
            wishListButtons[i].innerHTML = `<i class="bi bi-heart me-2 me-lg-0"></i>`
        };
    };
};