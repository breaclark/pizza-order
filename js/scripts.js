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
    $("#sauce-img").css("width","40%");
    $("#sauce-img").css("margin-top","4%");
    $("#cheese-img").css("width","38%");
    $("#cheese-img").css("margin-top","5%");
  } else if (sizeValue === "Medium") {
    $("#pizza-img").css("width","70%");
    $("#sauce-img").css("width","60%");
    $("#sauce-img").css("margin-top","4%");
    $("#cheese-img").css("width","55%");
    $("#cheese-img").css("margin-top","6%");
  } else if (sizeValue === "Large") {
    $("#pizza-img").css("width","90%");
    $("#sauce-img").css("width","75%");
    $("#sauce-img").css("margin-top","7%");
    $("#cheese-img").css("width","70%");
    $("#cheese-img").css("margin-top","9%");
  } else {
    $("#pizza-img").css("width","30%");
    $("#sauce-img").css("width","25%");
    $("#sauce-img").css("margin-top","2%");
    $("#cheese-img").css("width","23%");
    $("#cheese-img").css("margin-top","3%");
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

function pizzaSauceAdjuster(sauceValue){
  if (sauceValue === "Barbecue") {
    $("#sauce-img").attr("src", "img/barbecue.png")
  } else {
    $("#sauce-img").attr("src", "img/marinara.png")
  }
}

function pizzaCheeseAdjuster(cheeseValue){
  if (cheeseValue === "Mozarella") {
    $("#cheese-img").attr("src", "img/mozarella.png")
  } else {
    $("#cheese-img").attr("src", "img/house.png")
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
    pizzaCrustAdjuster($("#crust option:selected").text());
    pizzaSauceAdjuster($("#sauce option:selected").text());
    pizzaCheeseAdjuster($("#cheese option:selected").text());
  });
});
