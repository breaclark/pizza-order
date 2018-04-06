function Pizza(size, baseValue) {
  this.name = size;
  this.size = baseValue;
  this.toppings = [];
};

function Topping(name, price) {
  this.name = name;
  this.price = price;
};

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

Pizza.prototype.listPizzaToppings = function () {
  var pizzaString = this.name + " ";
  this.toppings.forEach(function(topping){
    pizzaString += topping.name + "\n";
  });
  return pizzaString;
};

var pizza = new Pizza("Mini", 5);

function makePizza(size, baseValue, toppingsArray){
  pizza = new Pizza(size, baseValue);
  var toppingObjectArray = toppingsArray.map(function(topping){
    var toppingInstance = new Topping(topping[0], topping[1]);
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
    $(".sizing").css("width","38%");
    $(".sizing").css("margin-top","5%");
  } else if (sizeValue === "Medium") {
    $("#pizza-img").css("width","70%");
    $("#sauce-img").css("width","60%");
    $("#sauce-img").css("margin-top","4%");
    $(".sizing").css("width","55%");
    $(".sizing").css("margin-top","6%");
  } else if (sizeValue === "Large") {
    $("#pizza-img").css("width","90%");
    $("#sauce-img").css("width","75%");
    $("#sauce-img").css("margin-top","7%");
    $(".sizing").css("width","70%");
    $(".sizing").css("margin-top","9%");
  } else {
    $("#pizza-img").css("width","30%");
    $("#sauce-img").css("width","25%");
    $("#sauce-img").css("margin-top","2%");
    $(".sizing").css("width","23%");
    $(".sizing").css("margin-top","3%");
  }
};

function pizzaCrustAdjuster(crustValue){
  if (crustValue === "Thin and Crispy") {
    $("#pizza-img").attr("src", "img/thin.png");
  } else if (crustValue === "Stuffed Crust") {
    $("#pizza-img").attr("src", "img/stuffed.png");
  } else {
    $("#pizza-img").attr("src", "img/pan.png");
  }
};

function pizzaSauceAdjuster(sauceValue){
  if (sauceValue === "Barbecue") {
    $("#sauce-img").attr("src", "img/barbecue.png");
  } else {
    $("#sauce-img").attr("src", "img/marinara.png");
  }
};

function pizzaCheeseAdjuster(cheeseValue){
  if (cheeseValue === "Mozarella") {
    $("#cheese-img").attr("src", "img/mozarella.png");
  } else {
    $("#cheese-img").attr("src", "img/house.png");
  }
};

function pizzaMeatAdjuster(meatValue){
  $(".meat-img").hide();
  meatValue.each(function(){
    var meat = $(this).attr("id");
    if(meat === "pepperoni") {
      $("#pepperoni-img").show();
    }
    if(meat === "ham") {
      $("#ham-img").show();
    }
    if(meat === "bacon") {
      $("#bacon-img").show();
    }
  });
}

function pizzaVeggieAdjuster(veggieValue){
  $(".veggie-img").hide();
  veggieValue.each(function(){
    var veggie = $(this).attr("id");
    if(veggie === "mushrooms") {
      $("#mushroom-img").show();
    }
    if(veggie === "olives") {
      $("#olive-img").show();
    }
    if(veggie === "tomatoes") {
      $("#tomato-img").show();
    }
  });
};

function pizzaSpecialAdjuster(specialValue){
  $(".special-img").hide();
  specialValue.each(function(){
    var special = $(this).attr("id");
    if(special === "avocado") {
      $("#avocado-img").show();
    }
    if(special === "garlic") {
      $("#garlic-img").show();
    }
    if(special === "potatoes") {
      $("#potatoes-img").show();
    }
  });
};

$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    var crust = [$("#crust option:selected").text() , parseInt($("#crust").val())];
    var sauce = [$("#sauce option:selected").text() , parseInt($("#sauce").val())];
    var cheese = [$("#cheese option:selected").text() ,parseInt($("#cheese").val())];
    var toppingsArray = [crust, sauce, cheese];
    $("input:checkbox[name=meat]:checked").each(function(){
      var meat = [$(this).attr("id") ,parseInt($(this).val())];
      toppingsArray.push(meat);
    });
    $("input:checkbox[name=veggie]:checked").each(function(){
      var veggie = [$(this).attr("id") ,parseInt($(this).val())];
      toppingsArray.push(veggie);
    });
    $("input:checkbox[name=special]:checked").each(function(){
      var special = [$(this).attr("id") ,parseInt($(this).val())];
      toppingsArray.push(special);
    });
    $("#result").text("Order Total: $" + makePizza($("#size option:selected").text(), parseInt($("#size").val()), toppingsArray));
  });

  $(".form-control").change(function(){
    $("#pizza-order").submit();
    pizzaSizeAdjuster($("#size option:selected").text());
    pizzaCrustAdjuster($("#crust option:selected").text());
    pizzaSauceAdjuster($("#sauce option:selected").text());
    pizzaCheeseAdjuster($("#cheese option:selected").text());
    pizzaMeatAdjuster($("input:checkbox[name=meat]:checked"));
    pizzaVeggieAdjuster($("input:checkbox[name=veggie]:checked"));
    pizzaSpecialAdjuster($("input:checkbox[name=special]:checked"));
  });

  $("#pizza-result").hover(function(){
    console.log(pizza.listPizzaToppings());
    $("#pizza-result").attr("data-content",pizza.listPizzaToppings());
    $("#pizza-result").popover('show');
  });
});
