const exRatio = 23000;

let from = prompt("from currency").toLocaleLowerCase();

let to = prompt("to currency").toLocaleLowerCase();

let amount = prompt("amount?");


if(isNaN(amount) === true){
  console.log('type the number please');
}else{
  if(from === "usd" && to === "vnd"){
  
     usdToVnd();
  }else if(from === "vnd" && to === "usd"){
    vndToUsd();
  }else{
    alert('we dont have this option')
  };

  
}


function usdToVnd(){
  let result = amount * exRatio
  return result
};
function vndToUsd(){
  let result = amount / exRatio
  return result
};
