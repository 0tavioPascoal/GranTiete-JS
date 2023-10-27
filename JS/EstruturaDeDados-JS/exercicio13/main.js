/*Elaborar um algoritmo que calcule a equação do 2º grau */

function calcular(){
    let a= Number (document.getElementById('valorA').value)
    let b=Number (document.getElementById('valorB').value)
    let c=Number (document.getElementById('valorC').value)

    let resultado=(b*b)-4*a*c

    let resultado2= 2*a
    resultado=Math.sqrt(resultado)

    let x1=(-b + resultado)/resultado2
    document.getElementById('valorA2').innerHTML=x1

    let x2=(-b - resultado)/resultado2
    document.getElementById('valorB2').innerHTML=x2

    

}