const names=['ram','hari','sita','gita','rita'];
const [a, ,b, ...restOfNames]=names;
console.log(restOfNames)
console.log(`${a} and ${b}`);