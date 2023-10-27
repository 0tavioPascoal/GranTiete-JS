/*Considerando  que  para  um  consórcio,  sabe-se  o  número  total  de  prestações,  a  quantidade  de  prestações 
pagas  e  o  valor  atual  da  prestação,  escreva  um  algoritmo  que  determine  o  total  pago  pelo  consorciado  e  o 
saldo devedor.*/

function calcular(){
    let numero1= Number (document.getElementById('numero1').value)
    let numero2=Number (document.getElementById('numero2').value)
    let numero3=Number (document.getElementById('numero3').value)
    let resultado=(numero2*numero3)
    document.getElementById('totalpago').innerHTML= "o resultado é "+ resultado
}

function calcular1(){
    let numero1= Number (document.getElementById('numero1').value)
    let numero2=Number (document.getElementById('numero2').value)
    let numero3=Number (document.getElementById('numero3').value)
    let resultado=(numero1-numero2)* numero3
    document.getElementById('totaldeve').innerHTML= "o resultado é "+ resultado
}

