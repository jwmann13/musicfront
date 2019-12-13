const cartButton = document.querySelector(".cart-btn");
const closeButton = document.querySelector(".close-cart");
const clearButton = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
let numberProducts = 1
const itemQuantity = document.querySelector(".item-amount")



$(".cart-button").on("click", function() {
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart")
});

$(".close-cart").on("click", function() {
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart")
})

function increaseQuantity () {
   numberProducts++;
   $(itemQuantity).text(numberProducts)
   console.log(numberProducts)

}

function decreaseQuantity () {
    numberProducts--;
    $(itemQuantity).text(numberProducts)
    console.log(numberProducts)
}

$(".fa-chevron-up").on("click", function () {
    increaseQuantity()
    $(cartItems).text(numberProducts)
   
})

$(".fa-chevron-down").on("click", function () {
    decreaseQuantity()
    $(cartItems).text(numberProducts)
})



