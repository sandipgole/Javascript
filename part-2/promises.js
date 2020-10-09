const promise=new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("data back from server")

    },3000);

    setTimeout(()=>
    {
        reject(" no data back from server error")

    },5000);
})
promise.then(Response=>
    {
        console.log(Response);
    }).catch(error=>{
        console.log(error)
    })