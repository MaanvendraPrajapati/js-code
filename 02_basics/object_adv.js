const tinderUser={};

tinderUser.id=132;
tinderUser.name="Sam";

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'))


const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}

//const obj3=Object.assign({},obj1, obj2);
const obj3={...obj1,...obj2};
// console.log(obj3);


const course={
    coourse_name:"js",
    course_instructor: "hitesh"
}

const{coourse_name}= course
const{course_instructor: instructor}= course

console.log(instructor)
console.log(coourse_name)