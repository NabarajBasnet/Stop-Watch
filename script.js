const startButton = document.getElementById('start-btn').addEventListener('click', () => {
    let myAudio = new Audio('./beep-104060.mp3');
    myAudio.play()
});

const stopButton = document.getElementById('stop-btn').addEventListener('click', () => {
    let myAudio = new Audio('./beep-104060.mp3');
    myAudio.play()
});

const minute = document.getElementById('minute');
const second = document.getElementById('second');
const microSecond = document.getElementById('microsecond');
