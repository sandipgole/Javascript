class Animal{
    constructor(name,age)
    {
        console.log(`${name} created..`)
        this.name=name;
        this.age=age;
    }
    eat()
    {
        console.log(`${this.name} is eating`)
    }
    showAge()
    {
        console.log(`${this.name} is ${this.age} years old`)
    }
}
const dog=new Animal("puppy",2);
dog.eat();
dog.showAge();

console.log(`---------------------`)
const cat=new Animal("tom",3)
cat.eat();
cat.showAge();