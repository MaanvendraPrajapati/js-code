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

console.log(cur_date); //2024-01-01T05:24:21.752Z
console.log(cur_date.toDateString()); //Mon Jan 01 2024
console.log(cur_date.toLocaleDateString()) //1/1/2024
console.log(cur_date.toString()); //Mon Jan 01 2024 05:24:21 GMT+0000 (Coordinated Universal Time)
console.log(cur_date.toTimeString()); //05:24:21 GMT+0000 (Coordinated Universal Time)
console.log(cur_date.getTime()); //1704087081908


const myTimeStamp=Date.now();
console.log(myTimeStamp); //Milliseconds 1749878985269
