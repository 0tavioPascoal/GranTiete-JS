/*Elaborar um algoritmo que efetue a apresentação do valor da conversão em real (R$) de um valor lido em 
dólar (US$). O algoritmo deverá solicitar o valor da cotação do dólar e também a quantidade de dólares 
disponíveis com o usuário.*/

function calcular(){
    let valor1=Number (document.getElementById('valordolaratual').value)
    let valor2=Number (document.getElementById('temdolar').value)
    let resultado=(valor1*valor2)

    document.getElementById('convertido').innerHTML= resultado
}