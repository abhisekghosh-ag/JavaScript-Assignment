function mulTable(number) {

    console.log(`Multiplication table of ${number}`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    } 
}

mulTable(5)