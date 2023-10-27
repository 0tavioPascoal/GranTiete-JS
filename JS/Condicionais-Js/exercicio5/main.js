let button = document.querySelector('button')
button.addEventListener('click', () => {
    let num1= Number(document.getElementById("num1").value)
    let num2= Number(document.getElementById("num2").value)
    let h2= document.querySelector("h2")
    resultado=(num1+num2)
        if (resultado % 2 === 0)
            h2.innerHTML="São multiplos!!!";
        else
         if(resultado % 2 === 1)
             h2.innerHTML="Não são Multiplos!!!";
}     
  )