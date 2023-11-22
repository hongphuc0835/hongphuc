let x = myFunction(4,5);
document.getElementById('demo').innerHTML = x;

function myFunction(a,b){
    return a*b;
}
let text = "Outside: " + typeof carName;
document.getElementById("demo1").innerHTML = text;

function mFunction() {
  let carName = "Volvo";
  let text = "Inside: " + typeof carName + " " + carName; 
  document.getElementById("demo2").innerHTML = text;
}

mFunction();