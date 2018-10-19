const first = document.getElementById("kaart1")
first.addEventListener(click, draaiKaart)

function draaiKaart() {
    const heading = document.getElementById("kaart1")
    console.log(heading)
    heading.innerText = "Het goede antwoord!"
    console.log("test!")
}