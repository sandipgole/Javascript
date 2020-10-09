const pricePropName="PRICE"

const calculator=(name,price) =>{
    return{
        name,
        add(n1,n2)
        {
            return n1+n2;
        },
        sub(a,b)
        {
            return a-b;
        },
        [pricePropName.toLowerCase()]:price
    }
}
const calc=calculator('yasuda','20.00');
console.log(calc.name)
console.log(calc.add(20,20));
console.log(calc.sub(100,50));
console.log(calc.price);
