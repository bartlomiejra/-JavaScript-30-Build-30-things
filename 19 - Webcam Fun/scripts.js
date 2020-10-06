const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
    navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(error => {
            console.error(`OU`, err);
        })
}



function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    // console.log(width, height);
    canvas.width = width;
    canvas.height = height;


    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        //take all pixels  
        let pixels = ctx.getImageData(0, 0, width, height);
        // mass with them
        piexels = redEffect(pixels);
        // put them back
        ctx.putImageData(pixels, 0, 0);
        console.log(pixels);
        debugger;
    }, 16);
}


function takePhoto() {
    //plated the sound
    snap.currentTime = 0;
    snap.play();
    //take date out of the canvas (photo)
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('download', 'handsome');
    link.innerHTML = `<img src="${data}" alt"Hendsome Man" />`;
    // link.textContent = 'Download Image';
    strip.insertBefore(link, strip.firstChild);
    // console.log(data);

}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i = +4) {
        //first channel R, second = G, three = B, and last is alpha channel
        pixels[i + 0] = pixels.data[i + 0] + 100; //red
        pixels[i + 1] = pixels.data[i + 0] - 50; //g
        pixels[i + 2] = pixels.data[i + 2] * 0, 5; // b

    }
    return pixels;
}
getVideo();
video.addEventListener('canplay', paintToCanvas);