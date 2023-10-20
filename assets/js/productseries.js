// VARIABLES
const productSeriesContainer = document.querySelector("#productSeries");
const productSeries = [
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/collections/9_0006_3_535x.png?v=1637060714",
        productIcon: '<i class="fa-solid fa-laptop"></i>',
        productTitle: "Laptops",
        productPageTitle: "laptops"
    },
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/collections/1_1a21bd5b-888d-4e70-81d2-f54f40f3d8df_535x.png?v=1674883892",
        productIcon: '<i class="fa-solid fa-tv"></i>',
        productTitle: "Monitors",
        productPageTitle: "monitors"
    },
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/collections/20201109_13968-_1_1_535x.png?v=1680169837",
        productIcon: '<i class="fa-solid fa-desktop"></i>',
        productTitle: 'Desktops',
        productPageTitle: "desktops"
    },
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/collections/1_535x.png?v=1680166373",
        productIcon: '<i class="fa-solid fa-gamepad"></i>',
        productTitle: "Accessories",
        productPageTitle: "accessories"
    },
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/collections/1723c26fff302925cae309b7f027739a_535x.png?v=1655376371",
        productIcon: '<i class="fa-solid fa-computer-mouse"></i>',
        productTitle: "Mice",
        productPageTitle: "mice"
    },
    {
        productImgUrl: "https://global.machenike.com/cdn/shop/products/1_70b37b0e-1498-4b44-8f43-d4eb0b25d9b9_533x.png?v=1665397864",
        productIcon: '<i class="fa-solid fa-keyboard"></i>',
        productTitle: "Keyboards",
        productPageTitle: "keyboards"
    }
]

// FUNCTIONS
for (let i = 0; i < productSeries.length; i++) {
    const product = productSeries[i];

    const productElement = document.createElement("div");
    productElement.className = "col-6 col-lg-4 my-2";

    productElement.innerHTML = `
    <div class="card bg-secondary bg-opacity-25">
        <img src="${product.productImgUrl}" class="card-img-top" alt="${product.productTitle} Image">
        <div class="card-body bg-white bg-opacity-50">
            ${product.productIcon}
            <a class="icon-link text-black fw-bold" href="/assets/pages/products/${product.productPageTitle}.html">
            ${product.productTitle}
                <i class="bi bi-arrow-right"></i>
            </a>
        </div>
    </div>
    `;

    productSeriesContainer.appendChild(productElement);
};