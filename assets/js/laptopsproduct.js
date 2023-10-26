// VARIABLE
const laptopProductContainer = document.getElementById("laptopProductContainer");
const filterContainer = document.getElementById("filterContainer");
const wishListButtons = document.getElementsByClassName("wishListButton");
const viewDetails = document.getElementsByClassName("viewDetails");
const wishListCount = document.getElementById("wishListCount");
const carouselInner = document.getElementById("carouselInner");


const wishLists = localStorage.getItem("ProductWishLists") ? JSON.parse(localStorage.getItem("ProductWishLists")) : []
wishListCount.innerHTML = wishLists.length;

const laptopProducts = [
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
        laptopName: "Machenike L16 Gen 13 Intel (16”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/files/2-0325.jpg?v=1697609402",
            image2: "https://global.machenike.com/cdn/shop/files/5-0325.jpg?v=1697609404",
            image3: "https://global.machenike.com/cdn/shop/files/8-0325.jpg?v=1697609404",
            image4: "https://global.machenike.com/cdn/shop/files/9-0325.jpg?v=1697609403",
            image5: "https://global.machenike.com/cdn/shop/files/10-0325.jpg?v=1697609403"
        },
        laptopPrice: "₱ 65,000.00",
        laptopRating: "5",
        laptopSold: "15",
        laptopSpecs: {
            brandName: "Machenike",
            type: "Laptop",
            series: "Gaming",
            modelNumber: "L16",
            operatingSystem: "Windows 11",
            cpu: "i9-13900HX",
            gpu: "RTX 4070",
            memory: "16G RAM + 512G SSD",
            graphicsCardModel: "RTX40series",
            cpuBrandModel: "Intel 13th Gen Processor"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/16air_-800_0000_8.jpg?v=1693986456",
        laptopName: "Machenike L16A Gen Ryzen 7000 AMD (16”) Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/files/3._750x.jpg?v=1693986452",
            image2: "https://global.machenike.com/cdn/shop/files/1.CPU_750x.jpg?v=1693986456",
            image3: "https://global.machenike.com/cdn/shop/files/1dc77b0b0edb7028e12570cb177ca71a_750x.jpg?v=1693986452",
            image4: "https://global.machenike.com/cdn/shop/files/16air-1a-_-7_750x.jpg?v=1693986452",
            image5: "https://global.machenike.com/cdn/shop/files/0._750x.jpg?v=1693986456"
        },
        laptopPrice: "PHP 75,999.00",
        laptopRating: "5",
        laptopSold: "25",
        laptopSpecs: {
            cpu: "R7-7735HS",
            gpu: "AMD Ryzen™ 7 7735HS",
            memory: "16G RAM + 1T SSD",
            brandName: "Machenike",
            series: "Gaming",
            modelNumber: "Light-16 Air (L16A)",
            type: "Laptop",
            graphicsCardModel: "AMD Radeon™ 680M",
            cpuBrandModel: "AMD Ryzen™ 7 7735HS",
            operatingSystem: "Windows 11"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/2_9ef49445-10a9-470a-aeab-d99585909cbc.jpg?v=1693984561",
        laptopName: "Machenike L15A Gen 12 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/files/15-Air-i7_-6.jpg?v=1693984574",
            image2: "https://global.machenike.com/cdn/shop/files/37b8626cbb2c76fb3dbb4987ef7dd10b_527eee44-d854-4a9b-ad8a-d6b0af97efc3.jpg?v=1693984582",
            image3: "https://global.machenike.com/cdn/shop/files/92134190ffe60b171dfa0b2d055847f4_3e5c4d3a-671d-49d6-8080-4c0ba45085c8.jpg?v=1693984582",
            image4: "https://global.machenike.com/cdn/shop/files/PCIE3.0.jpg?v=1693984582",
            image5: "https://global.machenike.com/cdn/shop/files/dae766e31a1abf3ec93b6c5009aecb29_9634bc4f-f5cb-418f-8a4c-1410fb7944c0.jpg?v=1693984575"
        },
        laptopPrice: "PHP 49,000.00",
        laptopRating: "5",
        laptopSold: "31",
        laptopSpecs: {
            cpu: "i5-12650H",
            gpu: "RTX 4050",
            memory: "16G RAM + 512G SSD",
            brandName: "Machenike",
            series: "Gaming",
            modelNumber: "Light-15 Air (L15A)",
            type: "Laptop",
            graphicsCardModel: "RTX40series",
            cpuBrandModel: "Intel 12th Gen Processor",
            operatingSystem: "Windows 11"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/16pro_800X800_0003__5.jpg?v=1681985245",
        laptopName: "Machenike L16 Pro Gen 13 Intel (16”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/a148855d88529891d272f1af92643ead_b56df3d8-c212-4838-b136-3825c8386eff.jpg?v=1681985245",
            image2: "https://global.machenike.com/cdn/shop/products/0966f9e867a1e9ef43a2abc2546de4dc.jpg?v=1681985245",
            image3: "https://global.machenike.com/cdn/shop/products/4060.jpg?v=1681985245",
            image4: "https://global.machenike.com/cdn/shop/products/92134190ffe60b171dfa0b2d055847f4.jpg?v=1681985245",
            image5: "https://global.machenike.com/cdn/shop/products/dae766e31a1abf3ec93b6c5009aecb29.jpg?v=1681985245"
        },
        laptopPrice: "PHP 89,000.00",
        laptopRating: "5",
        laptopSold: "12",
        laptopSpecs: {
            cpu: "i9-13900HX",
            gpu: "RTX 4090",
            memory: "64G RAM + 2T SSD",
            brandName: "Machenike",
            series: "Gaming",
            modelNumber: " L16 Pro",
            type: "Laptop",
            graphicsCardModel: "RTX40series",
            cpuBrandModel: "Intel 13th Gen Processor",
            operatingSystem: "Windows 11"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/15_800X800-1234_e59169eb-9f2c-45ca-97f0-9d1deba123e7_750x.jpg?v=1681983436",
        laptopName: "Machenike L15 Gen 13 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/15-1.jpg?v=1681983436",
            image2: "https://global.machenike.com/cdn/shop/products/15-3.1.jpg?v=1681983436",
            image3: "https://global.machenike.com/cdn/shop/products/15-3.2.jpg?v=1681983436",
            image4: "https://global.machenike.com/cdn/shop/products/15-6.jpg?v=1681983436",
            image5: "https://global.machenike.com/cdn/shop/products/15-5.jpg?v=1681983436"
        },
        laptopPrice: "PHP 51,000.00",
        laptopRating: "5",
        laptopSold: "27",
        laptopSpecs: {
            cpu: "i5-13500H",
            gpu: "RTX 4050",
            memory: "16G RAM + 512G SSD",
            brandName: "Machenike",
            series: "Gaming",
            modelNumber: "L15",
            type: "Laptop",
            graphicsCardModel: "RTX40series",
            cpuBrandModel: "Intel 13th Gen Processor",
            operatingSystem: "Windows 11"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/8_e1111653-d646-4ee6-806c-422858c7ff3a_750x.jpg?v=1679452988",
        laptopName: "Machenike S16 Gen 12 Intel (15.6”) Gaming Laptop - Orange",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/1_212a96e0-e3cb-46a6-b410-904b19a92339_750x.png?v=1679452988",
            image2: "https://global.machenike.com/cdn/shop/products/3_87d6b396-555d-41f7-9859-1679e163c04f_750x.png?v=1679452988",
            image3: "https://global.machenike.com/cdn/shop/products/9095c418edab3eb1070530f4b11900bb_750x.png?v=1679452988",
            image4: "https://global.machenike.com/cdn/shop/products/DSC09329_750x.jpg?v=1679452988",
            image5: "https://global.machenike.com/cdn/shop/files/dae766e31a1abf3ec93b6c5009aecb29_9634bc4f-f5cb-418f-8a4c-1410fb7944c0.jpg?v=1693984575"
        },
        laptopPrice: "PHP 70,000.00",
        laptopRating: "5",
        laptopSold: "9",
        laptopSpecs: {
            cpu: "i9-12900H",
            gpu: "RTX 3060",
            memory: "16G RAM + 512G SSD",
            brandName: "Machenike",
            series: "Gaming",
            modelNumber: "S16",
            type: "Laptop",
            graphicsCardModel: "RTX30series",
            cpuBrandModel: "Intel 12th Gen Processor",
            operatingSystem: "Windows 11"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/030000_750x.jpg?v=1674879562",
        laptopName: "Machenike L15A Gen 12 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/9_750x.png?v=1674879557",
            image2: "https://global.machenike.com/cdn/shop/products/7_f1d01e85-4f19-43b8-b9cb-1d64a5230d9e_750x.png?v=1674879562",
            image3: "https://global.machenike.com/cdn/shop/products/1_cc5510e6-5100-42c4-bd5e-ef9b2ad25e2e_750x.png?v=1674879560",
            image4: "https://global.machenike.com/cdn/shop/products/2_f434c20a-b142-49b3-9af5-ce65eec719f7_750x.jpg?v=1674879554",
            image5: "https://global.machenike.com/cdn/shop/products/1_0479ff54-6688-44e3-b7d6-ae8676af6912_750x.jpg?v=1674879555"
        },
        laptopPrice: "PHP 51,000.00",
        laptopRating: "5",
        laptopSold: "28",
        laptopSpecs: {
            cpu: "i7-12700H",
            gpu: "RTX 3060",
            memory: "16G RAM + 512G SSD",
            brandName: "Machenike",
            series: "Gaming",
            modelNumber: "S16",
            type: "Laptop",
            graphicsCardModel: "RTX30series",
            cpuBrandModel: "Intel 12th Gen Processor",
            operatingSystem: "Windows 11"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/800X800-__0005_0_81ad159c-adfe-4b2d-8f96-82ecc149348f.png?v=1674032716",
        laptopName: "Machenike L15C Gen 12 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/DSC06216.jpg?v=1674036105",
            image2: "https://global.machenike.com/cdn/shop/products/DSC06219.jpg?v=1674036104",
            image3: "https://global.machenike.com/cdn/shop/products/DSC06221_750x.jpg?v=1674036105",
            image4: "https://global.machenike.com/cdn/shop/products/DSC06222_750x.jpg?v=1674036103",
            image5: "https://global.machenike.com/cdn/shop/products/DSC06230_750x.jpg?v=1674036104"
        },
        laptopPrice: "PHP 46,500.00",
        laptopRating: "5",
        laptopSold: "7",
        laptopSpecs: {
            cpu: "i7-12700H",
            gpu: "RTX 4050",
            memory: "16G RAM + 512G SSD",
            brandName: "Machenike",
            series: "Gaming",
            modelNumber: "L15C",
            type: "Laptop",
            graphicsCardModel: "RTX30series",
            cpuBrandModel: "Intel 12th Gen Processor",
            operatingSystem: "Windows 11"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/adbd64503fcd5abaff264259d2f44cad.png?v=1669884844",
        laptopName: "Machenike F117-7Plus / L17 Gen 12 Intel (17.3”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/F117-7P-i9-_-3.jpg?v=1669884844",
            image2: "https://global.machenike.com/cdn/shop/products/F117-7P-i9-_-2.jpg?v=1669884844",
            image3: "https://global.machenike.com/cdn/shop/products/3000-1TSSD.jpg?v=1669884844",
            image4: "https://global.machenike.com/cdn/shop/products/2_0f9b5b85-e05c-4815-9ffd-c3f1cf180a24.jpg?v=1669884844",
            image5: "https://global.machenike.com/cdn/shop/products/1_49adf526-32df-464f-96cf-6bbf0e656600.jpg?v=1669884844"
        },
        laptopPrice: "PHP 57,499.00",
        laptopRating: "5",
        laptopSold: "22",
        laptopSpecs: {
            cpu: "i9-12900H",
            gpu: "RTX 3060",
            memory: "16G RAM + 512G SSD",
            brandName: "Machenike",
            series: "Gaming",
            modelNumber: "F117-7Plus / L17 (New model name)",
            type: "Laptop",
            graphicsCardModel: "RTX30series",
            cpuBrandModel: "Intel 12th Gen Processor",
            operatingSystem: "Windows 11"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/15__0014_9_9c330cad-1835-4e4f-867f-ae45f4056b04.png?v=1665395084",
        laptopName: "Machenike L15A Gen 12 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/1_07_05937dc9-9454-4e89-b235-dec3b62abb59_750x.jpg?v=1665395085",
            image2: "https://global.machenike.com/cdn/shop/products/1_06_52712cc4-27e6-4ac2-8864-764814011cb4_750x.jpg?v=1665395085",
            image3: "https://global.machenike.com/cdn/shop/products/1_05_6a6ab7cd-821c-42fe-9ff3-b8789c88cdca_750x.jpg?v=1665395085",
            image4: "https://global.machenike.com/cdn/shop/products/1_02_173a53a2-9f2c-4a58-aa48-27e7b33cef2a_750x.jpg?v=1665395085",
            image5: "https://global.machenike.com/cdn/shop/files/dae766e31a1abf3ec93b6c5009aecb29_9634bc4f-f5cb-418f-8a4c-1410fb7944c0.jpg?v=1693984575"
        },
        laptopPrice: "PHP 49,000.00",
        laptopRating: "5",
        laptopSold: "15",
        laptopSpecs: {
            cpu: "i7-1165G7",
            gpu: "RTX 4050",
            memory: "16G RAM + 512G SSD",
            brandName: "Machenike",
            series: "Machcreator",
            modelNumber: "Machcreator A",
            type: "Ultrabook",
            graphicsCardModel: "Intel® Iris® Xe Graphics",
            cpuBrandModel: "Intel 11th Gen Processor",
            operatingSystem: "Windows 11"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/3.png?v=1646361566",
        laptopName: "Machenike L15A Gen 12 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/17_-1.jpg?v=1661591338",
            image2: "https://global.machenike.com/cdn/shop/products/17_-2.jpg?v=1661591338",
            image3: "https://global.machenike.com/cdn/shop/products/17_-3.jpg?v=1661591338",
            image4: "https://global.machenike.com/cdn/shop/products/17_-4.jpg?v=1661591338",
            image5: "https://global.machenike.com/cdn/shop/products/hqdefault_8832cbca-5a1e-4c19-846d-7f46db183559.jpg?v=1661591336"
        },
        laptopPrice: "PHP 63,000.00",
        laptopRating: "5",
        laptopSold: "20",
        laptopSpecs: {
            cpu: "i9-12900H",
            gpu: "RTX 3080 Ti",
            memory: "16G DDR5 RAM + 512G PCIE4.0 SSD + 1T HDD",
            brandName: "Machenike",
            series: "Gaming",
            modelNumber: " S17",
            type: "Laptop",
            graphicsCardModel: "RTX30series",
            cpuBrandModel: "Intel 12th Gen Processor",
            operatingSystem: "Windows 11"
        }
    },
    {
        laptopId: Math.floor((Math.random() * Date.now())),
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/9_0008_1.png?v=1636718872",
        laptopName: "Machenike T58-VA Gen 11 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/1_8b216809-eb35-4e11-8be4-3da2181b227a.jpg?v=1661591682",
            image2: "https://global.machenike.com/cdn/shop/products/2_29f4b39c-0950-4d4f-be0b-069cf21af82c.jpg?v=1661591682",
            image3: "https://global.machenike.com/cdn/shop/products/hqdefault_5066b5da-e15f-44a7-9ad8-133d1c9fdfc0.jpg?v=1661591679",
            image4: "https://global.machenike.com/cdn/shop/files/PCIE3.0.jpg?v=1693984582",
            image5: "https://global.machenike.com/cdn/shop/files/dae766e31a1abf3ec93b6c5009aecb29_9634bc4f-f5cb-418f-8a4c-1410fb7944c0.jpg?v=1693984575"
        },
        laptopPrice: "PHP 41,000.00",
        laptopRating: "4",
        laptopSold: "55",
        laptopSpecs: {
            cpu: "i5-12650H",
            gpu: "RTX 4050",
            memory: "32GB (16GB*2) + 512GB SSD + 2T HDD",
            brandName: "Machenike",
            series: "Gaming",
            modelNumber: "T58-VA",
            type: "Laptop",
            graphicsCardModel: "GTX16series",
            cpuBrandModel: "Intel 11th Gen Processor",
            operatingSystem: "Windows 11"
        }
    },
];

