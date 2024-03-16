var randomNumber1 = Math.floor(Math.random()*6)+1;

var imagesrc="dice"+randomNumber1+".png";

var imagepath="./images/"+imagesrc;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src", imagepath);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var imagepath2="./images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",imagepath2 );


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!"
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🚩Player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}