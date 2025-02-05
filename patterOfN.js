let N = 3;
let s = ""
for(let i = 1; i<=N*N; i++){
  if(s.length < N){
    s+=i;
  }
  if(s.length == N){
    let ans = ""
    for(let i = 0; i<N-1; i++)ans+=s[i] + " ";
    ans += (s[N-1]);
    console.log(ans);
    s="";
  }
  //console.log(s, s.length)
}
