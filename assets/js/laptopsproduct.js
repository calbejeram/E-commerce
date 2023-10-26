// VARIABLE
const laptopProductContainer = document.getElementById("laptopProductContainer");
const filterContainer = document.getElementById("filterContainer");
const wishListButtons = document.getElementsByClassName("wishListButton");
const addToCartButtons = document.getElementsByClassName("addToCartButton");
const viewDetails = document.getElementsByClassName("viewDetails");
const wishListCountMobile = document.getElementById("wishListCountMobile");
const wishListCountLarge = document.getElementById("wishListCountLarge");
const cartCountMobile = document.getElementById("cartCountMobile");
const cartCountLarge = document.getElementById("cartCountLarge");
const carouselInner = document.getElementById("carouselInner");
const sort = document.querySelectorAll("#bestSeller, #priceLowToHigh, #priceHighToLow");

// Wish List Count
const wishLists = localStorage.getItem("ProductWishLists") ? JSON.parse(localStorage.getItem("ProductWishLists")) : []
wishListCountMobile.innerHTML = wishLists.length;
wishListCountLarge.innerHTML = wishLists.length;

// Cart List Count
const cart = localStorage.getItem("ProductCartList") ? JSON.parse(localStorage.getItem("ProductCartList")) : []
cartCountMobile.innerHTML = cart.length;
cartCountLarge.innerHTML = cart.length;

