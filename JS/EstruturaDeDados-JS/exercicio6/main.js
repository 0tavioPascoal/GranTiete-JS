/*Construa um algoritmo que leia o nome de um aluno e três notas obtidas durante o semestre, ao final mostre 
o nome do aluno e a média aritmética das notas.*/

function calcular(){
    let valor1= Number (document.getElementById('nota1').value)
    let valor2=Number (document.getElementById('nota2').value)
    let valor3=Number (document.getElementById('nota3').value)
    let resultado=(valor1+valor2+valor3)/3

    let name=String(document.getElementById('nome1').value)
    document.getElementById('nome').innerHTML= name
    document.getElementById('media').innerHTML= resultado
}