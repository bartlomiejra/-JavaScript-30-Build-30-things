// get Out Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progresBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data_skip]');
const ranges = player.querySelectorAll('.player__slider');


// Build out function
function togglePlay(){
    const method = video.paused ? 'play' : 'pause';
   video[method]();
}



function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    console.log('Update the button');

}

function skip(){
    console.log('Skipping!');
}

    // Hook up the event listener
    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);

    toggle.addEventListener('click', togglePlay);



    skipButtons.forEach(button => button.addEventListener('click', skip));
    