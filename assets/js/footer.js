// VARIABLES
const machenikeInc = document.getElementById("machenikeInc");
const support = document.getElementById("support");
const accounts = document.getElementById("accounts");
const payments = document.getElementById("payments");

// Links
const column1 = [
    "About Machenike Inc.",
    "Privacy Policy",
    "Terms & Conditions",
    "Machenike",
    "Press",
    "Awards"
];

const column2 = [
    "Sales Support",
    "Technical Support",
    "Drivers and Manuals",
    "Machenike Community",
    "FAQ",
    "Contact Us"
];

const column3 = [
    "My Account",
    "Privacy Policy",
    "My Orders",
    "My Wishlist",
    "Product Registration"
];

const column4 = [
    {
        imgUrl: "https://img.icons8.com/color/48/mastercard.png",
        paymentName: "Mastercard",
    },
    {
        imgUrl: "https://img.icons8.com/color/48/visa.png",
        paymentName: "Visa",
    },
    {
        imgUrl: "https://img.icons8.com/fluency/48/paypal.png",
        paymentName: "Paypal",
    },
    {
        imgUrl: "https://img.icons8.com/plasticine/48/gcash.png",
        paymentName: "Gcash",
    },
    {
        imgUrl: "https://img.icons8.com/fluency/48/amex.png",
        paymentName: "American Express Card",
    },
    {
        imgUrl: "https://img.icons8.com/fluency/48/jcb.png",
        paymentName: "JCB",
    }
];


// FUNCTIONS

// Appending Links to footer section
for (let i = 0; i < column1.length; i++) {
    const anchor = document.createElement("a");
    anchor.href = "#";
    anchor.innerHTML = column1[i];

    machenikeInc.appendChild(anchor);
};

for (let i = 0; i < column2.length; i++) {
    const anchor = document.createElement("a");
    anchor.href = "#";
    anchor.innerHTML = column2[i];

    support.appendChild(anchor);
};

for (let i = 0; i < column3.length; i++) {
    const anchor = document.createElement("a");
    anchor.href = "#";
    anchor.innerHTML = column3[i];

    accounts.appendChild(anchor);
};

for (let i = 0; i < column4.length; i++) {
    const anchor = document.createElement("a");
    anchor.innerHTML = `<img width="48" height="48" src="${column4[i].imgUrl}" alt="${column4[i].paymentName.toLowerCase()}" title="${column4[i].paymentName}"/>`
    anchor.href = `https://${column4[i].paymentName.toLowerCase()}.com`;

    payments.appendChild(anchor);
};
