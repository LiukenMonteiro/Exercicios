let pizzas = ['4 queijos', 'Frango com Catupiry', 'Maguerita', 'Palmito', 'Chocolate'];

pizzas.push('Peito de peru');
pizzas.push('Gratinada');

for(let index = 0; index < pizzas.length; index += 1){
    console.log(pizzas[index]);
}

console.log(pizzas.length);

console.log(pizzas[0]);

pizzas.pop();

console.log(pizzas[pizzas.length-1]);

