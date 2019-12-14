$("#add-button").on("click", function(event) {
  event.preventDefault();
  let id = $(this).data("id");

  $.get(`/api/products/${id}`, product => {
    console.log(product);
    const productVar = product
    $(".cart-content").append(productVar)
  });
});
