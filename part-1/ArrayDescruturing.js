const names=['ram','hari','sita','gita']
const [a,b, ...rest]=names;
console.log(`${a} and ${b}`)
console.log(rest);

const cars=['audi','mercedez','ferrari']
const [first, ,third]=cars;
console.log(`${first} and ${third}`)