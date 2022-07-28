function F(n){
  if(n === 0){
    return 1;
  }
  else if(n>0){
    return n * F(n-1);
  }
  else{
    return -1;
  }  
}

window.alert('0! = ' + F(0));
window.alert('5! = ' + F(5));