// FUNCTION
// Rendering the product modal with the specified product item details
export function renderProductDetailsModal(viewDetails, productData) {
    for (let i = 0; i < viewDetails.length; i++) {
        viewDetails[i].addEventListener("click", () => {
            const productId = viewDetails[i].id;
            const selectedProductItem = productData.find(laptop => laptop.productId == productId);
    
            const modalTitle = document.getElementById("modalProductTitle");
            const modalBody = document.getElementById("modalBody");

            modalTitle.innerHTML = selectedProductItem.productName
                modalBody.innerHTML = `
                <div id="carouselLaptopIndicators" class="carousel slide">
                    <div id="carouselInner" class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${selectedProductItem.productImgUrl}" class="img-fluid" alt="${selectedProductItem.productName}">
                        </div>
                    </div>
                    <div id="carouselIndicators" class="carousel-indicators position-relative m-0">
                        <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style="height: 80px; width: 80px; background: url('${selectedProductItem.productImgUrl}') no-repeat center center/cover;"></button>
                        <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="1" aria-label="Slide 2"style="height: 80px; width: 80px; background: url('${selectedProductItem.productImagesUrl.image1}') no-repeat center center/ cover;"></button>
                        <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="2" aria-label="Slide 3" style="height: 80px; width: 80px; background: url('${selectedProductItem.productImagesUrl.image2}') no-repeat center center/ cover;"></button>
                        <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="3" aria-label="Slide 4" style="height: 80px; width: 80px; background: url('${selectedProductItem.productImagesUrl.image3}') no-repeat center center/ cover;"></button>
                        <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="4" aria-label="Slide 5" style="height: 80px; width: 80px; background: url('${selectedProductItem.productImagesUrl.image4}') no-repeat center center/ cover;"></button>
                        <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="5" aria-label="Slide 6" style="height: 80px; width: 80px; background: url('${selectedProductItem.productImagesUrl.image5}') no-repeat center center/ cover;"></button>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
    
                <hr>

                <div id="productDescriptions" class="col-12 col-lg-12">
                    <h3>${selectedProductItem.productName}</h3>
                    <h3 class="text-success fw-bold">₱ ${selectedProductItem.productPrice}</h3>
                    <p>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                    </p>
                    <h4><i class="bi bi-list-task me-2"></i>Descriptions</h4>
                    <h6>Quick Specs</h6>
                </div>
                `

            const productDescriptions = document.getElementById("productDescriptions");
            const productSpecs = document.createElement("ul");
            const carouselInner = document.getElementById("carouselInner");

            for (const specs in selectedProductItem.productSpecs) {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<li>${specs[0].toUpperCase() + specs.substring(1)}: <span class="fw-bold text-primary">${selectedProductItem.productSpecs[specs]}</span></li>`;
                productSpecs.appendChild(listItem);
            };

            for (const img in selectedProductItem.productImagesUrl) {
                const carouselDiv = document.createElement("div");
                carouselDiv.className = "carousel-item";
                carouselDiv.innerHTML = `<img src="${selectedProductItem.productImagesUrl[img]}" class="img-fluid" alt="${selectedProductItem.productName}">`;
                carouselInner.appendChild(carouselDiv);
            };
            
            productDescriptions.appendChild(productSpecs);
        });
    };
};

