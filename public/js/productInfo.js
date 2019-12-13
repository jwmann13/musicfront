$("#add-button").on("click", function() {
    let id = $(this).data("id");
    
    $.get(`/products/info/${id}`, (product) => {
        console.log(product)
    });
})