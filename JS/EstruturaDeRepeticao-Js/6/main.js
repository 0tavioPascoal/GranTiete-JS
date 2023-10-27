/*Soma de Números Pares: Escreva um programa que solicite ao usuário um número inteiro positivo e calcule 
a soma de todos os números pares de 1 até o número inserido */

const num = parseInt(prompt("Digite um número inteiro positivo:"));
let soma = 0;
let x = 1;

while (x <= num) {
    if (x % 2 === 0) {
      soma += x;
    }
    x++;
  }

  console.log(`A soma de todos os números pares de 1 até ${num} é ${soma}.`);
