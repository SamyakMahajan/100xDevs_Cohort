const user1={
    fname:"Samyak",
    gender:'Male'
}

console.log(user1["fname"])

let users=[
    user1,
    {
        fname:"Sam",
        gender:'Male'
    },
    {
        fname:"Mam",
        gender:'Female'
    },
    {
        fname:"Sally",
        gender:'Female'
    }
]

console.log(users)

for(let i=0;i<users.length;i++){
    if(users[i]['gender']=='Female')
    console.log(users[i]['fname'])
}