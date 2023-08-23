var randomNum1 = Math.floor(Math.random() * 6)+ 1;
var randomImg1 = "dice"+randomNum1+".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImg1);

var randomNum2 = Math.floor(Math.random() * 6)+ 1;
var randomImg2 = "dice"+randomNum2+".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImg2);

if(randomImg1 > randomImg2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!!"
}

else if(randomImg2 > randomImg1)
{
  document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!!"
}
else if(randomImg1 == randomImg2) {
  document.querySelector("h1").innerHTML = "🚩 It's Draw!!"
}

