let n = 3;
let star ='';
for (let i = 0; i < n; i++){

    for(let j = 0; j < n - i; j++){
        star += ' ' //for spaces
    }
    for(let k = 0; k < 2*i +1 ; k++){
        star += '*';
    }
    star += '\n';
}
console.log(star);