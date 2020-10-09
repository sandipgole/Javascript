//part 1

const getUser= ()=>{

    return{
        name:'test',
        surname:'gole',
        address:{
            city:'htd',
            detail:{
                ward:'2'
            }
            
        }
    }
}

const user =getUser();
const {name:myName,surname:mySurname}=user;
const {address:{city:country}}=user;
const {address:{detail:{ward:number}}}=user;
console.log(`${myName} and ${mySurname} ${country} ${number}`)
