var evenNumbers=[1,2,3,4,5,6,7,8,9,10].filter(function(n){
    return n%2==0;
})

console.log(evenNumbers);

var oddNumbers=[1,2,43,4,5,6,7,8,9,10].filter(function(n){
    return n%2!==0;
})
console.log(oddNumbers);