var toppings = ['pepperoni', 'mushrooms', 'chilli'];
var pizzaName = 'Pepperoni';
for (var _i = 0, pizzaName_1 = pizzaName; _i < pizzaName_1.length; _i++) {
    var letter = pizzaName_1[_i];
    console.log(letter);
}
for (var i = 0; i < toppings.length; i++) {
    console.log(toppings[i]);
}
toppings.forEach(function (topping) { return console.log(topping); });
for (var _a = 0, toppings_1 = toppings; _a < toppings_1.length; _a++) {
    var topping = toppings_1[_a];
    console.log(topping);
}
