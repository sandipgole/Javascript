async function logName(name)
{
    console.log(name)
    const trasform =new Promise((resolve,reject)=>
    {
        setTimeout(() => {
            resolve(name.toUpperCase())
        }, 1000);
    })
    const result=await trasform;
    return result;

}
logName("sandip").then(res=>
    {
        console.log(`From promise  `+res)
    })//returns promises