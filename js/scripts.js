function Pizza(size) {
  this.size = size;
  this.extras = [];
  this.price = 5;
}


function makePizza(size, toppings){
  pizza = new Pizza(size);
  return pizza.price;
}



//front end logic
$(document).ready(function() {
  $("#pizza-order").submit(function(event){
    event.preventDefault();
    console.log(makePizza("mini","nothing"));
  });
});
