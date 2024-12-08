//DROP DOWN FOR ACCOUNT
function account(){
    document.querySelector("#dropdown").style.display="block";
}
document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('dropdown');
    const menu = document.getElementById('menu');
    if (!dropdown.contains(event.target)) {
        dropdown.style.display = 'none'; 
    }
});
function signUp(){
    let name=document.querySelector("#Fname").value
    let surname=document.querySelector("#Sname").value
    let email=document.querySelector("#Email").value
    let password=document.querySelector("#Pass").value
    if(name===""){
        document.querySelector("#errorfname").style.border="2px solid red";
        document.querySelector("#errorfname").innerHTML="Enter Name"
        document.querySelector("#errorfname").style.color="red"
        return false;
    }
    else if(surname===""){
        document.querySelector("#errorsname").style.border="2px solid red";
        document.querySelector("#errorsname").innerHTML="Enter Second Name"
        document.querySelector("#errorsname").style.color="red"
        return false;
    }
    else if(email===""){
     document.querySelector("#erroremail").innerHTML ="enter email please"
     let selectedemail = document.querySelector("#erroremail")
     selectedemail.style.borderColor="red"
     selectedemail.style.outlineColor="red"
     selectedemail.style.Color="red"

     return false;
    }
    else if(!(email.includes('@')&& email.includes('.com'))){
        document.querySelector("#erroremail").innerHTML="please enter valid email"
         let selectedemail = document.querySelector("#erroremail")
     selectedemail.style.borderColor="red"
     selectedemail.style.Color="red"
     return false;
    }
    else if(password ===""){
        document.querySelector("#errorpass").innerHTML="enter passowrd"
        let selectedpass = document.querySelector("#errorpass");
        selectedpass.style.borderColor ="red"
        selectedpass.style.outlineColor = "red"
        return false;
    }
    let obj={
        Name:document.querySelector("#Fname").value,
        Secondname:document.querySelector("#Sname").value,
        EmailEntered:document.querySelector("#Email").value,
        Passowrd:document.querySelector("#Pass").value
    }
    localStorage.setItem("DATA",JSON.stringify(obj))
}
function Login(){
    let email=document.querySelector("#Remail").value
    let password=document.querySelector("#Rpass").value
      if(email===""){
     document.querySelector("#erroremail").innerHTML ="enter email please"
     let selectedemail = document.querySelector("#erroremail")
     selectedemail.style.borderColor="red"
     selectedemail.style.outlineColor="red"
     selectedemail.style.Color="red"

     return false;
    }
    else if(!(email.includes('@')&& email.includes('.com'))){
        document.querySelector("#erroremail").innerHTML="please enter valid email"
         let selectedemail = document.querySelector("#erroremail")
     selectedemail.style.borderColor="red"
     selectedemail.style.Color="red"
     return false;
    }
    else if(password ===""){
        document.querySelector("#errorpass").innerHTML="enter passowrd"
        let selectedpass = document.querySelector("#errorpass");
        selectedpass.style.borderColor ="red"
        selectedpass.style.outlineColor = "red"
        return false;
    }
    let d = JSON.parse(localStorage.getItem("DATA")) 
    let newemail = document.querySelector("#Remail").value
    let newpass = document.querySelector("#Rpass").value
    if(newemail==d.EmailEntered && newpass==d.Passowrd){
      window.location.href="./home.html"
    }
    else{
        window.alert("wrong password")
    }

    return false;
    
}
// HOME PAGE 
async function fetchProducts() {
    const response = await fetch('http://localhost:3000/productDetail');
    const products = await response.json();
    const cardsSection = document.getElementById('cards');
    cardsSection.innerHTML = products.map(product => `
        <div class="card" id="card-${product.id}" style="box-shadow: 1px 1px 3px 1px rgb(173, 171, 171); height: 500px; width: 350px; overflow: hidden; display: flex; flex-direction: column; justify-content: center; align-items: center; border-radius: 30px;"> 
            <img src="${product.images[0]}" alt="${product.name}"  onmouseenter="zoomin(this)" onmouseleave="zoomout(this)" style="height: 70%; width: 95%;" 
            onclick=" console.log('Clicked product:', ${product.id}); viewProductDetails(${product.id})" >
            <h3>${product.name}</h3>
            <h3>Rs ${product.price}</h3>
            <button style="background-color: black; color: burlywood; padding: 5px 30px; border: none; border-radius: 12px;">KNOW MORE</button>
        </div>
    `).join('');
}

