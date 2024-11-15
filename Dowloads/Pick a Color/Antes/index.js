//variáveis
const colors = ['Red', 'Blue', 'black', 'Yellow', 'Purple', 'Green' ]
const btn = document.getElementById('btn')
//console.log(colors)
const color = document.querySelector('.color')
//No click
//ações:
btn.addEventListener('click', function() {
    const randomColor = getRandomColor() //associando a variavel
    document.body.style.background = colors[randomColor] //aplicando a cor ao background
    //console.log(randomColor)
    color.textContent = colors[randomColor]
})

//gerar um número randômico
function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}