function callBackExample(name,callback)
{
    console.log(callback(name));
}
callBackExample("sandip gole",function(name)
{
    return "HEllo "+name;
});


function callback2(address,callback)
{
    console.log(callback(address));
}
callback2("kathmandu",function(address)
{
    return "My location is "+address;
});


function callback3(pet,callback)
{
    console.log(callback(pet))
}
callback3("cat",function(pet)
{
    return "My favorite pet is "+pet;
})