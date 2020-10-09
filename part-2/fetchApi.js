const getRandomUsers=n=>{
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
}
getRandomUsers(10)
