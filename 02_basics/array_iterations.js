const arr=[1,2,3,4,5,6,7,8,9,10];

// arr.forEach((item)=>{
//     console.log(item);
// })

// for(let i=0; i<arr.length;i++){
//     console.log(arr[i]);
// }

let nums = arr.filter((item)=>item>5)
console.log(nums)

let new_nums=arr.map((item)=> item*2);
console.log(new_nums);