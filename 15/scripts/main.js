function change(x){
  x.score = 100;
}

var a = {score : 1};
window.alert(a.score);
change(a);
window.alert(a.score);