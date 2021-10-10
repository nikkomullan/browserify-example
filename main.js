const { addNumbers, substructNumbers } = require("./helpers")

const handleClick = () => {
  const firstNumber = document.querySelector("input#first").value
  const secondNumber = document.querySelector("input#second").value
  const result = addNumbers(firstNumber, secondNumber)
  alert(`The result is: ${result}`)
}

const button = document.querySelector("button")
button.addEventListener("click", handleClick)
