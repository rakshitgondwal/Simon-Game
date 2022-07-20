
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}


// var gamePattern = [];
// var userClickedPattern = [];
//
// var buttonColours = ["red", "blue", "green", "yellow"];
//
// var level = 1;
// $("body").one("keypress", function() {
//   nextSequence();
//   // $("h1").text("Level 0")
// })
//
//
//
// //SEQUENCE
// function nextSequence() {
//
//
//   var n = Math.random();
//   n = n * 4;
//   var randomNumber = Math.floor(n);
//
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).fadeOut(90).fadeIn(90);
//   playSound(randomChosenColour);
//
//   $("h1").text("Level " + level);
//   level++;
// }
//
//
//
//
//
// //ON CLICK
// $(".btn").click(function(e) {
//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);
//
//   playSound($(this).attr("id"));
//
//   animatePress(userChosenColour);
//
//   checkAnswer(userClickedPattern.length - 1);
// });
//
//
//
//
// //ON PRESS ANIMATION
// function animatePress(currentColor) {
//
//   $('#' + currentColor).addClass("pressed");
//   setTimeout(function() {
//     $("#" + currentColor).removeClass("pressed")
//   }, 100)
// };
//
//
//
//
//
//
// //PLAYS SOUND
// function playSound(color) {
//   var audio = new Audio("sounds/" + color + ".mp3");
//   audio.play();
// }
//
//
//
//
//
// function checkAnswer(currentLevel) {
//
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//
//     if (userClickedPattern.length === gamePattern.length) {
//
//       setTimeout(function() {
//         nextSequence();
//       }, 1000);
//
//     }
//
//   } else {
//
//     var wrong = new Audio("sounds/wrong.mp3");
//     wrong.play();
//
//     $("body").addClass("game-over");
//     setTimeout(function() {
//       $(body).removeClass("game-over")
//     }, 200);
//
//   $("h1").text("Game Over, Press Any Key to Restart")
//
//   }
//
// };
