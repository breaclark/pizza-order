function Pizza(baseValue) {
  this.toppings = [];
  this.size = baseValue;
};

function Topping(name, price) {
    this.name = name;
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


function makePizza(baseValue, toppings){
  pizza = new Pizza(baseValue);
  return pizza.calculatePrice();
};



//front end logic
$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    console.log(makePizza($("#size").val(), "nothing"));
  });
});
