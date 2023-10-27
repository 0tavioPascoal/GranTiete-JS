let button = document.querySelector('button')
button.addEventListener('click', () => {
    let num1= Number(document.getElementById("num1").value)
    let num2= Number(document.getElementById("num2").value)
    let num3= Number(document.getElementById("num3").value)
    let h2= document.querySelector("h2")

    let aux = num1;

    if(num2 > num1)
     aux=num2;
     num2=num1;
     num1=aux;
    

    if(num3 > num1)
     aux=num3;
     num3=num1;
     num1=aux;
    

    if(num3 > num2)
     aux=num3;
     num3=num2;
     num2=aux;
    
    h2.innerHTML=`${num1} , ${num2} e ${num3}`    
}
)