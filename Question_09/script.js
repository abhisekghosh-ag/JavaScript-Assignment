
function truthyOrFalsy(num) {
    if (num) {
        console.log(num," is a truthy value");
    } else {
        console.log(num," is a falsy value");
    }
}

// truthy value
let number = 100;
truthyOrFalsy(number)

number = '0';  // 0 is a falsy value but '0' is a string value
truthyOrFalsy(number)

number = function () {} // empty fun is also a truthy value
truthyOrFalsy(number)

// falsy value

let newNumber ; //undefined
truthyOrFalsy(newNumber)

newNumber = 0; // 0 is a falsy value
truthyOrFalsy(newNumber)

newNumber = '';
truthyOrFalsy(newNumber)

/*
these are falsy value 
// undefined 
// null
// 0
// ''
// NaN

*/