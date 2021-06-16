//get all keys 
const keys = document.querySelectorAll(".key")

//play notes 
function playNote(event) {

    let audioKeyCode = getKeyCode(event)

    console.log(audioKeyCode)
    // typed or pressed key 
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    console.log(key)
    // if key exists 
    const cantFoundAnyKey = !key
    
    if(cantFoundAnyKey) {
        return;
    }

    addPlayingClass(key)
    playAudio(audioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function getKeyCode(event) {
    let keyCode; 

    const isKeyboard = event.type === "keydown"
    if(isKeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    return keyCode
}

function playAudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass(event) {
    event.target.classList.remove("playing")
}

//click width mouse 
keys.forEach(function(key) {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
})

//kayboard type
window.addEventListener("keydown", playNote)