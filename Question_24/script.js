let even = [];  // create an empty array
let odd = [];   // create an empty array
for (let i = 0; i <= 100; i++)
{
    if (i % 2 === 0) {
        even.push(i); //add every even element
    } else {
        odd.push(i) // add every odd element
    }
}
console.log(even);
console.log(odd);