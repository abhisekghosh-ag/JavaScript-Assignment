
function gradeCheck(scores) {
    if (scores >= 0 && scores < 50) {
        console.log("sorry! You got Grade F");
    }
    if (scores >= 50 && scores < 60) {
        console.log(" You got Grade D , need alots of hardwork!");
    }
    if (scores >= 60 && scores < 70) {
        console.log(" You got Grade C,study harder!");
    }
    
    if (scores >= 70 && scores < 80) {
        console.log(" You got Grade B,study a bit harder!");
    }
    if (scores >= 80 && scores <= 100) {
        console.log("Congratulations! you got Grade A ");
    }
}

gradeCheck(49);  // Grade F
gradeCheck(60);  // Grade C
gradeCheck(79);  // Grade B
gradeCheck(80);  // Grade A

