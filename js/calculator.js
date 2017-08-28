// "use strict";


var result1 = document.getElementById("result1");
var operator = document.getElementsByClassName("operator");
var numKeys = document.getElementsByClassName("number");
var result2 = document.getElementById("result2")
var result3 = document.getElementById("result3");


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
