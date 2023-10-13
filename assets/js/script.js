

const products = document.querySelectorAll("#laptopProducts, #monitorProducts, #desktopProducts, #accessoriesProducts, #miceProducts, #keyboardProducts, #productSeriesSelect");

// FUNCTIONS





// Products
// products.forEach((product) => {
//     product.addEventListener("click", () => {
//         defaultProductSeries.classList.add("d-none")
//         productSeriesTitle.innerText = product.innerHTML;
//         productSeriesSelected.innerHTML = product.innerHTML;
//     });
// });

// function setActive(id) {
//     products.forEach(product => {
//         if (product === id) {
//             product.classList.add("active");
//         } else {
//             product.classList.remove("active");
//         }
//     });
// };

// products.forEach(product => {
//     product.addEventListener("click", () => {
//         setActive(product)
//     });
// });

// productSeriesSelect.addEventListener("click", () => {
//     defaultProductSeries.classList.remove("d-none")
// });