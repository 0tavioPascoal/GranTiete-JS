/* <!--Escreva  um  algoritmo  que  calcule  a  quantidade  de  latas  de  tinta  necessárias  e  o  custo  para  pintar  tanques 
cilíndricos de combustível, onde são fornecidos a altura (h) e o raio (r) desse cilindro. Sabe-se que a lata de 
tinta anticorrosiva custa R$ 40.00, cada lata contem 5 litros e cada litro pinta 3 metros quadrados na média. 
Para que fique bem coberto de tinta, há necessidade de 2 demãos. 
Portanto: 
    1) A lata de tinta custa 40,00; 
    2) Cada lata contém 5 litros; 
    3) A cada litro de tinta pinta 3 metros quadrados. Dados de entrada: altura (H) e raio (R). 
    Dados de saída: custo (C) e quantidade (QTDE). 
    Utilizando o planejamento reverso, sabemos que: 
        • Custo é dado por quantidade de latas * 40,00; 
        • Quantidade de latas é dada por quantidade total de litros/5; 
        • A quantidade total de litros é dada por área do cilindro/3 * 2; 
        • Área do cilindro é dada por área da base + área lateral; 
        • Área da base é (P1 * EXP(R,2)); 
        • A área lateral é altura * comprimento: (2 * P1 * R * H); 
        • Sendo que R (raio) e H (altura) são dados de entrada e P1 é urna constante de valor conhecido: 3,14.  -->*/

function calcular(){

    let pi= 3.14
    let h= Number (document.getElementById('altura').value)
    let r= Number (document.getElementById('raio').value)

    let resultado1=(2*pi*r*h)
    document.getElementById('arealateral').innerHTML=resultado1

    let resultado2=(pi*(r*r))
    document.getElementById('areabase').innerHTML=resultado2

    let resultado3=(resultado1+resultado2)
    document.getElementById('areacilindro').innerHTML=resultado3

    let resultado4=((resultado3/3)*2)
    document.getElementById('quantidadelitros').innerHTML=resultado4

    let resultado5=(resultado4/5)
    document.getElementById('qlatas').innerHTML=resultado5

    let resultado6=(resultado5*40)
    document.getElementById('custo').innerHTML=resultado6




    

}