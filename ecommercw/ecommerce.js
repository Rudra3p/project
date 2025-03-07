document.addEventListener('DOMContentLoaded', () => {
    const searchOtherButtonContainer = document.getElementById("search_other_button_container");
    const addProductContainerDisplay = document.getElementById("add_product_container_display");
    const addProductContainer = document.getElementById("add_product_container");
    const productCartDisplayButton = document.getElementById("product_cart_display_button");
    const productCartContainer = document.getElementById("product_cart_container");
    const productSeeBuyContainer = document.getElementById("product_see_buy_container");
    const backButton = document.getElementById("back_button");
    const productCartContainerTable = document.getElementById("product_cart_container_table");

    const enterCompanyName = document.getElementById("enter_company_name");
    const enterProductName = document.getElementById("enter_product_name");
    const enterPrice = document.getElementById("enter_price");
    const enterProductImg = document.getElementById("enter_product_img");
    const addThisProduct = document.getElementById("add_this_product");
    const displayAddProduct = document.getElementById("display_add_product");

    const searchBar = document.getElementById("search_bar");
    const productShower = document.getElementById("product_shower");

    let productCartCounter = document.getElementById("product_cart_counter");
    let productCartCounterItrator = 0;
    let totalShowerValue = document.getElementById("total_shower_value");
    let totalShowerValueItrator = 0;

    const displayAddProductLiContainer = document.getElementById("display_add_product_li_container");
    const doneAddThisProduct = document.getElementById("done_add_this_product");
    const products = [];

    const orderConfirmBillContainer = document.getElementById("order_confirm_bill_container");
    const orderConfirmBillTable = document.getElementById("order_confirm_bill_table");
    const orderTotalShowerValue = document.getElementById("order_total_shower_value");
    const totalBuyValueButton = document.getElementById("total_buy_value_button");
    const orderConfirmButton = document.getElementById("order_confirm_button");

    addProductContainerDisplay.addEventListener('click', () => {
        searchOtherButtonContainer.classList.remove("left-[28%]");
        searchOtherButtonContainer.classList.add("left-[90%]");
        addProductContainerDisplay.style.display = "none";
        addProductContainer.style.display = "grid";
        productCartDisplayButton.style.display = "none";
        productCartContainer.classList.add("hidden");
        productSeeBuyContainer.style.display = "none";
        backButton.style.display = "flex";
        searchBar.style.display = "none";
    });

    backButton.addEventListener('click', () => {
        searchOtherButtonContainer.classList.remove("left-[90%]");
        searchOtherButtonContainer.classList.add("left-[28%]");
        addProductContainerDisplay.style.display = "block";
        addProductContainer.style.display = "none";
        productCartDisplayButton.style.display = "block";
        productSeeBuyContainer.style.display = "block";
        backButton.style.display = "none";
        searchBar.style.display = "block";
    });

    productCartDisplayButton.addEventListener('click', () => {
        productCartContainer.classList.remove("hidden");
    });

    document.addEventListener('click', (event) => {
        if (!productCartDisplayButton.contains(event.target) && !productCartContainer.contains(event.target)) {
            productCartContainer.classList.add('hidden');
        }
    });

    addThisProduct.addEventListener('click', () => {
        const enterCompanyNameValue = enterCompanyName.value.trim();
        const enterProductNameValue = enterProductName.value.trim();
        const enterPriceValue = enterPrice.value.trim();

        if (!enterCompanyNameValue) {
            alert("Please enter company name");
            return;
        }
        if (!enterProductNameValue) {
            alert("Please enter product name");
            return;
        }
        if (!enterPriceValue) {
            alert("Please enter price");
            return;
        }
        if (!enterProductImg.files.length) {
            alert("Please upload an image");
            return;
        }

        // Get the image file URL using FileReader (for better compatibility with file inputs)
        const file = enterProductImg.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            const imgUrl = reader.result; // Get the data URL for the image

            products.push({
                comName: enterCompanyName.value,
                ProName: enterProductName.value,
                ProPrice: enterPrice.value,
                ProImg: imgUrl, // Store image URL
            });

            displayAddProduct.style.display = "block";
            const displayAddProductLi = document.createElement("li");

            // Access the last added product from the array
            const lastAddedProduct = products[products.length - 1];

            // Append the new list item with the product details
            displayAddProductLi.innerHTML = `${lastAddedProduct.comName} ${lastAddedProduct.ProName} ${lastAddedProduct.ProPrice}`;
            displayAddProductLiContainer.appendChild(displayAddProductLi);

            enterCompanyName.value = "";
            enterProductName.value = "";
            enterPrice.value = "";
            enterProductImg.value = ""; // Reset image input field

        };
        reader.readAsDataURL(file); // Read the file as a data URL (base64)

        return;
    });

    doneAddThisProduct.addEventListener('click', () => {
        // Handle case when no products are added (display the input values as a fallback)
        if (products.length === 0) {
            const file = enterProductImg.files[0]; // Get the file from the input

            if (!file) {
                alert("Please upload an image.");
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const imgUrl = reader.result; // Get the data URL for the image

                let cartContainer = document.createElement("div");
                cartContainer.classList.add("h-[290px]", "w-[18%]", "flex", "items-center", "justify-flexend", "flex-col", "product", "overflow-hidden");
                cartContainer.id = "cartContainer";
                
                let cartContainerInImgContainer = document.createElement("div");
                cartContainerInImgContainer.classList.add("flex","items-center","justify-center", "bg-[#f5f5f5]", "h-[140px]", "w-full")

                let cartContainerInImg = document.createElement("div");
                cartContainerInImg.style.backgroundImage = `url('${imgUrl}')`;
                cartContainerInImg.classList.add("bg-contain",  "bg-no-repeat", "bg-center", "h-[100%]", "w-[100%]");

                let cartContainerPro = document.createElement("h2");
                cartContainerPro.innerText = enterProductName.value;

                let cartContainerCo = document.createElement("p");
                cartContainerCo.innerText = enterCompanyName.value;

                let cartContainerVal = document.createElement("p");
                cartContainerVal.innerText = `$${enterPrice.value}`;

                let cartContainerAddCart = document.createElement("button");
                cartContainerAddCart.innerText = "Add to Cart";
                cartContainerAddCart.classList.add("h-[30px]", "w-[100px]", "rounded-[5px]", "bg-[#0b9bd8]", "text-white");

                cartContainer.dataset.productName = enterProductName.value;
                cartContainer.dataset.companyName = enterCompanyName.value;
                cartContainer.dataset.productPrice = enterPrice.value;

                let productCartContainerTableRow = document.createElement("tr");
                let countIteration = 0;

                let removeCartProductTd = document.createElement("td");
                let removeCartProduct = document.createElement("button");
                removeCartProduct.innerHTML = "X";
                removeCartProduct.classList.add("bg-red-500", "text-white", "rounded", "px-2", "py-1");

                productCartContainerTableRow.dataset.cartvalue = cartContainer.dataset.productPrice;

                cartContainerAddCart.addEventListener("click", () => {
                    countIteration++;

                    productCartContainerTableRow.innerHTML = `
                        <td>${cartContainer.dataset.productName}</td>
                        <td>${cartContainer.dataset.companyName}</td>
                        <td>$${cartContainer.dataset.productPrice}</td>
                        <td>${countIteration}</td>
                    `;
                    if (countIteration <= 1) {
                        productCartContainerTableRow.children[3].classList.add("hidden");
                    } else {
                        productCartContainerTableRow.children[3].classList.remove("hidden");
                    }
                    removeCartProductTd.appendChild(removeCartProduct);
                    productCartContainerTableRow.appendChild(removeCartProductTd);
                    productCartContainerTable.appendChild(productCartContainerTableRow);

                    productCartCounterItrator++;
                    productCartCounter.innerText = productCartCounterItrator;
                    productCartCounter.classList.remove("hidden");

                    let productPrice = parseFloat(productCartContainerTableRow.dataset.cartvalue);
                    totalShowerValueItrator += productPrice;
                    totalShowerValue.innerHTML = totalShowerValueItrator;
                });

                removeCartProduct.addEventListener("click", () => {
                    productCartCounterItrator--;
                    productCartCounter.innerText = productCartCounterItrator;
                    if (productCartCounterItrator == 0) {
                        productCartCounter.classList.add("hidden");
                    }
                    let productPrice = parseFloat(productCartContainerTableRow.dataset.cartvalue);
                    totalShowerValueItrator -= productPrice;
                    totalShowerValue.innerHTML = totalShowerValueItrator;
                    if (countIteration > 1) {
                        countIteration--;
                        if (countIteration <= 1) {
                            productCartContainerTableRow.children[3].classList.add("hidden");
                        } else {
                            productCartContainerTableRow.children[3].innerText = countIteration;
                        }
                    } else {
                        productCartContainerTable.removeChild(productCartContainerTableRow);
                        countIteration--;
                    }
                });
                cartContainerInImgContainer.appendChild(cartContainerInImg);
                cartContainer.appendChild(cartContainerInImgContainer);
                cartContainer.appendChild(cartContainerPro);
                cartContainer.appendChild(cartContainerCo);
                cartContainer.appendChild(cartContainerVal);
                cartContainer.appendChild(cartContainerAddCart);

                productShower.appendChild(cartContainer);

                // Reset inputs
                enterCompanyName.value = "";
                enterProductName.value = "";
                enterPrice.value = "";
                enterProductImg.value = "";
                searchOtherButtonContainer.classList.remove("left-[90%]");
                searchOtherButtonContainer.classList.add("left-[28%]");
                searchBar.style.display = "block";

                addProductContainerDisplay.style.display = "block";
                addProductContainer.style.display = "none";
                productSeeBuyContainer.style.display = "block";
                backButton.style.display = "none";
                productCartDisplayButton.style.display = "block";
            };
            reader.readAsDataURL(file); // Read the file as a data URL (base64)

            return; // Exit function since products array is empty
        }

        // Loop through the products and display each if there are any products
        products.forEach(product => {
            let cartContainer = document.createElement("div");
            cartContainer.classList.add("h-[290px]", "w-[18%]", "flex", "items-center", "justify-flexend", "flex-col", "product", "overflow-hidden");
            cartContainer.id = "cartContainer";

            let cartContainerInImgContainer = document.createElement("div");
            cartContainerInImgContainer.classList.add("flex", "items-center", "justify-center","bg-[#f5f5f5]", "h-[140px]", "bg-center", "w-full")

            let cartContainerInImg = document.createElement("div");
            cartContainerInImg.style.backgroundImage = `url('${product.ProImg}')`;
            cartContainerInImg.classList.add("flex", "items-center", "justify-center","bg-contain",   "bg-no-repeat", "h-[100%]", "w-[100%]");

            let cartContainerPro = document.createElement("h2");
            cartContainerPro.innerText = product.ProName;

            let cartContainerCo = document.createElement("p");
            cartContainerCo.innerText = product.comName;

            let cartContainerVal = document.createElement("p");
            cartContainerVal.innerText = `$${product.ProPrice}`;

            let cartContainerAddCart = document.createElement("button");
            cartContainerAddCart.innerText = "Add to Cart";
            cartContainerAddCart.classList.add("h-[30px]", "w-[100px]", "rounded-[5px]", "bg-[#0b9bd8]", "text-white");

            cartContainer.dataset.productName = product.ProName;
            cartContainer.dataset.companyName = product.comName;
            cartContainer.dataset.productPrice = product.ProPrice;

            let productCartContainerTableRow = document.createElement("tr");
            let countIteration = 0;

            let removeCartProductTd = document.createElement("td");
            let removeCartProduct = document.createElement("button");
            removeCartProduct.innerHTML = "X";
            removeCartProduct.classList.add("bg-red-500", "text-white", "rounded", "px-2", "py-1");

            productCartContainerTableRow.dataset.cartvalue = cartContainer.dataset.productPrice;

            cartContainerAddCart.addEventListener("click", () => {
                countIteration++;

                productCartContainerTableRow.innerHTML = `
                    <td>${cartContainer.dataset.productName}</td>
                    <td>${cartContainer.dataset.companyName}</td>
                    <td>$${cartContainer.dataset.productPrice}</td>
                    <td>${countIteration}</td>
                `;
                if (countIteration <= 1) {
                    productCartContainerTableRow.children[3].classList.add("hidden");
                } else {
                    productCartContainerTableRow.children[3].classList.remove("hidden");
                }
                removeCartProductTd.appendChild(removeCartProduct);
                productCartContainerTableRow.appendChild(removeCartProductTd);
                productCartContainerTable.appendChild(productCartContainerTableRow);

                productCartCounterItrator++;
                productCartCounter.innerText = productCartCounterItrator;
                productCartCounter.classList.remove("hidden");

                let productPrice = parseFloat(productCartContainerTableRow.dataset.cartvalue);
                totalShowerValueItrator += productPrice;
                totalShowerValue.innerHTML = totalShowerValueItrator;
            });

            removeCartProduct.addEventListener("click", () => {
                productCartCounterItrator--;
                productCartCounter.innerText = productCartCounterItrator;
                if (productCartCounterItrator == 0) {
                    productCartCounter.classList.add("hidden");
                }
                let productPrice = parseFloat(productCartContainerTableRow.dataset.cartvalue);
                totalShowerValueItrator -= productPrice;
                totalShowerValue.innerHTML = totalShowerValueItrator;
                if (countIteration > 1) {
                    countIteration--;
                    if (countIteration <= 1) {
                        productCartContainerTableRow.children[3].classList.add("hidden");
                    } else {
                        productCartContainerTableRow.children[3].innerText = countIteration;
                    }
                } else {
                    productCartContainerTable.removeChild(productCartContainerTableRow);
                    countIteration--;
                }
            });

            cartContainerInImgContainer.appendChild(cartContainerInImg);
            cartContainer.appendChild(cartContainerInImgContainer);
            cartContainer.appendChild(cartContainerPro);
            cartContainer.appendChild(cartContainerCo);
            cartContainer.appendChild(cartContainerVal);
            cartContainer.appendChild(cartContainerAddCart);


            productShower.appendChild(cartContainer);
        });

        addProductContainerDisplay.style.display = "block";
        addProductContainer.style.display = "none";
        productSeeBuyContainer.style.display = "block";
        backButton.style.display = "none";
        productCartDisplayButton.style.display = "block";
        searchOtherButtonContainer.classList.remove("left-[90%]");
        searchOtherButtonContainer.classList.add("left-[28%]");
        searchBar.style.display = "block";

        // Clear inputs and reset products array
        enterCompanyName.value = "";
        enterProductName.value = "";
        enterPrice.value = "";
        enterProductImg.value = "";
        products.length = 0; // Clear the products array

        displayAddProductLiContainer.innerHTML = ``;
        displayAddProduct.style.display = "none";
    });
    function searchFun(){
        const query = searchBar.value.toLowerCase();
        const products = productShower.getElementsByClassName("product");

        Array.from(products).forEach(product => {
            const productName = product.querySelector("h2").innerText.toLowerCase();
            const companyName = product.querySelector("p").innerText.toLowerCase();

            if (productName.includes(query) || companyName.includes(query)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }
    // Search bar functionality
    searchBar.addEventListener('keypress', (e) => {
        if(e.key === "Enter"){
            searchFun();
        }
    });

    // Buy button functionality
    totalBuyValueButton.addEventListener('click', () => {
        orderConfirmBillTable.innerHTML = ''; // Clear previous order details

        const cartRows = productCartContainerTable.querySelectorAll('tr');
        cartRows.forEach(row => {
            const clonedRow = row.cloneNode(true);
            orderConfirmBillTable.appendChild(clonedRow);
        });

        orderTotalShowerValue.innerText = totalShowerValue.innerText;
        orderConfirmBillContainer.classList.remove('hidden');
    });
});