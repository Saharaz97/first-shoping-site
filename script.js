const productContainer = document.getElementById("product-container");
const productsList = ["Black Tea", "Green tea", "Black Coffee", "Cinamon Tea"]



for (let index = 0; index < productsList.length; index++) {
   
    const product = document.createElement("div");
    const productTitle = document.createElement("h2");

    product.classList.add("product")
    productContainer.appendChild(product);
    
    productTitle.innerHTML = productsList[index];
    productTitle.classList.add("product-title")
    product.appendChild(productTitle);
}

