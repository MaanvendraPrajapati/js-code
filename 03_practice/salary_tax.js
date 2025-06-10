function calculateTax(salary){
    let totalTax=0;

    let rate_slabs=[
        {start: 0, end:5, rate:0.05},
        {start:5, end:10, rate:0.10},
        {star:10, end:15, rate:0.15}
    ]

    rate_slabs.forEach((slab)=>{
        let start_salary= (slab.start/100)*salary;
        let end_salary=(slab.end/100)*salary;

        if(salary>start_salary){
            let tax= end_salary-start_salary;
            totalTax=totalTax+(tax*slab.rate);
        }
    });
    return totalTax;
}

console.log(calculateTax(500000))