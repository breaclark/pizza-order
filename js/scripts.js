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
    $("#cheese-img, #meat-img, #veggie-img, #special-img").css("width","38%");
    $("#cheese-img, #meat-img, #veggie-img, #special-img").css("margin-top","5%");
  } else if (sizeValue === "Medium") {
    $("#pizza-img").css("width","70%");
    $("#sauce-img").css("width","60%");
    $("#sauce-img").css("margin-top","4%");
    $("#cheese-img, #meat-img, #veggie-img, #special-img").css("width","55%");
    $("#cheese-img, #meat-img, #veggie-img, #special-img").css("margin-top","6%");
  } else if (sizeValue === "Large") {
    $("#pizza-img").css("width","90%");
    $("#sauce-img").css("width","75%");
    $("#sauce-img").css("margin-top","7%");
    $("#cheese-img, #meat-img, #veggie-img, #special-img").css("width","70%");
    $("#cheese-img, #meat-img, #veggie-img, #special-img").css("margin-top","9%");
  } else {
    $("#pizza-img").css("width","30%");
    $("#sauce-img").css("width","25%");
    $("#sauce-img").css("margin-top","2%");
    $("#cheese-img, #meat-img, #veggie-img, #special-img").css("width","23%");
    $("#cheese-img, #meat-img, #veggie-img, #special-img").css("margin-top","3%");
  }
}

function pizzaCrustAdjuster(crustValue){
  if (crustValue === "Thin and Crispy") {
    $("#pizza-img").attr("src", "img/thin.png");
  } else if (crustValue === "Stuffed Crust") {
    $("#pizza-img").attr("src", "img/stuffed.png");
  } else {
    $("#pizza-img").attr("src", "img/pan.png");
  }
}

function pizzaSauceAdjuster(sauceValue){
  if (sauceValue === "Barbecue") {
    $("#sauce-img").attr("src", "img/barbecue.png");
  } else {
    $("#sauce-img").attr("src", "img/marinara.png");
  }
}

function pizzaCheeseAdjuster(cheeseValue){
  if (cheeseValue === "Mozarella") {
    $("#cheese-img").attr("src", "img/mozarella.png");
  } else {
    $("#cheese-img").attr("src", "img/house.png");
  }
}

function pizzaMeatAdjuster(meatValue){
  console.log(meatValue);
  meatValue.each(function(){
    var veggie = $(this).attr("id");
    console.log(veggie);
  });
  // if (meatValue === "Pepperoni") {
  //   $("#meat-img").show();
  //   $("#meat-img").attr("src", "img/pepperoni.png")
  // } else if (meatValue === "Ham") {
  //   $("#meat-img").show();
  //   $("#meat-img").attr("src", "img/ham.png")
  // } else if (meatValue === "Bacon") {
  //   $("#meat-img").show();
  //   $("#meat-img").attr("src", "img/bacon.png")
  // } else {
  //   $("#meat-img").attr("src", "");
  //   $("#meat-img").hide();
  // }
}

function pizzaVeggieAdjuster(veggieValue){
  // if (veggieValue === "Mushrooms") {
  //   $("#veggie-img").show();
  //   $("#veggie-img").attr("src", "img/mushroom.png")
  // } else if (veggieValue === "Olives") {
  //   $("#veggie-img").show();
  //   $("#veggie-img").attr("src", "img/olive.png")
  // } else if (veggieValue === "Tomatoes") {
  //   $("#veggie-img").show();
  //   $("#veggie-img").attr("src", "img/tomato.png")
  // } else {
  //   $("#veggie-img").attr("src", "");
  //   $("#veggie-img").hide();
  // }
}

function pizzaSpecialAdjuster(specialValue){
  // if (specialValue === "Avocado") {
  //   $("#special-img").show();
  //   $("#special-img").attr("src", "img/avocado.png")
  // } else if (specialValue === "Garlic") {
  //   $("#special-img").show();
  //   $("#special-img").attr("src", "img/garlic.png")
  // } else if (specialValue === "Sliced Potatoes") {
  //   $("#special-img").show();
  //   $("#special-img").attr("src", "img/potato.png")
  // } else {
  //   $("#special-img").attr("src", "");
  //   $("#special-img").hide();
  // }
}

$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    var crust = parseInt($("#crust").val());
    var sauce = parseInt($("#sauce").val());
    var cheese = parseInt($("#cheese").val());
    var toppingsArray = [crust, sauce, cheese];
    $("input:checkbox[name=meat]:checked").each(function(){
      var meat = parseInt($(this).val());
      toppingsArray.push(meat);
    });
    $("input:checkbox[name=veggie]:checked").each(function(){
      var veggie = parseInt($(this).val());
      toppingsArray.push(veggie);
    });
    $("input:checkbox[name=special]:checked").each(function(){
      var special = parseInt($(this).val());
      toppingsArray.push(special);
    });
    $("#result").text("$" + makePizza(parseInt($("#size").val()), toppingsArray));
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
});
