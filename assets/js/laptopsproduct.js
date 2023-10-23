// VARIABLE
const laptopProductContainer = document.getElementById("laptopProductContainer");
const wishListBtns = document.getElementsByClassName("wishListBtn");
const laptopProducts = [
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
    {
        laptopImgUrl: "https://global.machenike.com/cdn/shop/files/1-0325.jpg?v=1697609403",
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
                    <button class="btn btn-success">View Details</button>
                    <button class="btn wishListBtn border-0"><i class="bi bi-heart-fill text-danger"></i></button>
                </div>
            </div>
        </div>
    `;

    laptopProductContainer.appendChild(productLaptopElement);
};


for (let i = 0; i < wishListBtns.length; i++) {
    wishListBtns[i].addEventListener("click", () => {

        Swal.fire({
            icon: "success",
            title: "This item is added to your wishlist",
            timer: 1500
        })
    });
}





