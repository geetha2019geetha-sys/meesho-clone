// 🔹 Product list
const products = [
  { id: 1, name: "Saree 1", price: 1500, category: "saree", img: "../img/saree1.jpg" },
  { id: 2, name: "Saree 2", price: 1800, category: "saree", img: "../img/saree2.jpg" },
  { id: 3, name: "Saree 3", price: 1500, category: "saree", img: "../img/saree3.jpg" },
  { id: 4, name: "Saree 4", price: 1500, category: "saree", img: "../img/saree4.jpg" },
  { id: 5, name: "Saree 5", price: 1500, category: "saree", img: "../img/saree5.jpg" },
  { id: 6, name: "Saree 6", price: 1500, category: "saree", img: "../img/saree6.jpg" },
  { id: 7, name: "Saree 7", price: 1500, category: "saree", img: "../img/saree7.jpg" },
  { id: 8, name: "Saree 8", price: 1500, category: "saree", img: "../img/saree8.jpg" },
  { id: 9, name: "Saree 9", price: 1500, category: "saree", img: "../img/saree9.jpg" },
  { id: 10, name: "Saree 10", price: 1500, category: "saree", img: "../img/saree10.jpg" },
  { id: 11, name: "Saree 11", price: 1500, category: "saree", img: "../img/saree11.jpg" },
  { id: 12, name: "Saree 12", price: 1500, category: "saree", img: "../img/saree12.jpg" },
  { id: 13, name: "Saree 13", price: 1500, category: "saree", img: "../img/saree13.jpg" },
  { id: 14, name: "Saree 14", price: 1500, category: "saree", img: "../img/saree14.jpg" },
  { id: 15, name: "Saree 15", price: 1500, category: "saree", img: "../img/saree15.jpg" },
  { id: 16, name: "Saree 16", price: 1500, category: "saree", img: "../img/saree16.jpg" },
  { id: 17, name: "Saree 17", price: 1500, category: "saree", img: "../img/saree17.jpg" },
  { id: 51, name: "Saree 18", price: 1500, category: "saree", img: "../img/saree18.jpg" },
  { id: 52, name: "Saree 19", price: 1500, category: "saree", img: "../img/saree19.jpg" },
  { id: 53, name: "Saree 20", price: 1500, category: "saree", img: "../img/saree20.jpg" },
  { id: 54, name: "Saree 21", price: 1500, category: "saree", img: "../img/saree21.jpg" },
  { id: 55, name: "Saree 22", price: 1500, category: "saree", img: "../img/saree22.jpg" },
  { id: 56, name: "Saree 23", price: 1500, category: "saree", img: "../img/saree23.jpg" },

  { id: 18, name: "Kurti 1", price: 800, category: "kurti", img: "../img/chudi1.jpg" },
  { id: 19, name: "Kurti 2", price: 900, category: "kurti", img: "../img/chudi2.jpg" },
  { id: 18, name: "Kurti 3", price: 800, category: "kurti", img: "../img/chudi3.jpg" },
  { id: 18, name: "Kurti 4", price: 800, category: "kurti", img: "../img/chudi4.jpg" },
  { id: 18, name: "Kurti 5", price: 800, category: "kurti", img: "../img/chudi5.jpg" },
  { id: 18, name: "Kurti 6", price: 800, category: "kurti", img: "../img/chudi6.jpg" },
  { id: 18, name: "Kurti 7", price: 800, category: "kurti", img: "../img/chudi7.jpg" },
  { id: 18, name: "Kurti 8", price: 800, category: "kurti", img: "../img/chudi8.jpg" },
  { id: 18, name: "Kurti 9", price: 800, category: "kurti", img: "../img/chudi9.jpg" },
  { id: 18, name: "Kurti 10", price: 800, category: "kurti", img: "../img/chudi10.jpg" },
  { id: 18, name: "Kurti 11", price: 800, category: "kurti", img: "../img/chudi11.jpg" },

  { id: 19, name: "Shoes 1", price: 800, category: "shoes", img: "..//img/shoes1.jpg" },
  { id: 20, name: "Shoes 2", price: 900, category: "shoes", img: "..//img/shoes2.jpg" },
  { id: 21, name: "Shoes 3", price: 800, category: "shoes", img: "..//img/shoes3.jpg" },
  { id: 22, name: "Shoes 4", price: 800, category: "shoes", img: "..//img/shoes4.jpg" },
  { id: 23, name: "Shoes 5", price: 800, category: "shoes", img: "..//img/shoes5.jpg" },
  { id: 24, name: "Shoes 6", price: 800, category: "shoes", img: "..//img/shoes6.jpg" },
  { id: 25, name: "Shoes 7", price: 800, category: "shoes", img: "..//img/shoes7.jpg" },
  { id: 26, name: "Shoes 8", price: 800, category: "shoes", img: "..//img/shoes8.jpg" },
  { id: 27, name: "Shoes 9", price: 800, category: "shoes", img: "..//img/shoes9.jpg" },
  { id: 28, name: "Shoes 10", price: 800, category: "shoes", img: "..//img/shoes10.jpg" },
  { id: 29, name: "Shoes 11", price: 800, category: "shoes", img: "..//img/shoes11.jpg" },
  { id: 30, name: "Shoes 12", price: 800, category: "shoes", img: "..//img/shoes12.jpg" },
  { id: 31, name: "Shoes 13", price: 800, category: "shoes", img: "..//img/shoes13.jpg" },
  { id: 32, name: "Shoes 14", price: 800, category: "shoes", img: "..//img/shoes14.jpg" },
  { id: 33, name: "Shoes 15", price: 800, category: "shoes", img: "..//img/shoes15.jpg" },
  
   
  { id: 34, name: "Jewel 1", price: 1200, category: "jewel", img: "..//img/jew1.jpg" },
  { id: 35, name: "Jewel 2", price: 1400, category: "jewel", img: "..//img/jew2.jpg" },
  { id: 35, name: "Jewel 3", price: 1400, category: "jewel", img: "..//img/jew3.jpg" },
  { id: 35, name: "Jewel 4", price: 1400, category: "jewel", img: "..//img/jew4.jpg" },
  { id: 35, name: "Jewel 5", price: 1400, category: "jewel", img: "..//img/jew5.jpg" },
  { id: 35, name: "Jewel 6", price: 1400, category: "jewel", img: "..//img/jew6.jpg" },
  { id: 35, name: "Jewel 7", price: 1400, category: "jewel", img: "..//img/jew7.jpg" },
  { id: 35, name: "Jewel 8", price: 1400, category: "jewel", img: "..//img/jew8.jpg" },
  { id: 35, name: "Jewel 9", price: 1400, category: "jewel", img: "..//img/jew9.jpg" },
  { id: 35, name: "Jewel 10", price: 1400, category: "jewel", img: "..//img/jew10.jpg" },
  { id: 35, name: "Jewel 11", price: 1400, category: "jewel", img: "..//img/jew11.jpg" },
  { id: 35, name: "Jewel 12", price: 1400, category: "jewel", img: "..//img/jew12.jpg" },
  { id: 35, name: "Jewel 13", price: 1400, category: "jewel", img: "..//img/jew13.jpg" },
  { id: 35, name: "Jewel 14", price: 1400, category: "jewel", img: "..//img/jew14.jpg" },
  { id: 35, name: "Jewel 15", price: 1400, category: "jewel", img: "..//img/jew15.jpg" },



  { id: 36, name: "Ear 1", price: 1200, category: "ear", img: "..//img/ear1.jpg" },
  { id: 37, name: "Ear 2", price: 1400, category: "ear", img: "..//img/ear2.jpg" },
  { id: 38, name: "Ear 3", price: 1400, category: "ear", img: "..//img/ear3.jpg" },
  { id: 39, name: "Ear 4", price: 1400, category: "ear", img: "..//img/ear4.jpg" },
  { id: 40, name: "Ear 5", price: 1400, category: "ear", img: "..//img/ear5.jpg" },
  { id: 41, name: "Ear 6", price: 1400, category: "ear", img: "..//img/ear6.jpg" },
  { id: 42, name: "Ear 7", price: 1400, category: "ear", img: "..//img/ear7.jpg" },
  { id: 43, name: "Ear 8", price: 1400, category: "ear", img: "..//img/ear8.jpg" },
  { id: 44, name: "Ear 9", price: 1400, category: "ear", img: "..//img/ear9.jpg" },
  { id: 45, name: "Ear 10", price: 1400, category: "ear", img: "..//img/ear10.jpg" },
  { id: 46, name: "Ear 11", price: 1400, category: "ear", img: "..//img/ear11.jpg" },
  { id: 47, name: "Ear 12", price: 1400, category: "ear", img: "..//img/ear12.jpg" },
  { id: 48, name: "Ear 13", price: 1400, category: "ear", img: "..//img/ear13.jpg" },
  { id: 49, name: "Ear 14", price: 1400, category: "ear", img: "..//img/ear14.jpg" },
  { id: 50, name: "Ear 15", price: 1400, category: "ear", img: "..//img/ear15.jpg" }


  ,
  { id: 61, name: "Beauty 1", price: 800, category: "beauty", img: "..//img/bet1.jpg" },
  { id: 62, name: "Beauty 1", price: 800, category: "beauty", img: "..//img/bet2.jpg" },
  { id: 63, name: "Beauty 1", price: 800, category: "beauty", img: "..//img/bet3.jpg" },
  { id: 64, name: "Beauty 1", price: 800, category: "beauty", img: "..//img/bet4.jpg" },
  { id: 65, name: "Beauty 1", price: 800, category: "beauty", img: "..//img/bet5.jpg" },
  { id: 66, name: "Beauty 1", price: 800, category: "beauty", img: "..//img/bet6.jpg" },
  { id: 67, name: "Beauty 1", price: 800, category: "beauty", img: "..//img/bet7.jpg" },
  { id: 68, name: "Beauty 1", price: 800, category: "beauty", img: "..//img/bet8.jpg" },
  { id: 69, name: "Beauty 1", price: 800, category: "beauty", img: "..//img/bet9.jpg" },
  { id: 70, name: "Beauty 1", price: 800, category: "beauty", img: "..//img/bet10.jpg" },
  { id: 71, name: "Beauty 1", price: 800, category: "beauty", img: "..//img/bet11.jpg" }
  
];


