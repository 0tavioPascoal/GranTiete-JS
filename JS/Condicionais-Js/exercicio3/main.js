let button = document.querySelector('button')
button.addEventListener('click', () => {
    let num1= Number(document.getElementById("num1").value)
    let h2= document.querySelector("h2")
        if(num1 % 2 === 0)
            h2.innerHTML = `${num1} é par!`
        else if (num1  % 2 === 1)
                h2.innerHTML = `${num1} é impar!`
    }
        )