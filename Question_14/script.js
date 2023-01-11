function evenOrOdd(number) {
    if (number / 2 && (number % 2 == 0)) {
        console.log(number, " is a even number");
    }
    else{
        console.log(number, " is a odd number");
    }
}

evenOrOdd(90); // even number
evenOrOdd(21); // odd number
evenOrOdd(75); // odd number
evenOrOdd(42); // even number

