
function solve(n){
    if(n == 2)return 2;
    if(n == 1)return 1;
    return n * solve(n-1); 
}
console.log(solve(5));