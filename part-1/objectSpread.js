const address={
    country:"NEPAL",
    city:"htd",
    zipCode:44600
};
const name={
    fname:"ramhari",
    lname:"pandy"
};
const person={...address,...name};
console.log(JSON.stringify(person,null,2))
console.log(JSON.stringify(person))