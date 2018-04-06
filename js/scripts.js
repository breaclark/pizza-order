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


function makePizza(baseValue, toppingArray){
  pizza = new Pizza(baseValue);
  pizza.addToppings(toppingArray);
  return pizza.calculatePrice();
};

//front end logic
$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    var crust = new Topping("crust", parseInt($("#crust").val()));
    var sauce = new Topping("sauce", parseInt($("#sauce").val()));
    var cheese = new Topping("cheese", parseInt($("#cheese").val()));
    var meat = new Topping("meat", parseInt($("#meat").val()));
    var veggie = new Topping("veggie", parseInt($("#veggie").val()));
    var special = new Topping("special", parseInt($("#special").val()));
    var toppingsArray = [crust, sauce, cheese, meat, veggie, special]
    console.log(makePizza(parseInt($("#size").val()), toppingsArray));
  });
});
