
let computerNumber
let userNumbers = [] //aqui eu armazeno os números que eu tentar.
let attempts = 0
let maxguesses = 10


function newGame() {
    window.location.reload()
}

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}
//Math.floor = arredonda o número.
//Math.random = gera um número randômico.

function compareNumbers() {
   const userNumber =  Number(document.getElementById('inputBox').value)
    //O Number vem da página HTML e é armazenado dentro do userNumber.
    //agora, para armazenar o número dentro da array (let userNumbers):
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers

// numero de tentativas < do que 10 tentativas.
    if (attempts < maxguesses) {
        if (userNumber > computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too high'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        else if (userNumber < computerNumber) {
            document.getElementById('textOutput').innerHTML = 'Your number is too low'
            document.getElementById('inputBox').value = ''
            attempts++
            document.getElementById('attempts').innerHTML = attempts
        }
        else {
            document.getElementById('textOutput').innerHTML = 'You got it. Yeahhhh!!!'
            attempts++
            document.getElementById('attempts').innerHTML = attempts
            document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        }
    }
    else {
        document.getElementById('textOutput').innerHTML = "You Lose! The computer number was " + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }   
}
//melhoramentos: apagar o número depois do enter e mostrar o numero de tentativas.
