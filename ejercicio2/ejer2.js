let ParoImp = document.querySelector("#punto2")
ParoImp.addEventListener("submit", (e)=>{
    e.preventDefault()
    let Numero=e.target.DigUsuario.value
    if (Numero % 2 == 0){
        console.log("Su numero es par")
    }else[
        console.log("Su numero es impar")
    ]
})