function zoomin(image){
    image.style.transform = "scale(1.1)";
    image.style.transition = "transform 0.3s ease-in-out";

}
function zoomout(image){
    image.style.transform = "scale(1)";
    image.style.transition = "transform 0.3s ease-in-out";

}
async function viewProductDetails(id) {
    const response = await fetch(`http://localhost:3000/productDetail/${id}`);
    const product = await response.json();
   
     document.querySelectorAll('body > *:not(#output):not(#navbar)').forEach(el => el.style.display = 'none');
    
    
   
    const outputSection = document.getElementById('output');
    outputSection.innerHTML = `
        <section class="productDetail" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div class="productImage">
                <img src="${product.images[0]}" alt="${product.name}" id="largeimg">
                <div class="smallImage">
                    ${product.images.map((img, index) => `
                        <img src="${img}" id="image${index}" 
                             onmouseenter="changeImageById('image${index}');" 
                             onmouseleave="resetImage('${product.images[0]}');">
                    `).join('')}
                </div>
            </div>
            <div class="about">
                <h3>${product.name}</h3>
                <h2>Rs ${product.price}</h2>
                <p>${product.description}</p>
                <h4 style="font-size: large; margin-top: 20px;">size:</h4>
            <div class="size">
                <a href="#">UK6</a>
                <a href="#">UK7</a>
                <a href="#">UK8</a>
                <a href="#">UK9</a>
                 
            </div>
    
      <div class="buyNow">
        <a href="#" style="margin-left: 20px;" onclick="addToBag(${product.id})">ADD TO BAG</a>
        <a href="checkout.html">BUY IT NOW</a>
    </div>
    

  
    <div class="share">
        <div class="shareTo">
            <i class="fa-solid fa-share-nodes" style="color: #00040a;"></i>
            <h5>Share</h5>
        </div>
        <div class="facebook">
            <i class="fa-brands fa-facebook-f" style="color: #01060e;"></i>
        </div>
        <div class="twitter">
            <i class="fa-brands fa-twitter" style="color: #010204;"></i>
        </div>
        <div class="pintrest">
            <i class="fa-brands fa-pinterest" style="color: #010813;"></i>
        </div>
    </div>
        <div class="clock">
            <i class="fa-regular fa-clock" style="color: #000714;"></i>
            <p>Orders ship within 2 to 3 business days.</p>
        </div>
        <div class="truck">
            <i class="fa-solid fa-truck" style="color: #01060e;"></i>
            <p>Free Shipping over Rs. 2000</p>
        </div>
    </div>
    </div>
        </section>
       
    
            </div>
        </section>
    `;
}
document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});
       
    
    


function changeImageById(myid){
    let selectedImg = document.querySelector("#largeimg");
    let hoveredImg = document.querySelector(`#${myid}`);
    selectedImg.src = hoveredImg.src;
}
function resetImage(defaultImage) {
    let selectedImg = document.querySelector("#largeimg");
    selectedImg.src = defaultImage; 
}



async function addToBag(productId) {
    const response = await fetch(`http://localhost:3000/productDetail/${productId}`);
    const product = await response.json();
    const cartItem = {
        name: product.name,
        price: product.price,
        image: product.images[0] 
    };
    await fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem)
    });

    alert("Added to Bag!");
}
async function viewCart() {
    const response = await fetch('http://localhost:3000/cart');
    const cartItems = await response.json();

    const cartSection = document.getElementById('cart');
    cartSection.innerHTML = cartItems.map(item => `
        <div class="cartItem">
            <img src="${item.image}" alt="${item.name}" class="cartItemImage">
            <div class="cartItemDetails">
                <h3>${item.name}</h3>
                <p>Price: Rs ${item.price}</p>
            </div>
        </div>
    `).join('');
}
