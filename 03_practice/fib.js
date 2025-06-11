function fib(nums){
    if(nums==0){
        return [];
    }
    if(nums==1){
        return [0];
    }

    let res=[0,1];

    while(res.length<nums){
        let next=res[res.length-1]+res[res.length-2];
        res.push(next);
    }
    return res;
}

console.log(fib(5));