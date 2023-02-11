const fibo= (n)=>{
    if(n <= 2) return 1
    return fibo(n-1) + fibo(n-2)
}
console.log(fibo(13))      