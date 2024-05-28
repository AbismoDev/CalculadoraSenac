let num1 = ''
let num2 = ''
let operador = ''

function verificarCalculo(e) {
  let id = e.target.id
  let funcao = ''

  //   Aqui verificamos qual foi a entrada de dados
  if (
    id == '0' ||
    id == '1' ||
    id == '2' ||
    id == '3' ||
    id == '4' ||
    id == '5' ||
    id == '6' ||
    id == '7' ||
    id == '8' ||
    id == '9'
  ) {
    //   Tenho que pegar os números
    if (operador == '') {
      if (num1.length < 5) {
        num1 += id
      }
    } else {
      if (num2.length < 5) {
        num2 += id
      }
    }
  } else if (
    id == 'mais' ||
    id == 'menos' ||
    id == 'divisao' ||
    id == 'multiplicacao'
  ) {
    operador = id
  } else {
    funcao = id
  }

  switch (operador) {
    case 'mais':
      operador = '+'
      break
    case 'menos':
      operador = '-'
      break
    case 'divisao':
      operador = '/'
      break
    case 'multiplicacao':
      operador = '*'
      break
  }

  document.getElementById('res').innerHTML = `${num1} ${operador} ${num2}`

  if (funcao == 'igual') {
    if(num1 && num2 != ''){
      document.getElementById('res').innerHTML = calcular(
        Number(num1),
        Number(num2),
        operador
      )
      num1 = ''
      num2 = ''
      operador = ''
    }
  }

  if (funcao == 'del') {
    document.getElementById('res').innerHTML = ''
    operador = ''
    num1 = ''
    num2 = ''
  }
}

function calcular(n1, n2, op) {
  if (op != undefined) {
    if (op == '+') {
      return n1 + n2
    } else if (op == '-') {
      return n1 - n2
    } else if (op == '*') {
      return n1 * n2
    } else if (op == '/') {
      return n1 / n2
    }
  } else {
    return ''
  }
}
