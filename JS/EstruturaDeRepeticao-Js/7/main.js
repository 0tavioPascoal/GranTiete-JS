/*Calculadora de Média: Crie um programa que peça ao usuário para inserir números até que ele digite -1. Em 
seguida, calcule e exiba a média dos números inseridos.  */

let soma = 0;
let contador = 0;
let numero = parseInt(prompt("Digite um número (ou -1 para sair):"));

while (numero !== -1) {
  if (!isNaN(numero)) {
    soma += numero;
    contador++;
  }
  numero = parseInt(prompt("Digite um número (ou -1 para sair):"));
}

if (contador === 0) {
  console.log("Nenhum número válido foi inserido.");
} else {
  const media = soma / contador;
  console.log(`A média dos números inseridos é: ${media}`);
}
