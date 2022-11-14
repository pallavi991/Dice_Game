console.log("hello world")

let heading = document.querySelector(".heading")
let imgOne = document.querySelector(".img-one");
let imgTwo = document.querySelector(".img-two");

heading.addEventListener("click",()=>{location.reload(true);})


var x =Math.floor(Math.random()*6)+1;
console.log(x);
var y =Math.floor(Math.random()*6)+1;
console.log(y);

var radomDiceImage1 = "images/dice" + x + ".png"
var radomDiceImage2 = "images/dice" + y + ".png"
imgOne.setAttribute("src",radomDiceImage1);
imgTwo.setAttribute("src", radomDiceImage2);

