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


