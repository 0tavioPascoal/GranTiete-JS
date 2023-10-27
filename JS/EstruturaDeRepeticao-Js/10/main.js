/* Sequência  de  Fibonacci:  Escreva  um  programa  que  gera  e  exibe  os  primeiros  N  números  da  sequência  de 
Fibonacci, onde N é fornecido pelo usuário. */

const N = parseInt(prompt("Digite o número de termos da sequência de Fibonacci que você deseja gerar:"))

if (isNaN(N) || N <= 0) {
  console.log("Por favor, insira um número positivo válido.")
} else {
  let termo1 = 0
  let termo2 = 1
  let i = 1

  console.log("Sequência de Fibonacci:")

  while (i <= N) {
    console.log(termo1)
    const proximoTermo = termo1 + termo2
    termo1 = termo2
    termo2 = proximoTermo
    i++
  }
}
