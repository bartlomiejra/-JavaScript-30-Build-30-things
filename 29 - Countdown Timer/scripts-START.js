let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');
function timer(seconds) {
    //clear any existing timers! no two countdowning in the same time
    clearInterval(countdown);


    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    // console.log({now, then});


    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //check if we should stop it!
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;

        }
        //*display it
        console.log(secondsLeft);
        displayTimeLeft(secondsLeft);
    }, 1000);

}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    // console.log(minutes, remainderSeconds);
    timerDisplay.textContent = display;
    

    //* console.log({minutes});
    //* console.log(seconds);
}

function displayEndTime(timestamp) {
const end = new Date(timestamp);
const hour = end.getHours();
const minutes = end.getMinutes();
endTime.textContent = `be back at ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer(){
    const seconds = parseInt(this.dataset.time);

    //calling function timer 
    timer(seconds);
    console.log(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e){
e.preventDefault();
const mins = this.minutes.value;
console.log('mins :>> ', mins);
timer(mins * 60);
this.reset();
});