console.log("object spread operator");
const name={
    fname:'sandip',
    lname:'gole'
};
const address={
    city:'htd',

}
const student={...name,...address};
console.log(JSON.stringify(student,null,2));