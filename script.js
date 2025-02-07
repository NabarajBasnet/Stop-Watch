const startStopBtn = document.getElementById('start-btn');
const actionBtn = document.getElementById('reset-btn'); // Will toggle between Reset & Lap
const lapSection = document.getElementById('lapsection');

let hour = 0, minute = 0, second = 0, millisecond = 0;
let isRunning = false;
let intervalId = null;
let soundEffect = new Audio('./beep-104060.mp3');

const loadLaps = () => {
    const laps = JSON.parse(localStorage.getItem('laps')) || [];
    lapSection.innerHTML = laps.map(lap => `<p>${lap}</p>`).join('');
};

const updateDisplay = () => {
    document.getElementById('hour').textContent = String(hour).padStart(2, '0');
    document.getElementById('minute').textContent = String(minute).padStart(2, '0');
    document.getElementById('second').textContent = String(second).padStart(2, '0');
    document.getElementById('milisecond').textContent = String(millisecond).padStart(3, '0');
};

// Stopwatch Function
const watchFn = () => {
    if (!isRunning) return;

    millisecond += 10;

    if (millisecond >= 1000) {
        second++;
        millisecond = 0;
    }

    if (second >= 60) {
        minute++;
        second = 0;
    }

    if (minute >= 60) {
        hour++;
        minute = 0;
    }

    if (hour >= 12) {
        hour = 0;
    }
};

startStopBtn.addEventListener('click', () => {
    soundEffect.play();
    isRunning = !isRunning;

    if (isRunning) {
        intervalId = setInterval(() => {
            watchFn();
            updateDisplay();
        }, 10);

        startStopBtn.textContent = 'Stop';
        startStopBtn.style.backgroundColor = 'red';

        actionBtn.textContent = 'Lap';
        actionBtn.style.backgroundColor = 'blue';
    } else {
        clearInterval(intervalId);

        const lapTime = `${String(hour).padStart(2, '0')}:
                         ${String(minute).padStart(2, '0')}:
                         ${String(second).padStart(2, '0')}:
                         ${String(millisecond).padStart(3, '0')}`;

        let laps = JSON.parse(localStorage.getItem('laps')) || [];
        laps.push(lapTime);
        localStorage.setItem('laps', JSON.stringify(laps));

        startStopBtn.textContent = 'Start';
        startStopBtn.style.backgroundColor = 'green';

        actionBtn.textContent = 'Reset';
        actionBtn.style.backgroundColor = 'gray';
    }
});

actionBtn.addEventListener('click', () => {
    soundEffect.play();

    if (isRunning) {
        loadLaps();
    } else {
        clearInterval(intervalId);
        isRunning = false;
        hour = 0;
        minute = 0;
        second = 0;
        millisecond = 0;
        updateDisplay();

        startStopBtn.textContent = 'Start';
        startStopBtn.style.backgroundColor = 'green';

        localStorage.removeItem('laps');
        lapSection.innerHTML = "";
    }
});

loadLaps();

updateDisplay();
