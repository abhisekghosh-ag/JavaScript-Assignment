let userAge = prompt("Enter your age :");

if (userAge >= 18) {
    // console.log('You are old enough to drive');
    alert("You are old enough to drive")
} else {
    alert(`Just wait for ${18 - userAge} years only .`)
}