var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var pizza = {
    name: 'Pepperoni',
};
var toppings = ['pepperoni', 'bacon', 'chilli'];
var order = Object.assign({}, pizza, { toppings: toppings });
var spreadOrder = __assign({}, pizza, { toppings: toppings });
console.log(order, spreadOrder);
// eigenes 1
var pizza_ggr = {
    name: 'Pepperoni',
    toppings: ["pepperoni", "salami"],
};
function order_ggr(_a) {
    var pizzaName = _a.name, pizzaToppings = _a.toppings;
    return { pizzaName: pizzaName, pizzaToppings: pizzaToppings };
}
var pizzaName = order_ggr(pizza_ggr).pizzaName;
// eigenes 2
var toppings_ggr = ["pepperoni", "bacon", "salami", "fish", "ananas"];
var first = toppings_ggr[0], second = toppings_ggr[1], third = toppings_ggr[2], last = toppings_ggr.slice(3);
console.log(first, second, third);
console.log(last);
// eigenes 3
function logToppings(_a) {
    var first = _a[0], second = _a[1], third = _a[2];
    console.log(first, second, third);
}
logToppings(toppings);
logToppings(toppings_ggr);
