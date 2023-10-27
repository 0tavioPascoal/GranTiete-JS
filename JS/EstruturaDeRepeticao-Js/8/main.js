/*Números Primos: Peça ao usuário um número inteiro e determine se ele é primo ou não */

const numero = parseInt(prompt("Digite um número inteiro:"))

if (isNaN(numero) || numero <= 1) {
  console.log("Por favor, insira um número inteiro maior que 1.")
} else {
  let primo = true

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      primo = false
      break
    }
  }

  if (primo) {
    console.log(`${numero} é um número primo.`)
  } else {
    console.log(`${numero} não é um número primo.`)
  }
}
