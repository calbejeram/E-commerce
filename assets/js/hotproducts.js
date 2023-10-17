// VARIABLES
const showBtn = document.getElementById("showBtn");
const hottestProductsContainer = document.querySelector("#hottestProducts");
const hotProducts = [
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/products/1_70b37b0e-1498-4b44-8f43-d4eb0b25d9b9_533x.png?v=1665397864",
        productImgAlt: "Machenike Hot Products",
        productTitle: "Machenike K7 Pro Mechanical Keyboard"
    },
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/products/20210702_11527_533x.png?v=1680168531",
        productImgAlt: "Machenike Hot Products",
        productTitle: "Machenike Stars-X Gen 13 Intel Gaming Desktop"
    },
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/products/800X800-__0005_0_81ad159c-adfe-4b2d-8f96-82ecc149348f_533x.png?v=1674032716",
        productImgAlt: "Machenike Hot Products",
        productTitle: 'Machenike L15C Gen 12 Intel (15.6") Gaming Laptop'
    },
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/products/1_ea7d8aa8-253e-4315-9056-a1c3b22cc2ee_533x.png?v=1674970977",
        productImgAlt: "Machenike Hot Products",
        productTitle: "Machenike MK32 Series - MK32UG144S2 Monitor"
    },
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/products/4_554ca479-6032-427b-a687-be04e83fefa3_533x.png?v=1655376450",
        productImgAlt: "Machenike Hot Products",
        productTitle: "Machenike M7 Gen 2 Gaming Mouse RGB 16000 DPI"
    },
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/products/1_e02f9443-dfd1-49a8-8232-417520ba571b_533x.png?v=1636708210",
        productImgAlt: "Machenike Hot Products",
        productTitle: "Machenike H300 Gaming Headset Super Noise Canceling"
    },
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/products/800X800_3_533x.png?v=1680166476",
        productImgAlt: "Machenike Hot Products",
        productTitle: "Machenike G6 Hall-effect Gamepad Controller"
    },
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/products/2_13a6595c-dce2-4bf4-b7ce-a886f2c4c859_533x.png?v=1637752690",
        productImgAlt: "Machenike Hot Products",
        productTitle: 'Machenike F117 Gen 11 Intel (17.3") Gaming Laptop'
    },
]

// FUNCTIONS
// View hottest laptops
showBtn.addEventListener("click", () => {
    if (showBtn.innerHTML === "See More") {
        showBtn.innerText = "See Less";
        hottestProductsContainer.style.height = "auto";
        hottestProductsContainer.style.overflow = "";
        hottestProductsContainer.style.position = "static";
    } else {
        showBtn.innerText = "See More";
        hottestProductsContainer.style.height = "75vh";
        hottestProductsContainer.style.overflow = "hidden";
        hottestProductsContainer.style.position = "relative";
    }
});

// Render Hottest Products
for (let i = 0; i < hotProducts.length; i++) {
    const product = hotProducts[i];

    const productElement = document.createElement("div");
    productElement.className = "col-6 col-lg-3 my-2";

    productElement.innerHTML = `
        <div class="card bg-secondary bg-opacity-25">
            <img src="${product.productImgUrl}" class="card-img-top" alt="${product.productImgAlt}">
            <div class="card-body">
                <p class="card-text">${product.productTitle}</p>
            </div>
        </div>
    `;

    hottestProductsContainer.appendChild(productElement);
};