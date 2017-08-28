// "use strict";


var result1 = document.getElementById("result1");
var operator = document.getElementsByClassName("operator");
var numKeys = document.getElementsByClassName("number");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
var clear = document.getElementById("c");
var equal =document.getElementById("equal");

for(var i = 0; i < numKeys.length; i++){
    numKeys[i].addEventListener("click", function(){

        if (result3.innerHTML === "" && result2.innerHTML === "") {
            result1.innerHTML += this.innerHTML;
        } else {
            result3.innerHTML += this.innerHTML;
        }
        console.log(this.innerHTML);
    })
}

for(var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function(){
        result2.innerHTML = this.innerHTML;
        console.log(this);
    })
}

clear.addEventListener("click", function(){
    result1.innerHTML = "";
    result2.innerHTML = "";
    result3.innerHTML = "";
});

equal.addEventListener("click", function(){
   if(result2.innerHTML === "*"){
     result1.innerHTML = result1.innerHTML * result3.innerHTML
   }
   else if (result2.innerHTML === "-"){
       result1.innerHTML = result1.innerHTML - result3.innerHTML
   }
    else if (result2.innerHTML === "/"){
       result1.innerHTML = result1.innerHTML / result3.innerHTML
   }
   else if (result2.innerHTML === "+"){
       result1.innerHTML = result1.innerHTML + result3.innerHTML
   }
   // else if (result2.innerHTML === "%"){
   //     result1.innerHTML = result1.innerHTML  result3.innerHTML
   // }


    result2.innerHTML = "";
    result3.innerHTML = "";



});




