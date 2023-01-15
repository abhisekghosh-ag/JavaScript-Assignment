let weight = prompt("Enter you weight (kg)");
let height = prompt("Enter you height (m2)");
const bmiResult = weight/(height*height);
if (bmiResult > 0 && bmiResult < 18.5) {
    alert(`Your BMI is :- ${bmiResult} you are Underweight !`)
} if (bmiResult >= 18.5 && bmiResult <= 24.9  ) {
    alert(`Your BMI is :- ${bmiResult} you are Normal!`)  
}
if (bmiResult > 24.9 && bmiResult <= 29.9 ) {
    alert(`Your BMI is :- ${bmiResult} you are Overweight!`)  
}
if (bmiResult > 30 ) {
    alert(`Your BMI is :- ${bmiResult} you are Obese!`)   
}