function Pizza(size, baseValue) {
  this.size = size;
  this.extras = [];
  this.price = baseValue;
};

Pizza.prototype.calculatePrice = function () {

};


function makePizza(size, baseValue, toppings){
  pizza = new Pizza(size,baseValue);
  return pizza.price;
};



//front end logic
$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    console.log(makePizza("mini", $("#size").val(), "nothing"));
  });
});
