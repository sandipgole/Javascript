var person={
    name:"ram",
    age:40,
    country:"Nepal",
    address:{
        city:"ktm",
        homeNumber:7

    }

};
/*console.log(JSON.stringify(person));
// console.log(person.name);
// console.log(person.age);
console.log(Object.values(person));*/

var student={
    name:"sandip",
    age:19,
    address:{
        city:"htd",
        ward:2
    }
};
console.log(JSON.stringify(student));
console.log(Object.values(student));
console.log(student.address);
console.log(student.address);


var employee={
    name:"hari",
    age:20,
    city:{
        name:"ktm",
        ward:2
    }

}
console.log(JSON.stringify(employee))