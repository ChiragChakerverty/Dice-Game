var player1=prompt("Enter the name of player 1");
var player2=prompt("Enter the name of player 2");

player1=player1.toUpperCase();
player2=player2.toUpperCase();

var n=Math.random();
n=n*6;
n=n+1;
n=Math.floor(n);

var n2=Math.floor((Math.random()*6))+1;

var randomImage="images/dice"+n+".png";
var randomImage2="images/dice"+n2+".png";
var image1=document.querySelectorAll("img")[0];
var image2=document.querySelectorAll("img")[1];


image1.setAttribute("src",randomImage);
image2.setAttribute("src",randomImage2);

if(n>n2)
{
    document.querySelector("h1").innerHTML=player1+" wins";
}
else if(n2>n)
{
    document.querySelector("h1").innerHTML=player2+" wins";
}
else 
{
    document.querySelector("h1").innerHTML="Draw between "+player1+" and "+player2;
}

var playerselect1=document.querySelectorAll("p")[0].innerHTML=player1;
var playerselect2=document.querySelectorAll("p")[1].innerHTML=player2;

// playerselect1.setAttribute("Player 1",player1);
// playerselect2.setAttribute("player 2",player2);