var randomNum1=Math.floor(Math.random()*6)+1;  //create a random number (1-6)
var randomDice="dice"+randomNum1+".png";       //change dice image number  (dice1.png-dice6.png)
var srcImage="images/"+randomDice;             //change the source dice image(image/dice1.png-image/dice6.png)
var image1=document.querySelectorAll("img")[0];  //select the first image
image1.setAttribute("src",srcImage);               //change its attribute to source of the images

var randomNum2=Math.floor(Math.random()*6)+1;
var randomDice2="dice"+randomNum2+".png";
var srcImage2="images/"+randomDice2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",srcImage2);

if(randomNum1>randomNum2){
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else if(randomNum1<randomNum2){
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}