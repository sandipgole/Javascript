const calculate= (salary,bonus=0)=>
salary+bonus;
console.log(calculate(5000));

const officePay=(monthlySalary,monthlybonus={
    teamBonus:0,
    empBonus:0
})=>
{

    return monthlySalary+monthlybonus.teamBonus+monthlybonus.empBonus;
    
}

console.log(officePay(1000,{teamBonus:90,empBonus:10}));