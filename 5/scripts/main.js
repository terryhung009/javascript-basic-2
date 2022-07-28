var str1 = '', str2 = '';
for(var i = 1; i <= 9 ; i++){
  str1 = '';
  for(var j =1 ; j <= 9 ; j++){
    if ((i * j) > 40){
      break;
    }
    str1 = str1 +i +'*' + j + '=' + (i* j) + '\t';

  }
  str2 = str2 +str1+'\n';
}
window.alert(str2);
