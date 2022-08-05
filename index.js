
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause")
const circle = document.querySelector("#circle");
const circleLength = Math.PI * parseFloat(circle.getAttribute('r'))* 2;
circle.setAttribute("stroke-dasharray", circleLength);
let duration

const timer = new Timer(durationInput, startButton, pauseButton,
    {
        onStart(totalTime){
           duration = totalTime;

        },
        onTick(timeRemaining){
           
           circle.setAttribute('stroke-dashoffset', circleLength * timeRemaining / duration - circleLength);
           

        },
        onComplete(){
            console.log("comlepted! yay!")

        }
    } )
    



