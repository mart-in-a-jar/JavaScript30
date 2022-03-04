/* window.addEventListener("keydown", e => {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    const key = document.querySelector(`.keys > .key[data-key="${e.code}"]`)
    if (!audio) return; // stop if no audio assosiated with key pressed
    audio.currentTime = 0; //rewind, so we can play the same tune in succession without waiting for sound clip to finnish
    audio.play();
    key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
    key.addEventListener("transitionend", e => {
        if (e.propertyName !== "transform") return; // skip if not transform
        key.classList.remove("playing");
    });
}); */

// Med separate funksjoner:

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.keys > .key[data-key="${e.code}"]`);
    if (!audio) return; // stop if no audio assosiated with key pressed
    audio.currentTime = 0; //rewind, so we can play the same tune in succession without waiting for sound clip to finnish
    audio.play();
    key.classList.add("playing");
}

// Based on change in css
function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip if not transform
    this.classList.remove("playing");
}

// Based on keypress
function removeTransition2(e) {
    const key = document.querySelector(`.keys > .key[data-key="${e.code}"]`);
    key.classList.remove("playing");
}

window.addEventListener("keydown", playSound);

// const keys = document.querySelectorAll(".key");
// keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keyup", removeTransition2);