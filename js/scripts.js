function Pizza(baseValue) {
  this.size = baseValue;
  this.toppings = [];
};

function Topping(price) {
    this.price = price;
}

Pizza.prototype.addToppings = function (toppingArray) {
  this.toppings = toppingArray;
};

Pizza.prototype.calculatePrice = function () {
  var pizzaPrice = this.size;
  this.toppings.forEach(function(topping){
    pizzaPrice += topping.price;
  });
  return pizzaPrice;
};


function makePizza(baseValue, toppingsArray){
  pizza = new Pizza(baseValue);
  var toppingObjectArray = toppingsArray.map(function(topping){
    var toppingInstance = new Topping(topping);
    return toppingInstance;
  });
  pizza.addToppings(toppingObjectArray);
  return pizza.calculatePrice();
};

//front end logic
function pizzaSizeAdjuster(sizeValue){
  if (sizeValue === "Small") {
    $("#pizza-img").css("width","50%");
  } else if (sizeValue === "Medium") {
    $("#pizza-img").css("width","70%");
  } else if (sizeValue === "Large") {
    $("#pizza-img").css("width","90%");
  } else {
    $("#pizza-img").css("width","30%");
  }
}

function pizzaCrustAdjuster(crustValue){
  if (crustValue === "Thin and Crispy") {
    $("#pizza-img").attr("src", "img/thin.png")
  } else if (crustValue === "Stuffed Crust") {
    $("#pizza-img").attr("src", "img/stuffed.png")
  } else {
    $("#pizza-img").attr("src", "img/pan.png")
  }
}

$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    var crust = parseInt($("#crust").val());
    var sauce = parseInt($("#sauce").val());
    var cheese = parseInt($("#cheese").val());
    var meat = parseInt($("#meat").val());
    var veggie = parseInt($("#veggie").val());
    var special = parseInt($("#special").val());
    var toppingsArray = [crust, sauce, cheese, meat, veggie, special];
    $("#result").text("$" + makePizza(parseInt($("#size").val()), toppingsArray));
  });
  $(".form-control").change(function(){
    pizzaSizeAdjuster($("#size option:selected").text());
    pizzaCrustAdjuster($("#crust option:selected").text())
  });
});
