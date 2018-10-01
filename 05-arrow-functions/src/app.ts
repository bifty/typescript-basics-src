const pizzas = [
  { name: 'Pepperoni', toppings: ['pepperoni'] },
  { name: 'Salami', toppings: ['salami'] },
  { name: 'Hawai', toppings: ['ananas, schinken'] },
];

const mappedPizzas = pizzas.map((pizza, index) => {
  const pName = index + ' ' + pizza.name.toUpperCase();
  return pName;
});

const mappedPizzas_small = pizzas.map(pizza => pizza.name);

console.log(mappedPizzas);
console.log(mappedPizzas_small);
