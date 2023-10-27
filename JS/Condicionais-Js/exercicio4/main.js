let button = document.querySelector('button')
button.addEventListener('click', () => {
    let num1= Number(document.getElementById("ano").value)
    let h2= document.querySelector("h2")
        if (num1%400 == 0)
            h2.innerHTML="É bissexto";
        else
         if(num1%4==0 && num1%100!=0)
             h2.innerHTML="É bissexto";
        else
            h2.innerHTML="Não é bissexto";
}     
  )