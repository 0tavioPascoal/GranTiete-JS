/*Escrever um algoritmo que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por 
ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, 
informar o seu nome, o salário fixo e salário no final do mês.*/

function calcular(){
    let valor1=Number (document.getElementById('salariofixo').value)
    document.getElementById('salariosempre').innerHTML= valor1

    let valor2=Number (document.getElementById('porcetagem').value)
    let resultado1=(valor2*0.15)

    let valornovo=(valor1+resultado1)
    document.getElementById('salariocomissao').innerHTML= valornovo

    let name=String(document.getElementById('nome1').value)
    document.getElementById('nome').innerHTML= name
}