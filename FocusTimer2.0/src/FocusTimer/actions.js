import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle("running")
    timer.countdown()
    sounds.buttonPressAudio.play()
}

export function set() {
    el.minutes.setAttribute("contenteditable", true)
    el.minutes.focus()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove("running")
    timer.updateDisplay()
    sounds.buttonPressAudio.play()
}

export function increaseTimer() {
    let minutes = +el.minutes.textContent
    let seconds = +el.seconds.textContent

    if (minutes < 59 || seconds > 59) {
        minutes += 5
    }

    timer.updateDisplay(minutes, seconds)
}

export function decreaseTimer() {
    let minutes = +el.minutes.textContent
    let seconds = +el.seconds.textContent

    if (minutes > 4 || seconds > 59) {
        minutes -= 5
    }

    timer.updateDisplay(minutes, seconds)
}
