/*3. Tabuada: Crie um programa que solicite ao usuário um número e exiba a tabuada desse número, indo de 0 a 
10. */

const numero = (prompt("Digite um número para a tabuada:"));

  for (let i = 0; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }

