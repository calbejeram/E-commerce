// VARIABLE
const laptopProductContainer = document.getElementById("laptopProductContainer");
const wishListBtns = document.getElementsByClassName("wishListBtn");
const viewDetails = document.getElementsByClassName("viewDetails");
const wishListCount = document.getElementById("wishListCount");

const wishLists = localStorage.getItem("ProductWishLists") ? JSON.parse(localStorage.getItem("ProductWishLists")) : []
wishListCount.innerHTML = wishLists.length;

const laptopProducts = [
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/800X800_533x.png?v=1645010751",
        laptopName: "Machenike S15 Gen 12 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/2_09c6791a-3357-4417-9f3a-c304fa0f0cb7.jpg?v=1661590952",
            image2: "https://global.machenike.com/cdn/shop/products/8e9855b0a6421fb278adf617247d1797.jpg?v=1661590952",
            image3: "https://global.machenike.com/cdn/shop/products/70c6c52cb4d0a1d47462eec2354edce9.jpg?v=1661590952",
            image4: "https://global.machenike.com/cdn/shop/products/a2cb639883f89e8dfcd1fbfaf0e73c5f.jpg?v=1661590952",
            image5: "https://global.machenike.com/cdn/shop/products/b05ff08433aecad2fbecee1eefefb79d.jpg?v=1661590952"
        },
        laptopPrice: "₱ 65,000.00",
        laptopRating: "5",
        laptopSold: "15",
        laptopSpecs: {
            brandName: "Machenike",
            type: "Laptop",
            series: "Gaming",
            modelNumber: "L15",
            operatingSystem: "Windows 11",
            cpu: "i9-12900H",
            gpu: "RTX 3060",
            memory: "32G RAM + 512G SSD + 2T",
            graphicsCardModel: " RTX30series",
            cpuBrandModel: " Intel 12th Gen Processor"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/800X800-__0005_0_81ad159c-adfe-4b2d-8f96-82ecc149348f_533x.png?v=1674032716",
        laptopName: "Machenike L16 Gen 13 Intel (16”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/DSC06216.jpg?v=1674036105",
            image2: "https://global.machenike.com/cdn/shop/products/DSC06219.jpg?v=1674036104",
            image3: "https://global.machenike.com/cdn/shop/products/DSC06221.jpg?v=1674036105",
            image4: "https://global.machenike.com/cdn/shop/products/DSC06235.jpg?v=1674036104",
            image5: "https://global.machenike.com/cdn/shop/products/DSC06229.jpg?v=1674036105"
        },
        laptopPrice: "PHP 75,999.00",
        laptopRating: "5",
        laptopSold: "25",
        laptopSpecs: {
            cpu: "i9-13900HX",
            gpu: "RTX 4070",
            memory: "16G RAM + 512G SSD",
            brandName: "Machenike",
            series: "Gaming",
            modelNumber: "L16",
            type: "Laptop",
            graphicsCardModel: "RTX40series",
            cpuBrandModel: "Intel 13th Gen Processor",
            operatingSystem: "Windows 11"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/3.png?v=1646361566",
        laptopName: "Machenike L16 Gen 13 Intel (16”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/files/2-0325.jpg?v=1697609402",
            image2: "https://global.machenike.com/cdn/shop/files/5-0325.jpg?v=1697609404",
            image3: "https://global.machenike.com/cdn/shop/files/8-0325.jpg?v=1697609404",
            image4: "https://global.machenike.com/cdn/shop/files/9-0325.jpg?v=1697609403",
            image5: "https://global.machenike.com/cdn/shop/files/10-0325.jpg?v=1697609403"
        },
        laptopPrice: "PHP 65,000.00",
        laptopRating: "5",
        laptopSold: "15",
        laptopSpecs: {
            cpu: "i9-13900HX",
            gpu: "RTX 4070",
            memory: "16G RAM + 512G SSD",
            brandName: "Machenike",
            series: "Gaming",
            modelNumber: "L16",
            type: "Laptop",
            graphicsCardModel: "RTX40series",
            cpuBrandModel: "Intel 13th Gen Processor",
            operatingSystem: "Windows 11"
        }
    },
]


