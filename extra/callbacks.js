function callBackExample(name,callback)
{
    console.log(callback(name))
}
callBackExample("Sandip gole",function(name)
{
    return "Hello "+name;
})

