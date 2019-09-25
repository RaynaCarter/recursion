
function start(){
  var input= document.getElementById('input').value;
  var funct= document.getElementById('selected').value;
  console.log(input);
  console.log(funct);


  if(funct== "triangle"){
    document.getElementById('output').innerHTML = triangle(input);
    console.log(triangle(input));
  }
  if(funct== "fibonacci"){
    document.getElementById('output').innerHTML = fibonacci(input);
    console.log(fibonacci(input));
  }
  if(funct== "sumDigits"){
    document.getElementById('output').innerHTML = sumDigits(input);
    console.log(sumDigits(input));
  }
  if(funct== "factorial"){
    document.getElementById('output').innerHTML = factorial(input);
    console.log(factorial(input));
  }
  if(funct== "count7"){
    document.getElementById('output').innerHTML = count7(input);
    console.log(count7(input));
  }
  if(funct== "count8"){
    document.getElementById('output').innerHTML = count8(input);
    console.log(count8(input));
  }
  if(funct== "countHi"){
    document.getElementById('output').innerHTML = countHi(input);
    console.log(countHi(input));
  }
  if(funct== "countAbc"){
    document.getElementById('output').innerHTML = countAbc(input);
    console.log(countAbc(input));
  }


}


  function triangle(rows){
    if(rows==0){
      return 0;
    }
      return triangle(rows-1)+rows;
    }


function fibonacci(n) {
      if(n==0){
        return 0;
      }
      if(n==1){
        return 1;
      }
      return fibonacci(n-2)+fibonacci(n-1);
    }


function sumDigits(n) {
  if(n < 10){
    return n;
  }
   return (n%10) + sumDigits(Math.floor(n/10));
}

function factorial(n){
  if(n==1){
  return 1;
}
var x= factorial(n-1)*n;
return x;
}

function count7(n){
  if(n==0){
    return 0;
  }
  if(n%10==7){
    return 1+ count7(Math.floor(n/10));
  }else{
    return count7(Math.floor(n/10));
  }

}
function  count8(n){
  if(n==0){
   return 0;
 }

 if(n%100==88){
   return 2+ count8(Math.floor(n/10));
   }

 if(n%10==8){
   return 1+ count8(Math.floor(n/10));
 }else{
   return count8(Math.floor(n/10));
 }

}
function countHi(str){

    if (str.length < 2) return 0;
    if (str.substring(0, 2) == ("hi"))
        return 1 + countHi(str.substring(2));
    return countHi(str.substring(1));

}

function countAbc(str){
  if (str.length < 3) return 0;

if (str.substring(0,3) ==("abc") || str.substring(0,3) ==("aba"))
  return 1 + countAbc(str.substring(1));
else
  return countAbc(str.substring(1));
}
