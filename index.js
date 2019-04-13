// alert("hi javascript!");

// for dice - 1

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1);
randomNumber1 = randomNumber1+1;

var newimage1 = "dice"+randomNumber1+".png"; //dice1.png - dice6.png;
var newimagesrc1 = newimage1;
var image1 = document.querySelectorAll("img")[0]; // array of two images picking the 1st one at index 0
// document.querySelector.setAttribute("img1","newimagesrc");
// var image1 = document.querySelector("img1");didn't work
image1.setAttribute("src",newimagesrc1);

// for dice - 2
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6;
randomNumber2 = Math.floor(randomNumber2);
randomNumber2 = randomNumber2+1;

var newimage2 = "dice"+randomNumber2+".png"; //dice1.png - dice6.png;
var newimagesrc2 = newimage2;
var image2 = document.querySelectorAll("img")[1];//"file extension"
image2.setAttribute("src",newimagesrc2);


// changing h1 heading
// document.querySelector("h1").innerHTML = "good byee";
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "🏁 Player-1 Wins!";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player-2 Wins 🏁 !!";
}
else{
  document.querySelector("h1").innerHTML = "It's A Draw 🎌!!";
}
