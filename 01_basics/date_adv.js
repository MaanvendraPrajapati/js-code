let cur_date=new Date();
console.log(cur_date)

let year=cur_date.getFullYear();
let month=cur_date.getMonth();
let date=cur_date.getDate();
let dayOfWeek=cur_date.getDay();

console.log(year,month,date,dayOfWeek);


cur_date.setFullYear(2024);
cur_date.setMonth(0);
cur_date.setDate(1);

console.log(cur_date);