// FUNCTION
for (let i = 0; i < laptopProducts.length; i++) {
    const productLaptop = laptopProducts[i];

    const productLaptopElement = document.createElement("div");
    productLaptopElement.className = "col-6 col-lg-4 mb-4";

    productLaptopElement.innerHTML = `
        <div class="card bg-secondary bg-opacity-25">
            <img src="${productLaptop.laptopImgUrl}" class="card-img-top" alt="${productLaptop.laptopName}">
            <div class="card-body p-2">
                <p class="card-text m-0">${productLaptop.laptopName}</p>
                <p class="card-text fw-bold text-success m-0">${productLaptop.laptopPrice}</p>
                <div class="d-flex justify-content-between mb-2">
                    <p class="card-text text-success m-0">${productLaptop.laptopRating} <i class="bi bi-star-fill text-warning"></i> Ratings</p>
                    <p class="card-text text-success m-0">${productLaptop.laptopSold} Sold</p>
                </div>
                <div class="d-flex justify-content-between">
                    <button type="button" id="${productLaptop.laptopId}" class="viewDetails btn btn-success" data-bs-toggle="modal" data-bs-target="#productDetailsModal">View Details</button>
                    
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="productDetailsModal">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div id="modalBody" class="modal-body">

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Add to Wish Lists<i class="bi bi-bookmark-heart-fill"></i></button>
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Add to Cart <i class="bi bi-cart-plus-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `;

    laptopProductContainer.appendChild(productLaptopElement);
};


for (let i = 0; i < wishListBtns.length; i++) {
    wishListBtns[i].addEventListener("click", () => {
        const wishListHeartBtn = document.getElementById("wishListHeartBtn");
        const laptopId = wishListBtns[i].id;
        let productWishListArray = JSON.parse(localStorage.getItem("ProductWishLists")) || [];
        const selectedLaptop = laptopProducts.find(laptop => laptop.laptopId == laptopId);

        if (wishListBtns[i].innerHTML === `<i id="wishListHeartBtn" class="bi bi-heart"></i>`) {
            Swal.fire({
                title: 'Add to Wish List',
                text: "Are you sure to add this item to your wish list?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, add to my wish list.'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Added!",
                    text: "You successfully added this item to your wish list.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                    });
                    
                      // Add the selected laptop to the array
                      productWishListArray.push(selectedLaptop);

                      // Store the updated array in local storage
                      localStorage.setItem("ProductWishLists", JSON.stringify(productWishListArray));
                    
                      wishListHeartBtn.className = "bi bi-heart-fill text-danger"

                }
              });
        } else {
            Swal.fire({
                title: 'Remove to Wish List',
                text: "Are you sure to remove this item to your wish list?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, remove to my wish list.'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Removed!",
                    text: "You successfully removed this item to your wish list.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                    });

                     // Remove the selected laptop from the array
                     const indexToRemove = productWishListArray.findIndex(item => item.laptopId == laptopId);
                     if (indexToRemove !== -1) {
                         productWishListArray.splice(indexToRemove, 1);
                     }
 
                     // Store the updated array in local storage
                     localStorage.setItem("ProductWishLists", JSON.stringify(productWishListArray));

                    wishListHeartBtn.className = "bi bi-heart";
                }
              });
        }
    });
};


for (let i = 0; i < viewDetails.length; i++) {
    viewDetails[i].addEventListener("click", () => {

        const laptopId = viewDetails[i].id;
        const selectedLaptop = laptopProducts.find(laptop => laptop.laptopId == laptopId);

        const modalTitle = document.getElementById("exampleModalLabel");
        const modalBody = document.getElementById("modalBody");
        
        modalTitle.innerHTML = selectedLaptop.laptopName
        modalBody.innerHTML = `
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${selectedLaptop.laptopImgUrl}" class="img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${selectedLaptop.laptopImages.image1}" class="img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${selectedLaptop.laptopImages.image2}" class="img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${selectedLaptop.laptopImages.image3}" class="img-fluid" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="${selectedLaptop.laptopImages.image4}" class="img-fluid" alt="...">
                </div>
            </div>
            <div class="carousel-indicators position-relative m-0">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style="height: 50px; width: 50px; background: url('${selectedLaptop.laptopImgUrl}') no-repeat center center/cover;"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"style="height: 50px; width: 50px; background: url('${selectedLaptop.laptopImages.image1}') no-repeat center center/ cover;"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" style="height: 50px; width: 50px; background: url('${selectedLaptop.laptopImages.image2}') no-repeat center center/ cover;"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" style="height: 50px; width: 50px; background: url('${selectedLaptop.laptopImages.image3}') no-repeat center center/ cover;"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" style="height: 50px; width: 50px; background: url('${selectedLaptop.laptopImages.image4}') no-repeat center center/ cover;"></button>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <hr>
        <div class="col-12 col-lg-12">
            <h3>Descriptions</h3>
            <h6>Quick Specs</h6>
            <ul>
                <li>Brand Name: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.brandName}</span></li>
                <li>Type: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.type}</span></li>
                <li>Series: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.series}</span></li>
                <li>Model Number: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.modelNumber}</span></li>
                <li>Operating System: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.operatingSystem}</span></li>
                <li>CPU: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.cpu}</span></li>
                <li>CPU Brand Model: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.cpuBrandModel}</span></li>
                <li>GPU: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.gpu}</span></li>
                <li>Graphics Card Model: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.graphicsCardModel}</span></li>
                <li>Memory: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.memory}</span></li>
            </ul>
        </div>
        
        `
    });

        
};
