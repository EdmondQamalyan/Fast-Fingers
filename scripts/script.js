let button = document.getElementById("button1")
let center = document.getElementById("center1")
let choose = document.getElementById("choose1")
let keyboard = document.getElementById("keyboard")
let rocket = document.getElementById("figure-jumping")
let button2 = document.getElementById("asd")
let button3 = document.getElementById("edm")
let countdown = document.getElementById("count-down")
let game = document.getElementById("mam")
let startCount = document.getElementById("start-count")
let wordP = document.getElementById("text")
let inputArea = document.getElementById("input")
let scoreEl = document.getElementById("Score")
let timeEl = document.getElementById("time")
let hscoreEl = document.getElementById("h-score")
let gameback = document.getElementById("Back")
let Gameback = document.getElementById("Back-")
let Gameover = document.getElementById("game-over")
let Backover = document.getElementById("back+")

Backover.addEventListener("click",function(){
    location.reload()
})

button.addEventListener("click", function () {
    center.style.display = "none"
    choose.style.display = "block"
    rocket.style.display = "block"


})


button2.addEventListener("click", function () {
    keyboard.style.display = "block"
    gameback.style.display = "block"
    choose.style.display = "none"
    rocket.style.display = "none"

    gameKeyboard()

})
gameback.addEventListener("click", function () {
    keyboard.style.display = "none"
    choose.style.display = "block"
    gameback.style.display = "none"
    oneElement.classList.remove('selected')


})

Gameback.addEventListener("click", function () {
    game.style.display = "none"
    choose.style.display = "block"
  clearInterval(id2)


})



let oneLetter = randomItem(letterArr)
let oneElement = document.getElementById(oneLetter)
function gameKeyboard() {

    oneElement.classList.add("selected")
    document.addEventListener("keyup", function (event) {
        if (event.code === oneLetter) {
            oneElement.classList.remove("selected")
            oneLetter = randomItem(letterArr)
            oneElement = document.getElementById(oneLetter)
            oneElement.classList.add("selected")
        } else {
            let falseEl = document.getElementById(event.code)
            falseEl.classList.add("hit")
            setTimeout(function () {
                falseEl.classList.remove("hit")
            }, 10)

        }
    })

}
button3.addEventListener("click", function () {
    countdown.style.display = "block"
    choose.style.display = "none"
    rocket.style.display = "none"


    startCount.innerHTML = 3
    let id = setInterval(function () {
        if (startCount.innerHTML < 2) {
            clearInterval(id)
            generalGame()
            game.style.display = "block"
            countdown.style.display = "none"
        }
        startCount.innerHTML = startCount.innerHTML - 1
    }, 1000)


})





function chooseRandomElement(arr) {
    x = Math.floor(Math.random() * arr.length)
    return arr[x]
}


function randomItem(arr) {
    let index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

function EventListener(arr) {
    y = Math.floor(Math.random() * arr.length)
    return arr[y]
}



function generalGame() {
     
    let time = 10
    let hscore;
    if (!localStorage.score) {
        localStorage.score = 0
    }
    hscore = localStorage.score
    hscoreEl.innerHTML = localStorage.score
    scoreEl.innerHTML = 0
    timeEl.innerHTML = time
    let oneWord = randomItem(wordsArr)
    wordP.innerHTML = oneWord;
    id2 = setInterval(function(){
        if(timeEl.innerHTML <= 0){
            clearInterval(id2)
            gameOver()
        }
        timeEl.innerHTML--
    },1000)
    inputArea.addEventListener("keypress", function (e) {
        if (e.code == "Enter" && inputArea.value != "") {
            if (inputArea.value == oneWord) {
                scoreEl.innerHTML++
                timeEl.innerHTML =+timeEl.innerHTML + 3
                if (scoreEl.innerHTML >= hscore) {
                    hscore = scoreEl.innerHTML
                    localStorage.score = hscore
                    hscoreEl.innerHTML = hscore

                }
            } else if(inputArea.value !== wordP.innerHTML){
                if(timeEl.innerHTML >= 2 ){
                    timeEl.innerHTML = timeEl.innerHTML - 2
                }

            }
            oneWord = randomItem(wordsArr)
            wordP.innerHTML = oneWord;
            inputArea.value = ''
            // timeEl.innerHTML = time
        }



    })
}



function playAgain(){
    location.reload()
}


let score2 = document.getElementById("score2")

function gameOver(){
    Gameover.style="display:block"
    game.style = "display:none"
    // Backover.style = "displa"
    
    score2.innerHTML = scoreEl.innerHTML
}
