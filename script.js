const wordEl = document.getElementById('word');
const wrongLetterEl = document.getElementById('wrong-letters');
const notification = document.getElementById('notification');
const popup = document.getElementById('popup');
const messageEl = document.getElementById('message');
const playButton = document.getElementById('play-button');
const canvas = document.getElementById('hangman');
const ctx = canvas.getContext('2d');

const words = ['javascript', 'hangman', 'vscode', 'openai', 'developer'];
let selectedWord = words[Math.floor(Math.random() * words.length)];
let correctLetters = [];
let wrongLetters = [];

function drawHangman(errors) {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    // base
    if (errors > 0) ctx.fillRect(10, 240, 180, 10);
    // pole
    if (errors > 1) ctx.fillRect(50, 20, 10, 220);
    // beam
    if (errors > 2) ctx.fillRect(50, 20, 80, 10);
    // rope
    if (errors > 3) ctx.fillRect(130, 20, 2, 20);
    // head
    if (errors > 4) {
        ctx.beginPath();
        ctx.arc(131, 60, 15, 0, Math.PI * 2);
        ctx.stroke();
    }
    // body
    if (errors > 5) ctx.fillRect(130, 75, 2, 50);
    // left arm
    if (errors > 6) ctx.fillRect(120, 85, 10, 2);
    // right arm
    if (errors > 7) ctx.fillRect(132, 85, 10, 2);
    // left leg
    if (errors > 8) ctx.fillRect(120, 125, 10, 2);
    // right leg
    if (errors > 9) ctx.fillRect(132, 125, 10, 2);
}

function displayWord() {
    wordEl.innerHTML = selectedWord
        .split('')
        .map(letter => (correctLetters.includes(letter) ? letter : '_'))
        .join(' ');
}

function updateWrongLetters() {
    wrongLetterEl.innerText = wrongLetters.join(' ');
    drawHangman(wrongLetters.length);

    if (wrongLetters.length >= 10) {
        messageEl.innerText = 'You lost';
        popup.classList.remove('hidden');
    }
}

function showNotification() {
    notification.classList.remove('hidden');
    setTimeout(() => notification.classList.add('hidden'), 2000);
}
