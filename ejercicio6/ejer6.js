let premio = document.querySelector("#punto6") ;


premio.addEventListener("submit", (e) => {
    e.preventDefault()
    let valorM = 1000000 
    let descuentoA = 0.05
    let descuentoB = 0.5
    let descuentoaplicado = 0
    let premiacionB = e.target.prom.value
    if ( premiacionB < 3) {
        alert("No recibe descuento")
        return
    } 
    if (premiacionB >= 3 && premiacionB <=4 ) {
        descuentoaplicado = valorM * descuentoA
        valorM = valorM - descuentoaplicado
        alert(`recibe un descuento 5%, para un total de ${valorM}`)

        return
    } else if (premiacionB >= 4 && premiacionB <=5) {
        descuentoaplicado = valorM * descuentoB
        valorM = valorM - descuentoaplicado
        alert(`recibe un descuento 50%, para un total de ${valorM}`)   
    } 
})