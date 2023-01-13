let countries = ['India', 'USA', 'Nepal', 'Russia', 'China'];
console.log(countries.includes('Ethiopia')); //false
countries.push('Ethiopia');

console.log(countries.includes('Ethiopia')); //true

countries[countries.length - 1] = countries[countries.length - 1].toUpperCase(); // Ethiopia >> ETHIOPIA
console.log(countries);