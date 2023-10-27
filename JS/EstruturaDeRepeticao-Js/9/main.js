/* Fatorial:  Peça  ao  usuário  para  inserir  um  número  inteiro  positivo  e  calcule  o  fatorial  desse  número  usando 
um loop.  */

const numero = parseInt(prompt("Digite um número inteiro positivo:"));

  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  console.log(`O fatorial de ${numero} é ${fatorial}.`);

