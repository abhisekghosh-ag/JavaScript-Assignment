const today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let hours = today.getHours() ;
let min = today.getMinutes();

if (month < 10) {
    month = '0'+ month;
}
if (date < 10) {
    date = '0'+ date;
}
if (hours < 10) {
    hours = '0'+ hours;
}
if (min < 10) {
    min = '0'+ min;
}
if (hours > 12) {
    hours ='0' + (hours - 12);
}
console.log(`${year}-${month}-${date} ${hours}:${min}`); //YYYY-MM-DD HH:mm
console.log(`${date}-${month}-${year} ${hours}:${min}`); //DD-MM-YYYY HH:mm
console.log(`${month}-${date}-${year} ${hours}:${min}`); //MM-DD-YYYY HH:mm
