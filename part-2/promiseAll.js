const namesPromise=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(['sandip','manish','hari','rita'])

    },3000);

    setTimeout(()=>
    {
        reject(" no data back from server error")

    },5000);
})

const surnamesPromise=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve(['gole','sapkota','acharya','nepali'])

    },3000);

    setTimeout(()=>
    {
        reject(" no data back from server error")

    },5000);
})
Promise.all([namesPromise,surnamesPromise]).then(data=>{
    const [names,surnames]=data;
    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        const surname=surnames[index];
        console.log(`${name} ${surname}`)
    }
}).catch(Error=>{
    console.log(Error);
})