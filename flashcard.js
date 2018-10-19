const first = document.getElementById("kaart1")
first.addEventListener(click, draaiKaart1)

const second = document.getElementById("kaart2")
second.addEventListener(click, draaiKaart2)

const third = document.getElementById("kaart3")
third.addEventListener(click, draaiKaart3)

// const second = document.getElementById("vraagInKaart1")
// second.innerText()

function draaiKaart1() {
    const heading = document.getElementById("kaart1")
    console.log(heading)
    heading.innerText = "Tomorrow"
    console.log("test!1")
}

function draaiKaart2() {
    const heading = document.getElementById("kaart2")
    console.log(heading)
    heading.innerText = "A promise"
    console.log("test!2")
}

function draaiKaart3() {
    const heading = document.getElementById("kaart3")
    console.log(heading)
    heading.innerText = "A cold"
    console.log("test!3")
}

// const vraag0 = "What is always coming, but never arrives?"
// const vraag1 = "What an be broken, but it never held?"
// const vraag2 = "What can one catch but is not thrown?"
// const antw0 = "Tomorrow"
// const antw1 = "A promise"
// const antw2 = "A cold" 
// const arrayVraag = [vraag0, vraag1, vraag2]
// const arrayAntw = [antw0, antw1, antw2]