// Dummy Product Data
const laptopProducts = [
    {
        laptopId: 1,
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
        laptopName: "Machenike L16 Gen 13 Intel (16”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/files/2-0325.jpg?v=1697609402",
            image2: "https://global.machenike.com/cdn/shop/files/5-0325.jpg?v=1697609404",
            image3: "https://global.machenike.com/cdn/shop/files/8-0325.jpg?v=1697609404",
            image4: "https://global.machenike.com/cdn/shop/files/9-0325.jpg?v=1697609403",
            image5: "https://global.machenike.com/cdn/shop/files/10-0325.jpg?v=1697609403"
        },
        laptopPrice: "65,000.00",
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
        laptopId: 2,
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/16air_-800_0000_8.jpg?v=1693986456",
        laptopName: "Machenike L16A Gen Ryzen 7000 AMD (16”) Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/files/3._750x.jpg?v=1693986452",
            image2: "https://global.machenike.com/cdn/shop/files/1.CPU_750x.jpg?v=1693986456",
            image3: "https://global.machenike.com/cdn/shop/files/1dc77b0b0edb7028e12570cb177ca71a_750x.jpg?v=1693986452",
            image4: "https://global.machenike.com/cdn/shop/files/16air-1a-_-7_750x.jpg?v=1693986452",
            image5: "https://global.machenike.com/cdn/shop/files/0._750x.jpg?v=1693986456"
        },
        laptopPrice: "75,999.00",
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
        laptopId: 3,
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/2_9ef49445-10a9-470a-aeab-d99585909cbc.jpg?v=1693984561",
        laptopName: "Machenike L15A Gen 12 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/files/15-Air-i7_-6.jpg?v=1693984574",
            image2: "https://global.machenike.com/cdn/shop/files/37b8626cbb2c76fb3dbb4987ef7dd10b_527eee44-d854-4a9b-ad8a-d6b0af97efc3.jpg?v=1693984582",
            image3: "https://global.machenike.com/cdn/shop/files/92134190ffe60b171dfa0b2d055847f4_3e5c4d3a-671d-49d6-8080-4c0ba45085c8.jpg?v=1693984582",
            image4: "https://global.machenike.com/cdn/shop/files/PCIE3.0.jpg?v=1693984582",
            image5: "https://global.machenike.com/cdn/shop/files/dae766e31a1abf3ec93b6c5009aecb29_9634bc4f-f5cb-418f-8a4c-1410fb7944c0.jpg?v=1693984575"
        },
        laptopPrice: "49,000.00",
        laptopRating: "5",
        laptopSold: "41",
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
        laptopId: 4,
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/16pro_800X800_0003__5.jpg?v=1681985245",
        laptopName: "Machenike L16 Pro Gen 13 Intel (16”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/a148855d88529891d272f1af92643ead_b56df3d8-c212-4838-b136-3825c8386eff.jpg?v=1681985245",
            image2: "https://global.machenike.com/cdn/shop/products/0966f9e867a1e9ef43a2abc2546de4dc.jpg?v=1681985245",
            image3: "https://global.machenike.com/cdn/shop/products/4060.jpg?v=1681985245",
            image4: "https://global.machenike.com/cdn/shop/products/92134190ffe60b171dfa0b2d055847f4.jpg?v=1681985245",
            image5: "https://global.machenike.com/cdn/shop/products/dae766e31a1abf3ec93b6c5009aecb29.jpg?v=1681985245"
        },
        laptopPrice: "89,000.00",
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
        laptopId: 5,
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/15_800X800-1234_e59169eb-9f2c-45ca-97f0-9d1deba123e7_750x.jpg?v=1681983436",
        laptopName: "Machenike L15 Gen 13 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/15-1.jpg?v=1681983436",
            image2: "https://global.machenike.com/cdn/shop/products/15-3.1.jpg?v=1681983436",
            image3: "https://global.machenike.com/cdn/shop/products/15-3.2.jpg?v=1681983436",
            image4: "https://global.machenike.com/cdn/shop/products/15-6.jpg?v=1681983436",
            image5: "https://global.machenike.com/cdn/shop/products/15-5.jpg?v=1681983436"
        },
        laptopPrice: "51,000.00",
        laptopRating: "5",
        laptopSold: "44",
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
        laptopId: 6,
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/8_e1111653-d646-4ee6-806c-422858c7ff3a_750x.jpg?v=1679452988",
        laptopName: "Machenike S16 Gen 12 Intel (15.6”) Gaming Laptop - Orange",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/1_212a96e0-e3cb-46a6-b410-904b19a92339_750x.png?v=1679452988",
            image2: "https://global.machenike.com/cdn/shop/products/3_87d6b396-555d-41f7-9859-1679e163c04f_750x.png?v=1679452988",
            image3: "https://global.machenike.com/cdn/shop/products/9095c418edab3eb1070530f4b11900bb_750x.png?v=1679452988",
            image4: "https://global.machenike.com/cdn/shop/products/DSC09329_750x.jpg?v=1679452988",
            image5: "https://global.machenike.com/cdn/shop/files/dae766e31a1abf3ec93b6c5009aecb29_9634bc4f-f5cb-418f-8a4c-1410fb7944c0.jpg?v=1693984575"
        },
        laptopPrice: "70,000.00",
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
        laptopId: 7,
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/030000_750x.jpg?v=1674879562",
        laptopName: "Machenike L15A Gen 12 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/9_750x.png?v=1674879557",
            image2: "https://global.machenike.com/cdn/shop/products/7_f1d01e85-4f19-43b8-b9cb-1d64a5230d9e_750x.png?v=1674879562",
            image3: "https://global.machenike.com/cdn/shop/products/1_cc5510e6-5100-42c4-bd5e-ef9b2ad25e2e_750x.png?v=1674879560",
            image4: "https://global.machenike.com/cdn/shop/products/2_f434c20a-b142-49b3-9af5-ce65eec719f7_750x.jpg?v=1674879554",
            image5: "https://global.machenike.com/cdn/shop/products/1_0479ff54-6688-44e3-b7d6-ae8676af6912_750x.jpg?v=1674879555"
        },
        laptopPrice: "51,000.00",
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
        laptopId: 8,
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/800X800-__0005_0_81ad159c-adfe-4b2d-8f96-82ecc149348f.png?v=1674032716",
        laptopName: "Machenike L15C Gen 12 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/DSC06216.jpg?v=1674036105",
            image2: "https://global.machenike.com/cdn/shop/products/DSC06219.jpg?v=1674036104",
            image3: "https://global.machenike.com/cdn/shop/products/DSC06221_750x.jpg?v=1674036105",
            image4: "https://global.machenike.com/cdn/shop/products/DSC06222_750x.jpg?v=1674036103",
            image5: "https://global.machenike.com/cdn/shop/products/DSC06230_750x.jpg?v=1674036104"
        },
        laptopPrice: "46,500.00",
        laptopRating: "5",
        laptopSold: "19",
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
        laptopId: 9,
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/adbd64503fcd5abaff264259d2f44cad.png?v=1669884844",
        laptopName: "Machenike F117-7Plus / L17 Gen 12 Intel (17.3”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/F117-7P-i9-_-3.jpg?v=1669884844",
            image2: "https://global.machenike.com/cdn/shop/products/F117-7P-i9-_-2.jpg?v=1669884844",
            image3: "https://global.machenike.com/cdn/shop/products/3000-1TSSD.jpg?v=1669884844",
            image4: "https://global.machenike.com/cdn/shop/products/2_0f9b5b85-e05c-4815-9ffd-c3f1cf180a24.jpg?v=1669884844",
            image5: "https://global.machenike.com/cdn/shop/products/1_49adf526-32df-464f-96cf-6bbf0e656600.jpg?v=1669884844"
        },
        laptopPrice: "57,499.00",
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
        laptopId: 10,
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/15__0014_9_9c330cad-1835-4e4f-867f-ae45f4056b04.png?v=1665395084",
        laptopName: "Machenike L15A Gen 12 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/1_07_05937dc9-9454-4e89-b235-dec3b62abb59_750x.jpg?v=1665395085",
            image2: "https://global.machenike.com/cdn/shop/products/1_06_52712cc4-27e6-4ac2-8864-764814011cb4_750x.jpg?v=1665395085",
            image3: "https://global.machenike.com/cdn/shop/products/1_05_6a6ab7cd-821c-42fe-9ff3-b8789c88cdca_750x.jpg?v=1665395085",
            image4: "https://global.machenike.com/cdn/shop/products/1_02_173a53a2-9f2c-4a58-aa48-27e7b33cef2a_750x.jpg?v=1665395085",
            image5: "https://global.machenike.com/cdn/shop/files/dae766e31a1abf3ec93b6c5009aecb29_9634bc4f-f5cb-418f-8a4c-1410fb7944c0.jpg?v=1693984575"
        },
        laptopPrice: "49,000.00",
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
        laptopId: 11,
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/3.png?v=1646361566",
        laptopName: "Machenike L15A Gen 12 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/17_-1.jpg?v=1661591338",
            image2: "https://global.machenike.com/cdn/shop/products/17_-2.jpg?v=1661591338",
            image3: "https://global.machenike.com/cdn/shop/products/17_-3.jpg?v=1661591338",
            image4: "https://global.machenike.com/cdn/shop/products/17_-4.jpg?v=1661591338",
            image5: "https://global.machenike.com/cdn/shop/products/hqdefault_8832cbca-5a1e-4c19-846d-7f46db183559.jpg?v=1661591336"
        },
        laptopPrice: "63,000.00",
        laptopRating: "5",
        laptopSold: "20",
        laptopSpecs: {
            cpu: "i9-12900H",
            gpu: "RTX 3080 Ti",
            memory: "16G DDR5 RAM + 512G SSD + 1T HDD",
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
        laptopId: 12,
        laptopImgUrl: "https://global.machenike.com/cdn/shop/products/9_0008_1.png?v=1636718872",
        laptopName: "Machenike T58-VA Gen 11 Intel (15.6”) Gaming Laptop",
        laptopImages: {
            image1: "https://global.machenike.com/cdn/shop/products/1_8b216809-eb35-4e11-8be4-3da2181b227a.jpg?v=1661591682",
            image2: "https://global.machenike.com/cdn/shop/products/2_29f4b39c-0950-4d4f-be0b-069cf21af82c.jpg?v=1661591682",
            image3: "https://global.machenike.com/cdn/shop/products/hqdefault_5066b5da-e15f-44a7-9ad8-133d1c9fdfc0.jpg?v=1661591679",
            image4: "https://global.machenike.com/cdn/shop/files/PCIE3.0.jpg?v=1693984582",
            image5: "https://global.machenike.com/cdn/shop/files/dae766e31a1abf3ec93b6c5009aecb29_9634bc4f-f5cb-418f-8a4c-1410fb7944c0.jpg?v=1693984575"
        },
        laptopPrice: "41,000.00",
        laptopRating: "4",
        laptopSold: "33",
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

// Dummy Product Filter Data
const filterProducts = [
    {
        filterTitle: "Graphics Card Series",
        filterOptions: {
            option1: "RTX 2080 Ti",
            option2: "RTX 3060",
            option3: "RTX 3070",
            option4: "RTX 3080 Ti",
            option5: "RTX 4050",
            option6: "RTX 4060",
            option7: "RTX 4070",
            option8: "RTX 4080",
            option9: "RTX 4090",
            option10: "AMD Ryzen 7",
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

// Setting Active class to sort buttons
function setActiveClass() {
    const setActive = (id) => {
        sort.forEach(item => {
            item === id ? item.classList.add("active") : item.classList.remove("active");
        });
    };
    
    sort.forEach(item => {
        item.addEventListener("click", () => {
            setActive(item);
            if (item.innerHTML === "Best Seller") {
                laptopProductContainer.innerHTML = "";
                const bestSellerProducts = laptopProducts.slice().sort((a, b) => b.laptopSold - a.laptopSold);
                renderLaptopProducts(bestSellerProducts);
                addToWishList(wishListButtons);
                addToCart(addToCartButtons);
                addedToWishList(wishListButtons);
                addedToCart(addToCartButtons);
                renderModalDetails(viewDetails);
            } else if (item.innerHTML === "Price Low to High") {
                laptopProductContainer.innerHTML = "";
                laptopProducts.sort((a, b) => parseFloat(a.laptopPrice.replace(/,/g, '')) - parseFloat(b.laptopPrice.replace(/,/g, '')));
                renderLaptopProducts(laptopProducts);
                addToWishList(wishListButtons);
                addToCart(addToCartButtons);
                addedToWishList(wishListButtons);
                addedToCart(addToCartButtons);
                renderModalDetails(viewDetails);
            } else {
                laptopProductContainer.innerHTML = "";
                laptopProducts.sort((a, b) => parseFloat(b.laptopPrice.replace(/,/g, '')) - parseFloat(a.laptopPrice.replace(/,/g, '')));
                renderLaptopProducts(laptopProducts);
                addToWishList(wishListButtons);
                addToCart(addToCartButtons);
                addedToWishList(wishListButtons);
                addedToCart(addToCartButtons);
                renderModalDetails(viewDetails);
            }
        })
    });
}

setActiveClass();

// Product Card and Product Pop Up Modal
function renderLaptopProducts(laptopProducts) {
    for (let i = 0; i < laptopProducts.length; i++) {
        const productLaptop = laptopProducts[i];
    
        const productLaptopElement = document.createElement("div");
        productLaptopElement.className = "col-6 col-lg-4 mb-4";
    
        productLaptopElement.innerHTML = `
            <div class="card bg-white rounded-0 p-0">
                <img src="${productLaptop.laptopImgUrl}" class="card-img-top" alt="${productLaptop.laptopName}">
                <div class="card-body px-3">
                    <p class="card-text m-0 fw-bold">${productLaptop.laptopName}</p>
                    <div>
                        <p class="m-0 small">${productLaptop.laptopSpecs.cpu}</p>
                        <p class="m-0 small">${productLaptop.laptopSpecs.gpu}</p>
                        <p class="m-0 small">${productLaptop.laptopSpecs.memory}</p>
                    </div>
                    <p class="card-text fw-bold text-success m-0 lead">₱ ${productLaptop.laptopPrice}</p>
                    <div class="d-flex flex-column flex-lg-row justify-content-between mb-2">
                        <p class="card-text text-success m-0 fw-bold">
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                        </p>
                        <p class="card-text text-success m-0 fw-bold">${productLaptop.laptopSold} <i class="bi bi-check-circle-fill text-success"></i> Sold</p>
                    </div>
                    <div class="row g-2">
                        <div class="col-12 col-lg-8">
                            <button type="button" id="${productLaptop.laptopId}" class="viewDetails btn btn-success w-100" data-bs-toggle="modal" data-bs-target="#productDetailsModal">View Details</button>
                        </div>
                        <div class="col-6 col-lg-2">
                            <button type="button" id="${productLaptop.laptopId}" class="wishListButton btn w-100"><i class="bi bi-heart me-2 me-lg-0" title="Add to Wish Lists"></i><span class="d-lg-none">Add to Wish Lists</span></button>
                        </div>
                        <div class="col-6 col-lg-2">
                            <button type="button" id="${productLaptop.laptopId}" class="addToCartButton btn w-100"><i class="bi bi-cart-plus me-2 me-lg-0" title="Add to Cart"></i><span class="d-lg-none">Add to Cart</span></button>
                        </div>
                    </div>    
                </div>
            </div>
    
            <!-- Modal -->
            <div class="modal fade" id="productDetailsModal">
                <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable ">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel"></h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div id="modalBody" class="modal-body">
    
                        </div>
                        <div class="modal-footer">
                            <p>Quantity: </p>
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button id="minusButton" onclick="minusQuantity()" type="button" class="btn btn-success w-25"><i class="bi bi-dash"></i></button>
                                <span class="px-3 py-2 text-center" id="quantity"></span>
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
}

renderLaptopProducts(laptopProducts);


// Adding Product to Product Wish List Local Storage
function addToWishList(wishListButtons) {
    for (let i = 0; i < wishListButtons.length; i++) {
        wishListButtons[i].addEventListener("click", () => {
    
            const laptopId = wishListButtons[i].id;
            const selectedLaptop = laptopProducts.find(laptop => laptop.laptopId == laptopId);
            const productWishListArray = JSON.parse(localStorage.getItem("ProductWishLists")) || [];
            
            
            if (productWishListArray.some(item => item.laptopId === selectedLaptop.laptopId)) {
                Swal.fire({
                    title: 'Already in Wish Lists',
                    text: "This item is already added in your wish lists.",
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Remove this item from wish lists'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: 'Removed',
                        text: 'This is item has been removed from your wish lists.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                        });
                        const indexToRemove = productWishListArray.findIndex(item => item.laptopId == laptopId);
                        if (indexToRemove !== -1) {
                            productWishListArray.splice(indexToRemove, 1);
                        }
    
                        localStorage.setItem("ProductWishLists", JSON.stringify(productWishListArray));
                        window.location.reload();
                    };
                  });
            } else {
                Swal.fire({
                    title: 'Add to Wish List?',
                    text: "Are you sure to add this item to your wish lists?",
                    iconHtml: '<i class="bi bi-heart-fill text-danger"></i>',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, add this item.'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: 'Added to your Wish Lists.',
                        text: 'This item is successfully added to your wish lists.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                        });
    
                        productWishListArray.push(selectedLaptop);
                        localStorage.setItem("ProductWishLists", JSON.stringify(productWishListArray));
                        window.location.reload();
                    };
                  });
    
                };
        });
    };
};

addToWishList(wishListButtons);


// Adding Product to Product Cart List Local Storage
function addToCart(addToCartButtons) {
    for (let i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click", () => {
    
            const laptopId = addToCartButtons[i].id;
            const selectedLaptop = laptopProducts.find(laptop => laptop.laptopId == laptopId);
            const productCartArray = JSON.parse(localStorage.getItem("ProductCartList")) || [];
            
            
            if (productCartArray.some(item => item.laptopId === selectedLaptop.laptopId)) {
                Swal.fire({
                    title: 'Already in Cart',
                    text: "This item is already added in your cart.",
                    icon: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Remove this item from cart'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: 'Removed',
                        text: 'This is item has been removed from your cart.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                        });
                        const indexToRemove = productCartArray.findIndex(item => item.laptopId == laptopId);
                        if (indexToRemove !== -1) {
                            productCartArray.splice(indexToRemove, 1);
                        }
    
                        localStorage.setItem("ProductCartList", JSON.stringify(productCartArray));
                        window.location.reload();
                    };
                  });
            } else {
                Swal.fire({
                    title: 'Add to Cart?',
                    text: "Are you sure to add this item to your cart?",
                    iconHtml: '<i class="bi bi-cart-fill text-success"></i>',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, add this item.'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: 'Added to your cart.',
                        text: 'This item is successfully added to your cart.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                        });
    
                        productCartArray.push(selectedLaptop);
                        localStorage.setItem("ProductCartList", JSON.stringify(productCartArray));
                        window.location.reload();
                    };
                  });
    
                };
        });
    };
};

addToCart(addToCartButtons);

// Checking if the Product is already added/selected/removed to the wish list.
function addedToWishList(wishListButtons) {
    for (let i = 0; i < wishListButtons.length; i++) {
        const laptopId = wishListButtons[i].id;
        const selectedLaptop = laptopProducts.find(laptop => laptop.laptopId == laptopId);
        const productWishListArray = JSON.parse(localStorage.getItem("ProductWishLists")) || [];
    
        if (productWishListArray.some(item => item.laptopId === selectedLaptop.laptopId)) {
            wishListButtons[i].innerHTML = `<i class="bi bi-heart-fill text-danger me-2 me-lg-0"></i>`
        } else {
            wishListButtons[i].innerHTML = `<i class="bi bi-heart me-2 me-lg-0"></i>`
        }
    };
};

addedToWishList(wishListButtons);


function addedToCart(addToCartButtons) {
    for (let i = 0; i < addToCartButtons.length; i++) {
        const laptopId = addToCartButtons[i].id;
        const selectedLaptop = laptopProducts.find(laptop => laptop.laptopId == laptopId);
        const productCartArray = JSON.parse(localStorage.getItem("ProductCartList")) || [];
    
        if (productCartArray.some(item => item.laptopId === selectedLaptop.laptopId)) {
            addToCartButtons[i].innerHTML = `<i class="bi bi-cart-check-fill text-success me-2 me-lg-0"></i>`
        } else {
            addToCartButtons[i].innerHTML = `<i class="bi bi-cart-plus me-2 me-lg-0"></i>`
        }
    };
};

addedToCart(addToCartButtons);

// Iputting the Selected/Clicked specific item from the Laptop Products
function renderModalDetails(viewDetails) {
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
                    <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style="height: 80px; width: 80px; background: url('${selectedLaptop.laptopImgUrl}') no-repeat center center/cover;"></button>
                    <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="1" aria-label="Slide 2"style="height: 80px; width: 80px; background: url('${selectedLaptop.laptopImages.image1}') no-repeat center center/ cover;"></button>
                    <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="2" aria-label="Slide 3" style="height: 80px; width: 80px; background: url('${selectedLaptop.laptopImages.image2}') no-repeat center center/ cover;"></button>
                    <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="3" aria-label="Slide 4" style="height: 80px; width: 80px; background: url('${selectedLaptop.laptopImages.image3}') no-repeat center center/ cover;"></button>
                    <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="4" aria-label="Slide 5" style="height: 80px; width: 80px; background: url('${selectedLaptop.laptopImages.image4}') no-repeat center center/ cover;"></button>
                    <button type="button" data-bs-target="#carouselLaptopIndicators" data-bs-slide-to="5" aria-label="Slide 6" style="height: 80px; width: 80px; background: url('${selectedLaptop.laptopImages.image5}') no-repeat center center/ cover;"></button>
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
                <h3>${selectedLaptop.laptopName}</h3>
                <h3 class="text-success fw-bold">₱ ${selectedLaptop.laptopPrice}</h3>
                <p>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                    <i class="bi bi-star-fill text-warning"></i>
                </p>
                <h4><i class="bi bi-list-task me-2"></i>Descriptions</h4>
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
};

renderModalDetails(viewDetails);

// Displaying the Filter Product Title and its Options to its specified parent element
function renderFilterDetails(filterProducts) {
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
}

renderFilterDetails(filterProducts);

// Quantity Button Functionalities: Add and Minus Quantity
const productQuantity = document.getElementById("quantity");
let quantity = 1; 
productQuantity.innerHTML = quantity;

if (true) {
    const minusButton = document.getElementById("minusButton");
    minusButton.classList.add("disabled");
}

function addQuantity() {

    quantity += 1;

    const productQuantity = document.getElementById("quantity");
    productQuantity.innerHTML = quantity;

    const minusButton = document.getElementById("minusButton");
    minusButton.classList.remove("disabled");
}

function minusQuantity() {
    if (quantity <= 0) {
        return;
    }

    quantity -= 1;

    const productQuantity = document.getElementById("quantity");
    productQuantity.innerHTML = quantity;

    if (quantity <= 1) {
        const minusButton = document.getElementById("minusButton");
        minusButton.classList.add("disabled");
    }
};