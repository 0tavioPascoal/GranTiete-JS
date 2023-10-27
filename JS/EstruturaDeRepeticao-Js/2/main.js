/*2.  Soma  de  Números:  Peça  ao  usuário  para  inserir  um  número  inteiro  positivo  e  calcule  a  soma  de  números 
antecessores */

const numero = parseInt(prompt("Digite um número inteiro positivo:"));

let soma = 0;

for (let i = 1; i < numero; i++) {
 soma += i;
}

alert(`A soma dos números antecessores a ${numero} é igual a ${soma}.`);