const filterProducts = [
    {
        filterTitle: "Graphics Card Series",
        filterOptions: {
            option1: "GTX 1650",
            option2: "GTX 1650 Ti",
            option3: "RTX 2060",
            option4: "RTX 2070",
            option5: "RTX 2080 Ti",
            option6: "RTX 3060",
            option7: "RTX 3070",
            option8: "RTX 3080 Ti",
            option9: "RTX 4050",
            option10: "RTX 4060",
            option11: "RTX 4070",
            option12: "RTX 4080",
            option13: "RTX 4090",
            option14: "AMD Ryzen 7",
        }
    },
    {
        filterTitle: "System Memory",
        filterOptions: {
            option1: "4GB RAM",
            option2: "8GB RAM",
            option3: "16GB RAM",
            option4: "32GB RAM",
            option5: "64GB RAM",
        }
    },
    {
        filterTitle: "Storage Type",
        filterOptions: {
            option1: "SSD",
            option2: "SSD + HDD",
            option3: "SSHD"
        }
    },
    {
        filterTitle: "Operating System",
        filterOptions: {
            option1: "Windows",
            option2: "Windows 10",
            option3: "Windows 11",
            option4: "Linux",
            option5: "Chrome OS",
        }
    },
    {
        filterTitle: "Ports",
        filterOptions: {
            option1: "HDMI",
            option2: "USB 3.0 (3.1 Gen 1) Type A",
            option3: "USB 2.0",
            option4: "Micro USB 3.0",
            option5: "Ethernet LAN (RJ-45)",
        }
    },
];


