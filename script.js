const calculadora = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operador: null,
};
function atualizarDisplay() {
    const display = document.querySelector('.telaCalculadora');
    display.value = calculadora.displayValue;
}
  
atualizarDisplay();

const botoes = document.querySelector('.botoesCalculadora');
botoes.addEventListener('click', (event) => {
  const target = event.target;

  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operadores')) {
    handleOperator(target.value);
    atualizarDisplay();
    return;
  }

  if (target.classList.contains('decimal')) {
    colocarDecimal(target.value);
    atualizarDisplay();
    return;
  }

  if (target.classList.contains('reset')) {
    resetaCalculadora();
    atualizarDisplay();
    return;
  }

  if (target.classList.contains('delete')){
      console.log('delete', target.value);
      return;
  }

  colocarDigito(target.value);
  atualizarDisplay();
});

function colocarDigito(digit) {
    const { displayValue, waitingForSecondOperand } = calculadora;
    if (waitingForSecondOperand === true) {
      calculadora.displayValue = digit;
      calculadora.waitingForSecondOperand = false;
    } else {
      calculadora.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    console.log(calculadora);
}
function colocarDecimal(dot) {
    if (calculadora.waitingForSecondOperand === true) {
        calculadora.displayValue = '0.'
      calculadora.waitingForSecondOperand = false;
      return
    }
  
    if (!calculadora.displayValue.includes(dot)) {
      calculadora.displayValue += dot;
    }
}
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operador } = calculadora
  const inputValue = parseFloat(displayValue);

  if (operador && calculadora.waitingForSecondOperand)  {
    calculadora.operador = nextOperator;
    console.log(calculadora);
    return;
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculadora.firstOperand = inputValue;
  } else if (operador) {
    const result = calcular(firstOperand, inputValue, operador);
    calculadora.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculadora.firstOperand = result;
  }

  calculadora.waitingForSecondOperand = true;
  calculadora.operador = nextOperator;
  console.log(calculadora);
}

function calcular(firstOperand, secondOperand, operador) {
    if (operador === '+') {
      return firstOperand + secondOperand;
    } else if (operador === '-') {
      return firstOperand - secondOperand;
    } else if (operador === '*') {
      return firstOperand * secondOperand;
    } else if (operador === '/') {
      return firstOperand / secondOperand;
    } else if (operador === 'negativo'){
      return 1 / secondOperand;
    } else if (operador === 'raizQuadrada'){
      return parseFloat(Math.sqrt(secondOperand).toFixed(3));
    } else if (operador === 'raizCubica'){
      return parseFloat(Math.cbrt(secondOperand).toFixed(3));
    } else if (operador === 'quadrado'){
      return Math.pow(secondOperand,2);
    } else if (operador === 'cubo'){
      return Math.pow(secondOperand,3);
    }
  
    return secondOperand;
}
function resetaCalculadora() {
    calculadora.displayValue = '0';
    calculadora.firstOperand = null;
    calculadora.waitingForSecondOperand = false;
    calculadora.operador = null;
    console.log(calculadora);
}
function deletar(){

}