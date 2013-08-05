(function($) {  
  $("#submit").click(function() {
    var display = $(".display");
    var total = "0";
    display.empty();
    $(".item").each(function() {
      var name = $(this).find(".name").text();
      var price = $(this).find(".price").text();
      var quantity = $(this).find(".quantity").val();
      var p = $("<p>");
      p.text("Name: " + name + " Quantity: " + quantity + " Total Price: " + price);
      display.append(p);
    });
    display.append("<p>Total Value: " + total + "</p>");
  });
})(jQuery);
