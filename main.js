const btnStart = document.querySelector('#btn-start');
const btnReset = document.querySelector('#btn-reset');
const btnPause = document.querySelector('#btn-pause');
const btnContinue = document.querySelector('#btn-continue');
const timer = document.querySelector('.timer');
const millisegundos = document.querySelector('#milliseconds');
const minutos = document.querySelector('#minutes');
const segundos = document.querySelector('#seconds');

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let paused = false; 

const executeInterval = () => {
    interval = setInterval(() => {
        if (!paused) milliseconds += 10;

        if (milliseconds >= 1000) {
            seconds++;
            milliseconds = 0;
        }

        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }

        minutos.textContent = returnFormat(minutes);
        segundos.textContent = returnFormat(seconds);
        millisegundos.textContent = milliseconds;
    }, 10);
}

function startTimer() {
    paused = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    executeInterval();

    btnStart.style.display = 'none';
    btnPause.style.display = 'block';
}

function pauseTimer() {
    clearInterval(interval);

    btnPause.style.display = 'none';
    btnContinue.style.display = 'block';

    !paused;
}

function continueTimer() {
    executeInterval();

    btnContinue.style.display = 'none';
    btnPause.style.display = 'block';
}

function resetTimer() {
    clearInterval(interval);
    millisegundos.textContent = '000';
    segundos.textContent = '00';
    minutos.textContent = '00';

    btnContinue.style.display = 'none';
    btnPause.style.display = 'none';
    btnStart.style.display = 'block';
}

const returnFormat = (tempo) => {
    return tempo = tempo < 10 ? `0${tempo}` : tempo;
}

btnStart.addEventListener('click', startTimer);
btnReset.addEventListener('click', resetTimer);
btnPause.addEventListener('click', pauseTimer);
btnContinue.addEventListener('click', continueTimer);