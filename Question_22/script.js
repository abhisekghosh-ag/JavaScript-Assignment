const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] ;

ages.sort();
console.log(ages);

const min = Math.min.apply(Math,ages) ;
// const min = Math.min(...ages) //numeric expression to be evaluted 

// const max = Math.max.apply(Math,ages);
const max = Math.max(...ages);

const median =( ages[(ages.length - 2)/2] +ages[Math.floor((ages.length - 3)/ 2)]) / 2 ;

console.log(`Minimum age of this array is : ${min}`);
console.log(`Maximum age of this array is : ${max}`);

console.log(`median age from this array is : ${median}`);

let avg = 0 ;
for (const age of ages) {
    avg = avg + age ;
}
const average = avg/ages.length ;
console.log(`Average age is : ${average}`); // avg age >> 22.8

console.log(`Ranges of ages is : ${max - min}`); // range


console.log(`Before using abs () : ${(min - average)}`);
console.log(`Before using abs () : ${(max - average)}`);

console.log(`After using abs () : ${Math.abs(min - average)}`);
console.log(`After using abs () : ${Math.abs(max - average)}`);

