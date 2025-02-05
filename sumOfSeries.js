function sumOfSeries(N, X) {
    // Write code here   
    if(N <= 0 || X <= 0){
      console.log(-1);
      return;
    }
    var sum = 1+X;
    
    for(let i = 2; i< N; i++){
      var temp = 1;
      let j = i;
      while(j--){
        temp *= X;
      }
      sum += temp;
    }
    console.log(sum);
}
sumOfSeries(3, 2)