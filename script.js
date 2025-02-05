
const startButton = document.getElementById('start-btn');
console.log('Button: ', startButton);

startButton.addEventListener('click', () => {
    let myAudio = new Audio('./beep-104060.mp3');
    myAudio.play()
});
