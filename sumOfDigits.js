let n = 5;
let arr = [12, 14, 16, 17, 29];
let sum = 0;
for(let i = 0; i<n; i++){
 
    while(arr[i] > 0){
      sum = parseInt(sum + parseInt(arr[i] % 10));
      arr[i] = parseInt(arr[i]/10);
    }
}
console.log(sum);