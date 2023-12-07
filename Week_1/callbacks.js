function findSum(a,b){
    return a+b;
}
function findans(a,b,fun){
    return fun(a,b);
}

console.log(findans(3,4,findSum))

for (let i=30;i>=0;i--){
    console.log(i)
    setTimeout(1000)
}