class Timer {
    constructor(durationInput, startButton, pauseButton, callbackes) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        if(callbackes){
            this.onStart = callbackes.onStart;
            this.onTick = callbackes.onTick;
            this.onComplete = callbackes.onComplete;
        }

       
    }
    

    start = () => {
        let frequency = 20;
        this.totalInterval = this.durationInput.value * (1000 / frequency);
        this.onStart(this.timeRemaining);
        this.tick();
        this.intervalID = setInterval(this.tick, frequency);
        
       
    }
    pause  = () => {
        clearInterval(this.intervalID);
    }

   onDurationChange = () => {

   }

   get timeRemaining() {
    return parseFloat(this.durationInput.value);
   }

   set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
   }

   tick = () => {
   
    if(this.timeRemaining === 0) {
        this.pause();
    }
    else {
   
    this.onTick(this.timeRemaining);
    let timeLeft = this.timeRemaining;
    this.timeRemaining = timeLeft - 0.02;

    }

   }

}