
const Month = prompt('Enter a month name :-');
const x = Month.charAt(0).toUpperCase();
const y = Month.slice(1, Month.length).toLowerCase();
const month = x + y;

if ('December' === month || 'January' === month || 'February' === month) {
    alert(`${month} means Winter season!`)
}
else if ('March' === month || 'April' === month || 'May' === month) {
    alert(`${month} means Spring season!`)
}
else if ('June' === month || 'July' === month || 'August' === month) {
    alert(`${month} means Summer season!`)
}
else if ('September' === month || 'October' === month || 'November' === month) {
    alert(`${month} means Autumn season!`)
}
else {
    alert('Wrong input!')
}