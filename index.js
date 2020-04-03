// First Solution:-------------------------------------------------->
/*
// Player1:

var number1 = 0;

number1 = Math.random() * 6;
number1 = Math.floor(number1) + 1;

if (number1 == 1) {
  document.querySelector("#player1").setAttribute("src","images/dice1.png");

} else if (number1 == 2) {
  document.querySelector("#player1").setAttribute("src","images/dice2.png");

} else if (number1 == 3) {
  document.querySelector("#player1").setAttribute("src","images/dice3.png");

} else if (number1 == 4) {
  document.querySelector("#player1").setAttribute("src","images/dice4.png");

} else if (number1 == 5) {
  document.querySelector("#player1").setAttribute("src","images/dice5.png");

} else if (number1 == 6) {
  document.querySelector("#player1").setAttribute("src","images/dice6.png");

}


// Player2:

var number2 = 0;

number2 = Math.random() * 6;
number2 = Math.floor(number2) + 1;

if (number2 == 1) {
  document.querySelector("#player2").setAttribute("src","images/dice1.png");

} else if (number2 == 2) {
  document.querySelector("#player2").setAttribute("src","images/dice2.png");

} else if (number2 == 3) {
  document.querySelector("#player2").setAttribute("src","images/dice3.png");

} else if (number2 == 4) {
  document.querySelector("#player2").setAttribute("src","images/dice4.png");

} else if (number2 == 5) {
  document.querySelector("#player2").setAttribute("src","images/dice5.png");

} else if (number2 == 6) {
  document.querySelector("#player2").setAttribute("src","images/dice6.png");

}
// ------------------------------------------------------------------->

// Heading:

if (number1 > number2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins.";
} else if (number1 < number2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins. 🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩 Draw. 🚩";
}
// ------------------------------------------------------------------->
*/

// Second Solution:-------------------------------------------------->

document.querySelector("h1").addEventListener("click", function() {

  // Player1:
  var number1 = Math.floor(Math.random() * 6) + 1;
  var image1 = "images/dice" + number1 + ".png";
  document.querySelectorAll(" img")[0].setAttribute("src", image1);

  // Player2:
  var number2 = Math.floor(Math.random() * 6) + 1;
  var image2 = "images/dice" + number2 + ".png";
  document.querySelectorAll(" img")[1].setAttribute("src", image2);


  // Heading:

  if (number1 > number2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins.";
  } else if (number1 < number2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins. 🚩";
  } else {
    document.querySelector("h1").innerHTML = "🚩 Draw. 🚩";
  }

});
// ------------------------------------------------------------------->
