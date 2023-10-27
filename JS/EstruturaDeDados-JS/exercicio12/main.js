/* Escreva um algoritmo que leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: */

function calcular(){
    let a= Number (document.getElementById('valorA').value)

    let resultado= (a -32)*5/9

    document.getElementById('valor').innerHTML=resultado

}