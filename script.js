const productContainer = document.getElementById("product-container");

const productsList = ["Black Tea", "Green tea"]



const blackTea = document.createElement("div");
const greenTea = document.createElement("div");

blackTea.innerHTML = productsList[0];
greenTea.innerHTML = productsList[1];

blackTea.classList.add("product")
greenTea.classList.add("product")

productContainer.appendChild(blackTea);
productContainer.appendChild(greenTea);