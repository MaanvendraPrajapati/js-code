const myArr=[1,2,4,"Hello"]

// for(let a of myArr){
//     console.log(a);
// }

myArr.push(6);
//console.log(myArr);

myArr.pop()

//console.log(myArr.includes("Hello"));
//console.log(myArr.indexOf(32));

const newArr=[32,132,3.4];
const arrConcat=myArr.concat(...newArr);
//console.log(arrConcat);


const new_arr=[7,1,2,3,4,5,6];
console.log(new_arr.sort())
console.log(Math.min(...new_arr));

const slice_arry=new_arr.slice(1,3);
// console.log("new_arr", new_arr);
// console.log("slice_srray", slice_arry);

const splice_arr=new_arr.splice(1,3);
// console.log("new_arr", new_arr);
// console.log("splice_arr", splice_arr);



