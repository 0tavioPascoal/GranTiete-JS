/*Contagem de Vogais: Solicite ao usuário que insira uma palavra e conte quantas vogais (a, e, i, o, u) estão 
na palavra */

const palavra = prompt("Digite uma palavra:").toLowerCase();

let contadorVogais = 0;

for (let i = 0; i < palavra.length; i++) {
  const letra = palavra[i];
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    contadorVogais++;
  }
}

console.log(`A palavra "${palavra}" contém ${contadorVogais} vogais.`);
