const numberOne = Number(prompt('Escolha um número'));
const numberTwo = Number(prompt('Escolha outro número'));

const sum = numberOne + numberTwo;
const sub = numberOne - numberTwo;
const mult = numberOne * numberTwo;
const div = numberOne / numberTwo;
const rest = numberOne % numberTwo;

alert('Soma: ' + sum);
alert('Subtração: ' + sub);
alert('Multiplicação: ' + mult);
alert('Divisão: ' + div);
alert('Resto da divisão: ' + rest);

if ((sum % 2)==0) {
  alert ('A soma é um número par')
} else {
  alert ('A soma é um número impar')
}

if (numberOne !== numberTwo) {
  alert ('Os números escolhidos não são iguais')
} else {
  alert ('Os números escolhidos são iguais')
}
