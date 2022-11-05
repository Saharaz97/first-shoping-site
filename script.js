const productContainer = document.getElementById("product-container");

const productsList = ["Black Tea", "Green tea", "Black Coffee",]

for (let index = 0; index < productsList.length; index++) {
   
    const product = document.createElement("div");
    product.innerHTML = productsList[index];
    product.classList.add("product")
    productContainer.appendChild(product);   
}