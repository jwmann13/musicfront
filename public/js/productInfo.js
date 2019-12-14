let cart = []

$("#add-button").on("click", function(event) {
  event.preventDefault();
  let id = $(this).data("id");

  $.get(`/api/products/${id}`, product => {
    
    cart.push(product)
    console.log(cart)
    
    for (var i = 0; i < cart.length; i++){
        var item = cart[i];
        var itemImage = item.photo
        var itemName = item.name
        var itemBrand = item.brand
        var itemModel = item.model
        var itemPrice = item.price
        var priceNum = parseInt(itemPrice)
        
        var product = `
        <div class="cart-item">
            <img src=${itemImage} alt="placeholder">
        
            <div>
            <h5>${itemName}</h5>
            <p>${itemBrand}</p>
            <p>${itemModel}</p>
            <p>Price: $${priceNum}</p>
            <span class="remove-item">Remove <i class="fa fa-sm fa-trash "></i></span>
        </div>
        
        <div>
            <i class="fa fa-chevron-up"></i>
            <p class="item-amount">1</p>
            <i class="fa fa-chevron-down"></i>
        </div>
        `

        $(".cart-content").append(product)
    };
  })
});
