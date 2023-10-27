// FUNCTIONS
// Render product filter options to page
export function renderProductFilter(filterProductOptions, filterProductContainerMobile, filterProductContainerLarge) {
    for (let i = 0; i < filterProductOptions.length; i++) {
        const filterProductOption = filterProductOptions[i];
        const filterProductContainer = document.createElement("div");
        filterProductContainer.className = "pb-3"
        filterProductContainer.innerHTML = `
            <h6 class="fw-bold">${filterProductOption.filterTitle}</h6>
        `;
    
        for (const optionKey in filterProductOption.filterOptions) {
            const optionValue = filterProductOption.filterOptions[optionKey];
            const optionElement = document.createElement("div");
            optionElement.innerHTML = `
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault${i}${optionKey}">
                    <label class="form-check-label" for="flexCheckDefault${i}${optionKey}">
                        ${optionValue}
                    </label>
                </div>
            `;
            filterProductContainer.appendChild(optionElement);
        };

        const filterProductContainerMobileClone = filterProductContainer.cloneNode(true);
        const filterProductContainerLargeClone = filterProductContainer.cloneNode(true);
    
        filterProductContainerMobile.appendChild(filterProductContainerMobileClone);
        filterProductContainerLarge.appendChild(filterProductContainerLargeClone);
    };
};