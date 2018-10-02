const pizza = {
    name: 'Pepperoni',
};

const toppings = ['pepperoni', 'bacon', 'chilli'];

const order = Object.assign({}, pizza, { toppings });

const spreadOrder = { ...pizza, toppings };

console.log(order, spreadOrder);

// eigenes 1 - destructuring objects
const pizza_ggr = {
    name: 'Pepperoni',
    toppings: ["pepperoni", "salami"],
};

function order_ggr({ name: pizzaName, toppings: pizzaToppings }) {
    return { pizzaName, pizzaToppings };
}

const { pizzaName } = order_ggr(pizza_ggr);

// eigenes 2 - destructuring arrays
const toppings_ggr = ["pepperoni", "bacon", "salami", "fish", "ananas"];

const [first, second, third, ...last] = toppings_ggr;
console.log(first, second, third);
console.log(last);

// eigenes 3
function logToppings([first, second, third]: any) {
    console.log(first, second, third);
}

logToppings(toppings);