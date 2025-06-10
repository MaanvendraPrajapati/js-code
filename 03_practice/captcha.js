let characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

let captcha="";

for(let i=0;i<6;i++){
    let charIndex=Math.floor(Math.random()*characters.length);
    captcha=captcha+characters.charAt(charIndex);
}
console.log(captcha);