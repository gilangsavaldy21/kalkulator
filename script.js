let prevNumber=''
let calculationOperator=''
let currentNumber = '0'


const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) =>{

    number.addEventListener("click", (event) => {
        // console.log(event.target.value)
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number
    }
    else{
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) =>{

    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber =''
}

const calculate = () => {
    let result =''
    switch(calculationOperator){
        case '+':
            result = parseFloat (prevNumber) +  parseFloat (currentNumber)
            break
        case '-':
            result = parseFloat (prevNumber) -  parseFloat (currentNumber)
            break
        case '*':
            result = parseFloat (prevNumber) *  parseFloat (currentNumber)
            break
        case '/':
            result = parseFloat (prevNumber) /  parseFloat (currentNumber)
            break
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')
equalSign.addEventListener('click',() => {
    calculate()
    updateScreen(currentNumber)
})

const clearAll = ( )=> {
    prevNumber = currentNumber
    calculationOperator
    currentNumber ='0'
}
const clearBtn =document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) =>{
    if (currentNumber.includes('.')){
        currentNumber += dot
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})