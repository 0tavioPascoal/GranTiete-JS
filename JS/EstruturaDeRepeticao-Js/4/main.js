/*Soma  de  Quadrados:  Escreva  um  programa  que  calcule  a  soma  dos  quadrados  dos  primeiros  N  números 
inteiros positivos, onde N é inserido pelo usuário. */

const n = (prompt("Digite um número:"))
let i = 0

for (let i = 1; i <= n; i++) {
    soma =+ i * i
  }

  console.log(`A soma dos quadrados dos primeiros ${n} números inteiros positivos é ${soma}.`)
