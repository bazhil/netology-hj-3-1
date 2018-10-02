'use strict';

const piano = document.getElementsByTagName('ul')[0]; 
const audio = document.getElementsByTagName('audio'); // тег audio
const keys = piano.getElementsByTagName('li'); 

const middle = [
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3",
    "https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3"
];

const lower = [
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3', 
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3', 
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3', 
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3', 
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3'
]; 

const higher = [
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3', 
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3', 
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3', 
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3', 
    'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3'
];

for (const key of keys) {
    key.addEventListener('click', playSound);
}


function playSound(event) {
    event.preventDefault(); 
  
  for(let i = 0; i < audio.length; i++) {
        
        if (piano.classList.contains('lower')) {
            audio[i].src = lower[i];

        } else if(piano.classList.contains('higher')){
            audio[i].src = higher[i];
               
        } else if(piano.classList.contains('middle')){
            audio[i].src = middle[i];
        }

    }

    let play = event.currentTarget.getElementsByTagName('audio')[0];
    play.pause();
    play.currentTime = 0;
    play.play();

}

function getKeydown(event) {

    if (event.getModifierState("Shift")) {
        piano.classList.remove('middle'); 
        piano.classList.remove('higher');
        piano.classList.add('lower'); 
    } else if (event.getModifierState("Alt")) {
        piano.classList.remove('middle');
        piano.classList.remove('lower');
        piano.classList.add('higher'); 
    }
     
    playSound();
}

function getKeyup(event) {
    piano.classList.remove('lower'); 
    piano.classList.remove('higher'); 
    piano.classList.add('middle'); 
    playSound();
}

document.addEventListener('keydown', getKeydown);

document.addEventListener('keyup', getKeyup);