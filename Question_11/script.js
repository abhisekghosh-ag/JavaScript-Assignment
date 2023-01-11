const now = new Date();

console.log("Today is year of", now.getFullYear()); //2023
console.log("Today is month of", now.getMonth()); // jan = 0, feb =1
console.log("Today is date of", now.getDate()); // 11
console.log("Today is day as number :", now.getDay()); // Sun = 0, Mon = 1
console.log("Today is date of", now.getDate()); // 11
console.log("What is the hours now? : ", now.getHours()); // like 10 ,11, 12AM = 0
console.log("What is the minutes now? : ", now.getMinutes());



const someday = new Date("January 1, 1970 00:00:00");
console.log(someday.toString()); 
const result = Date.now() - someday ;
console.log("second elapsed from January 1, 1970 to now : ", Math.floor(result/1000));
