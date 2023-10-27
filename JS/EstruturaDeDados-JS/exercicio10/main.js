/*Analisando a fórmula "Prestação = valor + (valor * (taxa/100) * tempo)", crie um algoritmo para efetuar o 
cálculo do valor de uma prestação em atraso. (Você deverá ler o VALOR da prestação, a TAXA de juros 
imposta pelo banco, e o número de dias em ATRASO.*/ 

function calcular(){
    let valor1= Number (document.getElementById('valorpretacao').value)
    let valor2=Number (document.getElementById('juros').value)
    let valor3=Number (document.getElementById('tempo').value)
    let Prestacao = valor1 + (valor1 * (valor2/100) * valor3)
    document.getElementById('valortotal').innerHTML= Prestacao
}