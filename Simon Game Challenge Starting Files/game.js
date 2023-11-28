var buttonColors = ["red", "blue", "green", "yellow"]

var gamePattern = []
var userClickedPattern = []

$(".btn").on("click", function () {

   var userChosenColour =  $(this).attr("id")

   userClickedPattern.push(userChosenColour)
  playSound(userChosenColour)
  animatePress(userChosenColour)

//   console.log(userClickedPattern);

   
});

function nextSequence(){
    var randomNumber = Math.floor((Math.random()*3)+1)
    // console.log(randomNumber);
    var randomChosenColour = buttonColors[randomNumber]
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

//     var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
playSound(randomChosenColour)


}

function playSound(color){
    var playAudio = new Audio("./sounds/"+color+".mp3")
    playAudio.play()
}
function animatePress(currentcolor){
    $("#"+currentcolor).addClass("pressed")
    setTimeout(()=>{
        $("#"+currentcolor).removeClass("pressed")
    },100)

}