// 🔹 DISPLAY PRODUCTS
function displayProducts() {
  products.forEach(product => {
    const section = document.getElementById(product.category);

    if (!section) return;

    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${product.img}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="buyNow(${product.id})">Buy Now</button>
    `;

    section.appendChild(div);
  });
}

displayProducts();


// 🛒 ADD TO CART (SAVE IN LOCALSTORAGE)
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = products.find(p => p.id === productId);

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(product.name + " added to cart");
}


// 🛒 OPEN CART PAGE
function viewCart() {
  window.location.href = "cart.html";
}


// 🔙 BACK TO SHOP
function goBack() {
  window.location.href = "index.html";
}


function scrollToSection(id){

    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });

}


// 🔍 SEARCH PRODUCTS

document.getElementById("search").addEventListener("keyup", function () {

    let searchValue = this.value.toLowerCase();

    let allProducts = document.querySelectorAll(".product");

    allProducts.forEach(product => {

        let productName = product.querySelector("h3").innerText.toLowerCase();

        if(productName.includes(searchValue)){

            product.style.display = "block";

        }
        else{

            product.style.display = "none";

        }

    });

});

// 💳 BUY NOW
function buyNow(productId) {
  window.location.href = "contact.html?id=" + productId;

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  if (!name || !address || !phone) {
    alert("Please fill all details");
    return;
  }

  

  const orderData = {
    productId,
    name,
    address,
    phone
  };

  fetch("http://localhost:5000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(orderData)
  })
    .then(res => res.json())
    .then(() => alert("Order Placed Successfully"))
    .catch(err => console.log(err));
}