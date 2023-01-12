const month = prompt("Enter a month name :-");
const x = month.charAt(0).toUpperCase();
const y = month.slice(1, month.length).toLowerCase();
const Month = x + y;
if ('January' === Month || 'March' === Month || 'May' === Month || 'July' === Month || 'August' === Month || 'October' === Month || 'December' === Month) {
    alert(`${Month} has 31 days`)
}
else if ('February' === Month) {
    alert(`${Month} has 28 days`);
}
else if ('April' === Month || 'June' === Month || 'September' === Month || 'November' === Month) {
    alert(`${Month} has 30 days`)
}
else {
    alert(`Wrong input!`);
}

// alert(checkDays(Month))