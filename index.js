//call this function before mounting to display specification text selection on UI correctly
document.addEventListener("DOMContentLoaded", function() {
    let descriptionButton = document.getElementById("description-button");
    selectSpec(descriptionButton);
  });
window.onload = function() {
    let descriptionButton = document.getElementById("description-button");
    selectSpec(descriptionButton);
 }



//menu language and currency dropdown
document.getElementById("header-language-selector").addEventListener("click", function(){
document.getElementById("header-language-dropdown-menu").classList.toggle("menu-show");
document.getElementById("header-down-item-language-selector").classList.toggle("turn-up-item-selector")
}
);

document.getElementById("header-currency-selector").addEventListener("click", function(){
    document.getElementById("header-currency-dropdown-menu").classList.toggle("menu-show");
    document.getElementById("header-down-item-currency-selector").classList.toggle("turn-up-item-selector")
    }
    );


//change Heart Color - header 
//method for small devices and for desktop device
let heart = document.getElementById("header-small-device-heart-icon")
let heartButton = document.getElementById("header-small-devices-heart-button")

function changeHeartIcon(){
    if (heart.src.endsWith("HeartGray.svg")) {
      heart.src = "/public/icons/Heart.svg";
    } else {
      heart.src = "/public/icons/HeartGray.svg";
    }
   }

let biggerHeart = document.getElementById("desktop-devices-heart-icon")
function changeBiggerHeartIcon(){
    if (biggerHeart.src.endsWith("HeartGray.svg")) {
      biggerHeart.src = "/public/icons/Heart.svg";
    } else {
      biggerHeart.src = "/public/icons/HeartGray.svg";
    }
   }

//select Size Buttons, only one elegible at a time
function selectButton(someButton){
    document.querySelectorAll(".main-details-size-buttons").forEach(btn => btn.classList.remove("selected-button"));

    someButton.classList.add("selected-button")
}

//make counter and tranform total price
let counter = document.getElementById("counter");
let decrement = document.getElementById("decrement");
let increment = document.getElementById("increment");

let originalPriceProd1 = 800.00
let discountPriceProd1 = 600.72

let totalPriceProd1Display = document.getElementById("total-price-prod1-display");
totalPriceProd1Display.innerHTML = originalPriceProd1.toFixed(2);

let discountPriceProd1Display = document.getElementById("discount-price-prod1-display");
discountPriceProd1Display.innerHTML = discountPriceProd1;

increment.addEventListener("click", function(){
    counter.textContent = parseInt(counter.textContent) + 1;

    totalPriceProd1Display.innerHTML = (originalPriceProd1 * counter.textContent).toFixed(2);

    discountPriceProd1Display.innerHTML = (discountPriceProd1 * counter.textContent).toFixed(2);
   });
   
   decrement.addEventListener("click", function(){
    if(parseInt(counter.textContent)>0){
    counter.textContent = parseInt(counter.textContent) -1;
    }
    totalPriceProd1Display.innerHTML = (originalPriceProd1 * counter.textContent).toFixed(2);
    
    discountPriceProd1Display.innerHTML = (discountPriceProd1 * counter.textContent).toFixed(2);
   });

// specs text button selector
let mainSmallerDetails = document.getElementById("main-smaller-details");
let textContent;

function selectSpec(someItem){
    document.querySelectorAll(".main-spec-selector-item").forEach(it => it.classList.remove("spec-selected"));

    someItem.classList.add("spec-selected");

    switch(someItem.textContent) {
    case 'Description':
        textContent =  "<p>The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming oriented features that are great for gamers. </p><br /><p>*Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.</p><br />   <p>**65C2 Stand model is at a minimum 39% lighter than the C1 series.<span class=\"orange\">More</span>...</p>"
        break;
    case 'Specification':
        textContent = "<p>Specifications Lorem ipsum...</p>"; 
        break;
    case 'Reviews':
        textContent = "<p>Reviews Lorem ipsum...</p>"; 
        break;
}

mainSmallerDetails.innerHTML = textContent;
}

//main image change from pressing img button
let images = document.querySelectorAll(".image-slider-selector-item");
let frontImage = document.getElementById("main-front-image")

function selectImage(selectedImage){
   images.forEach(image => image.classList.remove("border-orange"));

   selectedImage.classList.add("border-orange");
   frontImage.src = selectedImage.querySelector('img').src;
};

let prevArrow = document.getElementById("slider-prev-arrow-container");
let nextArrow = document.getElementById("slider-next-arrow-container");
let currentImage = 0;

prevArrow.addEventListener('click', function() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    selectImage(images[currentImage]);
   });
   
   nextArrow.addEventListener('click', function() {
    currentImage = (currentImage + 1) % images.length;
    selectImage(images[currentImage]);
   });


// make loop related products
let productsContainer = document.getElementById("related-products-prods-container");
let shownProducts = [];
let currentPosition = 0;

function changeProductOrder() {
   
    var products = Array.from(document.querySelectorAll('.related-products-each-product'));
    var circles = Array.from(document.querySelectorAll('.small-circle-icon'));
   
    products = products.filter(product => !shownProducts.includes(product));
   
    if (products.length === 0) {
    shownProducts = [];
    products = Array.from(document.querySelectorAll('.related-products-each-product'));
    }
   
    products.sort(function() { return 0.5 - Math.random() });
   
    var fragment = document.createDocumentFragment();
   
    products.forEach(function(product) {
    fragment.appendChild(product);
    });
   
    productsContainer.innerHTML = '';
   
    productsContainer.appendChild(fragment);
   
    shownProducts.push(...products);
   
    for (let i = 0; i < circles.length; i++) {
     if (i === currentPosition) {
       circles[i].src = "/public/icons/CircleOrange.png";
     } else {
       circles[i].src = "/public/icons/CircleGray.png";
     }
    }
    currentPosition = (currentPosition + 1) % circles.length;
   };


   setInterval(function() {
    changeProductOrder();
   }, 2000);