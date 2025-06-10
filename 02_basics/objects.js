const mySym= Symbol("Hello");

const jsUser={
    "name": "Maanvendra",
    "age": 25,
    "location": "Orai",
    "isLoggedIn": false,
    [mySym]: "hello world"
}
console.log(jsUser);

console.log(jsUser.location);
console.log(jsUser['name']);
