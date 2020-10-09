const person={
    name:'sandip',
    cars:['audi','mercedez','hyundai'],
    toString:function () {
        console.log(`${this.name} has ${this.cars}`)
    }
}
person.toString();
const info={
    name:'hari',
    cars:['ferrari','hyundai','bmw'],
    show:function () {
        console.log(`${this.name} has ${this.cars}`)
        
    }
}
info.show();