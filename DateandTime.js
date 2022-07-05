console.log(`date and time`);
let today = new Date();
let modified_date = new Date(`2-26-2003 04:34:59`);
console.log(today);
console.log(modified_date);
let getDay;
getDay = today.getDay();
getDay = today.getDate();
getDay = today.getMonth();
getDay = today.getHours();
getDay = today.getMinutes();
// getDay = today.getTime();
console.log(getDay);
let setDay;
 modified_date.setDate(3);
 modified_date.setMonth(3);
console.log(modified_date);

