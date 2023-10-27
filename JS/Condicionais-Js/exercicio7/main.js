let button = document.querySelector('button')
button.addEventListener('click', () => {
    let num1= Number(document.getElementById("num1").value)
    let num2= Number(document.getElementById("num2").value)
    let num3= Number(document.getElementById("num3").value)
    let h2= document.getElementById("h2_1")
    let h21= document.getElementById("h2_2")
    let resultado=(num2*num2)-4*num1*num3

    let resultado2= 2*num1
    resultado=Math.sqrt(resultado)

    let x1=(-num2 + resultado)/resultado2

    let x2=(-num2 - resultado)/resultado2

        if(x1 >= 0)
            h2.innerHTML=`${x1}, x1 é positivo!`;
        else
         if(x1 <= 0)
             h2.innerHTML=`${x1}, x1 é negativo!`;
             else
             if(x2 >= 0)
                 h21.innerHTML=`${x2}, x2 é positivo!`;
                else(x2 <= 0)
                    h21.innerHTML=`${x2}, x2 é negativo!`
}     
  )