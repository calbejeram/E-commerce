// VARIABLES
const featuresContainer = document.querySelector("#featuresContainer");
const features = [
    {
        featureImgUrl: "https://img.icons8.com/fluency/48/delivery.png",
        featureTitle: "Free Delivery",
        featureText: "On all orders"
    },
    {
        featureImgUrl: "https://img.icons8.com/fluency/48/warranty--v1.png",
        featureTitle: "Warranty",
        featureText: "Register Product"
    },
    {
        featureImgUrl: "https://img.icons8.com/color/48/card-in-use.png",
        featureTitle: 'Payment',
        featureText: "Secured System"
    },
    {
        featureImgUrl: "https://img.icons8.com/color/48/online-payment-.png",
        featureTitle: "Online Payment",
        featureText: "Credit/Debit Card etc."
    }
]


// FUNCTIONS
for (let i = 0; i < features.length; i++) {
    const feature = features[i];

    const featureElement = document.createElement("div");
    featureElement.className = "col-6 col-lg-3 p-3 border border-5 bg-info bg-opacity-25";

    featureElement.innerHTML = `
    <div>
        <img src="${feature.featureImgUrl}" alt="${feature} Image">
        <h5>${feature.featureTitle}</h5>
        <p style: font-size: 10px;>${feature.featureText}</p>
    </div>
    `;

    featuresContainer.appendChild(featureElement);
};