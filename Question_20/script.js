const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.unshift('Meat'); // 'Meat' added

console.log(shoppingCart); 

console.log(shoppingCart.includes('Sugar')); //false  
shoppingCart.push('Sugar');
console.log(shoppingCart); 

shoppingCart.splice(shoppingCart.length-2,1); //removed 'Honey'
console.log(shoppingCart); 

console.log(shoppingCart.indexOf('Tea')); // here how we know tea's index no = 3

shoppingCart[3] = 'Green Tea'; // modified Tea to 'Green Tea'
console.log(shoppingCart); 
