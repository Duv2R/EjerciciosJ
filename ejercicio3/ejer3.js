let premio = document.querySelector("#punto3")



premio.addEventListener("submit", (e) => {
    e.preventDefault()
    let premiacionB = e.target.años.value
    if ( premiacionB >= 11 && premiacionB <=17) {
        alert("No tiene la edad requerida no gana nada ")
        return
    } 
    if (premiacionB == '') {
        alert("le faltan datos o ")
        return
    } else if (premiacionB <= 10) {
        alert("Le toca jugo")
    } else if (premiacionB >= 18) {
        alert("Reclame su cerveza")
    } 
    let premiacionC = e.target.genero.value
    if (premiacionC == "Hombre") {
        alert("Ve por tu pizza 3 carnes")
    } else if (premiacionC == "Mujer")
        alert("Ve por tu pizza hawaiana")
})
