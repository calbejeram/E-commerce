// FUNCTIONS
// Adding and Decreasing the product Quantity
export function quantity() {
    document.addEventListener("DOMContentLoaded", function() {
        let quantity = 1; 
        const productQuantity = document.getElementById("quantity");
        productQuantity.innerHTML = quantity;
        const addButton = document.getElementById("addButton");
        const minusButton = document.getElementById("minusButton");
    
        true ? minusButton.classList.add("disabled") : minusButton.classList.remove("disabled");
    
        if (addButton && minusButton) {
            addButton.addEventListener("click", () => {
                quantity += 1;
    
                productQuantity.innerHTML = quantity;
    
                minusButton.classList.remove("disabled");
            });
    
            minusButton.addEventListener("click", () => {
                if (quantity <= 0) {
                    return;
                }
            
                quantity -= 1;
            
                const productQuantity = document.getElementById("quantity");
                productQuantity.innerHTML = quantity;
            
                if (quantity <= 1) {
                    minusButton.classList.add("disabled");
                }
            });
        } else {
            console.log("One or more elements not found in the DOM.");
        }
    });
};