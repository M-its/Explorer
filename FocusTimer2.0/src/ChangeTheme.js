let bgSound = null
let currentSoundSrc = null

function playSound(soundSrc) {
    if (bgSound) {
        bgSound.pause()
    }
    bgSound = new Audio(soundSrc)
    currentSoundSrc = soundSrc
    bgSound.play()
}

function stopSound() {
    if (bgSound) {
        bgSound.pause()
        bgSound = null
        currentSoundSrc = null
    }
}

function removePlayingClassFromAllButtons(buttons) {
    buttons.forEach((btn) => {
        btn.classList.remove("playing")
    })
}

const ambientSounds = document.querySelectorAll("#ambient-sounds button")

ambientSounds.forEach((theme) => {
    let currentTheme = document.getElementById(theme.id)

    currentTheme.addEventListener("click", (e) => {
        let soundSrc = `./assets/${theme.dataset.sound}.wav`

        if (bgSound && currentSoundSrc === soundSrc) {
            stopSound()
            e.currentTarget.classList.remove("playing")
        } else {
            removePlayingClassFromAllButtons(ambientSounds)
            playSound(soundSrc)
            e.currentTarget.classList.add("playing")
        }
        bgSound.loop = true
    })
})
