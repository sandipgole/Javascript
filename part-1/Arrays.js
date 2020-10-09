var names=["ram","hari","sita","gita"];
var address=["ktm","pokhara","htd","birgunj"];
var roll=[1,2,3,4];
console.log(names);
console.log(address);
console.log(roll);

for(var n of names)
{
    console.log(n);

}
console.log();
for (var n of address)
{
    console.log(n);
}
roll.forEach(function(n,index)
{
    console.log(index+" "+n);
});

names.forEach(function(n,index)
{
    console.log(index+" "+n);
});

address.forEach(function(n,index)
{
    console.log(index+" "+n);
});