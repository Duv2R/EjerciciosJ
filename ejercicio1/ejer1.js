let SumNumero = document.querySelector("#punto1")
let suma = 0

SumNumero.addEventListener("submit", (e)=>{
    e.preventDefault()
    Numero = e.target.DigUsuario.value
    for(let sumatorias = 1; sumatorias <= Numero; sumatorias++){
        suma = suma + sumatorias;
        console.log("Sumatorias desde el 1 hasta el numero ingresado: "+ Numero+ "es igual a = "+suma)
    }
})