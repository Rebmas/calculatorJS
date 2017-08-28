"use strict";

document.getElementById("c").addEventListener("click", function (){
console.log(this)
});

document.getElementById("divide").addEventListener("click", function (){
    console.log(this)
});

document.getElementById("add").addEventListener("click", function(){
    console.log(this)
});

document.getElementById("seven").addEventListener("click", function(){

    console.log(this)
});

document.getElementById("eight").addEventListener("click", function(){
console.log(this)
});

document.getElementById("nine").addEventListener("click", function(){
    console.log(this)
});

document.getElementById("sub").addEventListener("click", function(){
    console.log(this)
});

document.getElementById("four").addEventListener("click", function(){
    console.log(this)
});
document.getElementById("five").addEventListener("click", function(){
    console.log(this)
});
document.getElementById("six").addEventListener("click", function(){
    console.log(this)
});
document.getElementById("mult").addEventListener("click", function(){
    console.log(this)
});
document.getElementById("one").addEventListener("click", function(){
    console.log(this)
});
document.getElementById("two").addEventListener("click", function(){
    console.log(this)
});
document.getElementById("three").addEventListener("click", function(){
    console.log(this)
});
document.getElementById("slash").addEventListener("click", function(){
    console.log(this)
});
document.getElementById("zero").addEventListener("click", function(){
    console.log(this)
});
document.getElementById("period").addEventListener("click", function(){
    console.log(this)
});
document.getElementById("equal").addEventListener("click", function(){
    console.log(this)
});

window.onload = function() {

    var current,
        screen,
        output,
        limit,
        zero,
        period,
        operator;

    screen = document.getElementById("result1");

    var number = document.querySelectorAll(".number");

    var len = elem.length;

    for (var i = 0; i < len; i++) {

        screen[i].addEventListener("click", function () {

            number = this.value;

            output = screen.innerHTML +=len;

            // limit = output.length;

            if (limit > 16) {

                alert("Sorry no more input is allowed");

            }

        }, false);

    }
}