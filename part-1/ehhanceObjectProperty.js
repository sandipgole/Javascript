const pricePropName="PRICE";
const calculator=(name,price)=>{
    return{
        name,
        add(n1,n2)
        {
            return n1+n2;
        },
        [pricePropName.toLowerCase()]:price
    }
}

const calc=calculator('casio',2020);
console.log(calc.name);
console.log(calc.price);
console.log(calc.add(20,20));

