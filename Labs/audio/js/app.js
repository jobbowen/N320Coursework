//Get audio tag
// let myAudio = document.getElementById("myAudio");
//
// function playAudio() {
//     myAudio.play();
// }
//
// function stopMainAudio() {
//     myAudio.pause();
//     myAudio.currentTime = 0;
// }

let soundButtons = document.getElementById("soundButtons");

let sounds = [
    "chimes_long.mp3", "click_clock_loop.mp3",
    "pop_10.mp3", "puff.mp3"
];

let soundElements = [];

//Loop through all sounds and create audio tags for them
sounds.forEach((soundURL, idx) => {
    //The sound
    let newSound = new Audio("sounds/" + soundURL);
    //Store each sound in an array
    soundElements.push(newSound);

    //Create button to play sound
    let newButton = document.createElement("button");
    newButton.innerHTML = soundURL;
    //Store sound index
    newButton.setAttribute("data-sound-id", idx);
    //Add it to the page
    soundButtons.appendChild(newButton);

    //Listen for a click and invoke play sound function
    newButton.addEventListener("click", playSoundInArray);
});

function playSoundInArray(event) {
    //Get sound index
    let soundIndex = Number(event.target.getAttribute("data-sound-id"));
    //Get sound from array
    let selectedSound = soundElements[soundIndex];

    //Play sound
    selectedSound.play();
}

//Change sound display names from mp3 files to names
let chimes = document.querySelector('[data-sound-id="0"');
chimes.innerHTML = 'Chimes';

let clickClock = document.querySelector('[data-sound-id="1"');
clickClock.innerHTML = 'ClickClock';

let pop = document.querySelector('[data-sound-id="2"');
pop.innerHTML = 'Pop';

let puff = document.querySelector('[data-sound-id="3"');
puff.innerHTML = 'Puff';
