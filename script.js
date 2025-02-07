const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

let hour = 0;
let minute = 0;
let second = 0;
let milisecond = 0;
let timer = false;

startBtn.addEventListener('click', () => {
    timer = true;
    const myAudio = new Audio('./beep-104060.mp3');
    myAudio.play();
    setInterval(() => watch(), 10);
});

stopBtn.addEventListener('click', () => {
    const myAudio = new Audio('./beep-104060.mp3');
    myAudio.play();
    timer = false;
});

const watch = () => {
    if (timer) {
        milisecond++;
        document.getElementById('milisecond').innerHTML = milisecond;
    };

    if (timer && milisecond === 100) {
        milisecond = 0;
        second++;
        document.getElementById('second').innerHTML = second;
    };

    if (timer && second === 60) {
        second = 0;
        minute++;
        document.getElementById('minute').innerHTML = minute;
    };

    if (timer && minute === 60) {
        minute = 0;
        hour++;
        document.getElementById('hour').innerHTML = hour;
    };

    if (timer && hour === 12) {
        hour = 1;
        document.getElementById('hour').innerHTML = hour;
    };
};
