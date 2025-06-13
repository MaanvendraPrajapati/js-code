function calculate(num){
    if(num==0 || num==1){
        return 1;
    }else{
        return num*calculate(num-1);
    }
    
}

console.log(calculate(5))