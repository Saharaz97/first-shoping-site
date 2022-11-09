const productContainer = document.getElementById("product-container");
const productsList = ["Black Tea", "Green tea", "Black Coffee", "Cinamon Tea"]

const imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'black_tea.jpg';


for (let index = 0; index < productsList.length; index++) {
   
    const product = document.createElement("div");
    const addBtn = document.createElement("button");
    const productTitle = document.createElement("h2");
    const imgProduct = document.createElement("img");

    addBtn.classList.add("addBtn");
    product.classList.add("product")
    productTitle.classList.add("product-title")
    imgProduct.classList.add("img");
    
    productTitle.innerHTML = productsList[index];
    addBtn.innerHTML = "add product";
    imgProduct.innerHTML = imgArray[0].src;

    
    productContainer.appendChild(product);
    product.appendChild(productTitle);
    product.appendChild(imgProduct);
    product.appendChild(addBtn);

}

// for (let index = 0; index < productsList.length; index++) {
//     const imgProduct = document.createElement("img");
//     imgProduct.classList.add("img");
//     product.appendChild(imgProduct);
//      imgProduct.innerHTML = imgArray[index].src;
// }