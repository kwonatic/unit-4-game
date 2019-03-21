


// this will be a numberpool from 19-120
var numberPool

// this will be an array from 1-12 for crystal btns
var crystalGuess

//generate random numbers by using math floor and math random
// computerGuess = numberPool[Math.floor(Math.random() * numberPool.length)];

// * The random number shown at the start of the game should be between 19 - 120.
var mainMin = 19;
var mainMax = 120;
var computerGuess = Math.floor(Math.random() * (+mainMax - +mainMin)) + +mainMin;
console.log("computerGuess= " + computerGuess);


//     * Each crystal should have a random hidden value between 1 - 12.
// var for each crystal box


var min = 1;
var max = 12;

var red = Math.floor(Math.random() * (+max - +min)) + +min;
var green = Math.floor(Math.random() * (+max - +min)) + +min;
var blue = Math.floor(Math.random() * (+max - +min)) + +min;
var yellow = Math.floor(Math.random() * (+max - +min)) + +min;

console.log(red)
console.log(green)
console.log(blue)
console.log(yellow)

//when page loads, it's ready to play
// generate random number from numberPool then display in Box3
$('#Box3').text(computerGuess);

$("button").click(function(){
    $("p").text("Hello world!");
  });