// FUNCTION
for (let i = 0; i < laptopProducts.length; i++) {
    const productLaptop = laptopProducts[i];

    const productLaptopElement = document.createElement("div");
    productLaptopElement.className = "col-6 col-lg-4 mb-4";

    productLaptopElement.innerHTML = `
        <div class="card bg-white rounded-0">
            <img src="${productLaptop.laptopImgUrl}" class="card-img-top" alt="${productLaptop.laptopName}">
            <div class="card-body px-3">
                <p class="card-text m-0">${productLaptop.laptopName}</p>
                <p class="card-text fw-bold text-success m-0">${productLaptop.laptopPrice}</p>
                <div class="d-flex justify-content-between mb-2">
                    <p class="card-text text-success m-0 fw-bold"><i class="bi bi-star-fill text-warning me-2"></i>${productLaptop.laptopRating} Ratings</p>
                    <p class="card-text text-success m-0">${productLaptop.laptopSold} Sold</p>
                </div>
                <div class="row g-2">
                    <div class="col-12 col-lg-7">
                        <button type="button" id="${productLaptop.laptopId}" class="viewDetails btn btn-success w-100" data-bs-toggle="modal" data-bs-target="#productDetailsModal"><i class="bi bi-eye me-2"></i>View Details</button>
                    </div>
                    <div class="col-12 col-lg-7">
                        <button type="button" id="${productLaptop.laptopId}" class="wishListButton btn btn-success w-100" data-bs-dismiss="modal"><i class="bi bi-bookmark-heart-fill me-2"></i>Add to Wish Lists</button>
                    </div>
                    <div class="col-12 col-lg-7">
                        <button type="button" class="btn btn-success w-100" data-bs-dismiss="modal"><i class="bi bi-cart-plus-fill me-2"></i>Add to Cart</button>
                    </div>
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
                        <p class="lead fw-bold">Quantity: </p>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                            <button id="minusButton" onclick="minusQuantity()" type="button" class="btn btn-success w-25"><i class="bi bi-dash"></i></button>
                            <input type="text" class="form-control w-25 text-center" id="quantity" value="1">
                            <button id="addButton" onclick="addQuantity()" type="button" class="btn btn-success w-25"><i class="bi bi-plus"></i></button>
                        </div>
                        <button class="btn btn-success w-25">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    laptopProductContainer.appendChild(productLaptopElement);
};

// for (let i = 0; i < wishListButtons.length; i++) {
//     wishListButtons[i].addEventListener("click", () => {

//         const laptopId = wishListButtons[i].parentElement.parentElement.parentElement.parentElement.className;
//         const selectedLaptop = laptopProducts.find(laptop => laptop.laptopId == laptopId);
//         console.log(laptopId)
//     });
// };





for (let i = 0; i < viewDetails.length; i++) {
    viewDetails[i].addEventListener("click", () => {
        const laptopId = viewDetails[i].id;
        const selectedLaptop = laptopProducts.find(laptop => laptop.laptopId == laptopId);

        const modalTitle = document.getElementById("exampleModalLabel");
        const modalBody = document.getElementById("modalBody");
        
        modalTitle.innerHTML = selectedLaptop.laptopName
        modalBody.innerHTML = `
        <div id="carouselLaptopIndicators" class="carousel slide">
            <div id="carouselInner" class="carousel-inner">
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
                <div class="carousel-item">
                    <img src="${selectedLaptop.laptopImages.image5}" class="img-fluid" alt="...">
                </div>
            </div>
            <div class="carousel-indicators position-relative m-0">
                <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style="height: 50px; width: 50px; background: url('${selectedLaptop.laptopImgUrl}') no-repeat center center/cover;"></button>
                <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="1" aria-label="Slide 2"style="height: 50px; width: 50px; background: url('${selectedLaptop.laptopImages.image1}') no-repeat center center/ cover;"></button>
                <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="2" aria-label="Slide 3" style="height: 50px; width: 50px; background: url('${selectedLaptop.laptopImages.image2}') no-repeat center center/ cover;"></button>
                <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="3" aria-label="Slide 4" style="height: 50px; width: 50px; background: url('${selectedLaptop.laptopImages.image3}') no-repeat center center/ cover;"></button>
                <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="4" aria-label="Slide 5" style="height: 50px; width: 50px; background: url('${selectedLaptop.laptopImages.image4}') no-repeat center center/ cover;"></button>
                <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="5" aria-label="Slide 6" style="height: 50px; width: 50px; background: url('${selectedLaptop.laptopImages.image5}') no-repeat center center/ cover;"></button>
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

        <div class="col-12 col-lg-12">
            <h3><i class="bi bi-list-task me-2"></i>Descriptions</h3>
            <h6>Quick Specs</h6>
            <ul>
                <li>CPU: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.cpu}</span></li>
                <li>GPU: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.gpu}</span></li>
                <li>Memory: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.memory}</span></li>
                <li>CPU Brand Model: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.cpuBrandModel}</span></li>
                <li>Graphics Card Model: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.graphicsCardModel}</span></li>
                <li>Model Number: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.modelNumber}</span></li>
                <li>Operating System: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.operatingSystem}</span></li>
                <li>Brand Name: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.brandName}</span></li>
                <li>Type: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.type}</span></li>
                <li>Series: <span class="fw-bold text-primary">${selectedLaptop.laptopSpecs.series}</span></li>
            </ul>
        </div>
        
        `
    });
};


for (let i = 0; i < filterProducts.length; i++) {
    const filterProduct = filterProducts[i];
    const filterProductElement = document.createElement("div");
    filterProductElement.className = "pb-3"
    filterProductElement.innerHTML = `
        <h6 class="fw-bold">${filterProduct.filterTitle}</h6>
    `;

    for (const optionKey in filterProduct.filterOptions) {
        const optionValue = filterProduct.filterOptions[optionKey];
        const optionElement = document.createElement("div");
        optionElement.innerHTML = `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${i}${optionKey}">
                <label class="form-check-label" for="flexCheckDefault${i}${optionKey}">
                    ${optionValue}
                </label>
            </div>
        `;
        filterProductElement.appendChild(optionElement);
    };

    filterContainer.appendChild(filterProductElement);
};


let quantity = 1; // Initialize quantity here, outside of the functions
productQuantity.value = quantity;

function addQuantity() {
    // Increase the quantity by 1
    quantity += 1;

    // Update the quantity displayed in the HTML
    const productQuantity = document.getElementById("quantity");
    productQuantity.value = quantity;

    // You may want to remove any "disabled" class from the minus button here
    const minusButton = document.getElementById("minusButton");
    minusButton.classList.remove("disabled");
}

function minusQuantity() {
    if (quantity <= 0) {
        // Prevent negative values for quantity
        return;
    }

    // Decrease the quantity by 1
    quantity -= 1;

    // Update the quantity displayed in the HTML
    const productQuantity = document.getElementById("quantity");
    productQuantity.value = quantity;

    if (quantity <= 1) {
        
        // If quantity is now 0 or less, add the "disabled" class to the minus button
        const minusButton = document.getElementById("minusButton");
        minusButton.classList.add("disabled");
    }
}