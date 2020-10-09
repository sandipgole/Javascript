class Animal{
    constructor(name,age)
    {
        console.log(`${name} created..`)
        this.name=name;
        this.age=age;
    }

    static demo()
    {
        console.log("this is static methode")
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
// class Dog extends Animal{
//     constructor(name,age,breed)
//     {
//         super(name,age)
//         this.breed=breed;
//     }

//     logBreed()
//     {
//         console.log(`${this.breed} is breed`)
//     }

//     logSuper()
//     {
//         super.showAge();
//         super.eat();
//     }
    
// }
// const sheru=new Dog('sheru',2 ,'bulldog')
// sheru.logBreed();
// sheru.eat();
// sheru.showAge()

// console.log(`--------------`)
// const puppy =new Dog('puppy',3,'shephard')
// puppy.logSuper()
Animal.demo();
