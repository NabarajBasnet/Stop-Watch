let startButton = document.getElementById('start-btn');
let stopButton = document.getElementById('stop-btn');
let resetButton = document.getElementById('reset-btn');

let hour = 00;
let minute = 00;
let second = 00;
let count = 00;

startButton.addEventListener('click', () => {
    let myAudio = new Audio('./beep-104060.mp3');
    myAudio.play();

    timer = true;
    stopWatch();
});

const stop = stopButton.addEventListener('click', () => {
    let myAudio = new Audio('./beep-104060.mp3');
    myAudio.play();

    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;

    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
    document.getElementById('microsecond').innerHTML = "00";
});

const onStart = document.getElementById('start-btn').addEventListener('click', () => {
    setInterval(() => {
        count = count + 1;
    }, 1000);
    minute.innerText = count;
});
