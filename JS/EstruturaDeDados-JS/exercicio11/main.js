/*Escreva um algoritmo que leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:*/ 

function calcular(){
    let a= Number (document.getElementById('valorA').value)
    let b=Number (document.getElementById('valorB').value)
    let c=Number (document.getElementById('valorC').value)

    let resultado= a**2 + c**2 + b*(2*(a+b+c))

    document.getElementById('valor').innerHTML=resultado

}