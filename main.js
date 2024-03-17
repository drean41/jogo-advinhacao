// variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let randomNumber  = Math.round(Math.random() * 10)
let xAttempts = 1
let intervaloPermitido
// console.log(randomNumber) (apenas para controle)


// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterReset)

// callback function
function handleTryClick(event) {
  event.preventDefault() // impeça o padrão do form que é enviar

  const inputNumber = document.querySelector("#inputNumber")

  if(inputNumber.value == randomNumber) {
    toggleScreen()

    msg =`Acertou em ${xAttempts} tentativa`
    if(xAttempts > 1) {
      msg += 's'
    }
    screen2
      .querySelector("h2")
      .innerText = msg
  }

  valido = inputNumber.value >= 0 || inputNumber.value <= 10
  vazio = Number(inputNumber.value) == ''
  if(valido) {
    xAttempts++
  } else if(vazio) {
    alert('Você não pode jogar com o campo vazio!')
    inputNumber.focus()
  } else {
    alert('Você não pode jogar com um número inválido!')
  }

  inputNumber.value = ''
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber  = Math.round(Math.random() * 10)
  // console.log(randomNumber) (apenas pra controle)
}
// btnTry.addEventListener('click', handleTryClick)
// btnReset.addEventListener('click', function() {
//   screen1.classList.remove("hide")
//   screen2.classList.add("hide")
//   xAttempts = 1
// })

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function enterReset(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

