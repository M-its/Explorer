const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const fortuneCookie = document.querySelector("#fortuneCookie")
const btnReset = document.querySelector("#btnReset")
let demotivationalMessage = document.querySelector(".demotivational-message")

fortuneCookie.addEventListener("click", handleTryFortune)
btnReset.addEventListener("click", toggleScreen)
document.addEventListener("keydown", handleResetButton)

function handleTryFortune() {
    const fortuneMsg = [
        "O caminho é longo mas a derrota é certa!",
        "É só uma fase ruim, logo vai piorar.",
        "Pare de desejar e comece a desistir.",
        "Os sonhos antecedem os seus fracassos.",
        "Seja o protagonista do seu gracasso.",
        "Nunca foi azar, sempre foi incompetencia.",
        "O recomeço é a oportunidade de um novo fracasso.",
        "Acreditar que você pode já é meio caminho errado.",
        "Você não pode mudar o seu passado. Mas pode estragar o seu futuro.",
        "Nunca deixe ninguém dizer que você não consegue. Diga você mesmo: EU NÃO CONSIGO.",
        "Nunca subestime sua incapacidade.",
        "Tudo dando errado conforme esperado.",
        "Reclame menos, fracasse mai.s",
        "Nada é em vão. Tudo vem para te decepcionar.",
        "O não você já tem. Busque a iluminação.",
        "Comemore as pequenas derrotas.",
        "Lute como nunca. Perca como sempre.",
        "Sem lutas não há derrotas.",
        "Quando tudo estiver dando errado, se acostume.",
        "Seu maior problema é você.",
    ]

    const randomfortuneMsg = Math.round(Math.random() * 20)
    console.log(randomfortuneMsg)

    demotivationalMessage.innerHTML = fortuneMsg[randomfortuneMsg]

    toggleScreen()
}

function handleResetClick() {
    toggleScreen()
}

function handleResetButton(e) {
    if (e.key == "Enter" && screen1.classList.contains("hide")) {
        handleResetClick()
    }
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}
