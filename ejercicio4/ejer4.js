

// document.addEventListener("DOMContentLoaded", function() {
//     const comidaInput = document.getElementById("comidaInput");
//     const agregarBtn = document.getElementById("agregarBtn");
//     const pagarBtn = document.getElementById("pagarBtn");
//     const totalSpan = document.getElementById("totalSpan");
  
//     let total = 0;
  
//     agregarBtn.addEventListener("click", function() {
//       const comida = comidaInput.value;
      
//       if (comida.trim() !== "") {
//         // Aquí deberías tener un mecanismo para buscar el precio de la comida en base a su nombre
//         // Por ejemplo, podrías usar un objeto o un mapa que relacione nombres de comidas con precios
//         // const precio = obtenerPrecio(comida); // Esta función debería buscar el precio de la comida
  
//         // Ejemplo: Usando un objeto para los precios
//         const precios = {
//           "Hamburguesa": 10.900,
//           "Pizza": 8.400,
//           "Ensalada": 4.500
//         };
  
//         const precio = precios[comida];
  
//         if (precio) {
//           total += precio;
//           totalSpan.textContent = `$${total.toFixed(3)}`;
//           comidaInput.value = "";
//         } else {
//           alert("Eso no lo tenemos en el menu, pida otra cosa que si hay");
//         }
//       }
//     });
  
//     pagarBtn.addEventListener("click", function() {
//       alert(`Total a pagar: $${total.toFixed(3)}`);
//       total = 0;
//       totalSpan.textContent = "$0.000";
//     });
//   });
  
document.addEventListener("DOMContentLoaded", function() {
    const comidaInput = document.getElementById("comidaInput");
    const totalSpan = document.getElementById("totalSpan");
  
    let total = 0;
  
    comidaInput.addEventListener("input", function() {
      const inputText = comidaInput.value.trim().toLowerCase();
  
      if (inputText === "pagar") {
        if (total > 0) {
          totalSpan.textContent = `Total a pagar: $${total.toFixed(3)}`;
        } else {
          totalSpan.textContent = "No hay nada para pagar.";
        }
      } else {
        // Aquí deberías tener un mecanismo para buscar el precio de la comida en base a su nombre
        // Por ejemplo, podrías usar un objeto o un mapa que relacione nombres de comidas con precios
        // const precio = obtenerPrecio(comida); // Esta función debería buscar el precio de la comida
  
        // Ejemplo: Usando un objeto para los precios
        const precios = {
          "hamburguesa": 8.990,
          "pizza": 10.500,
          "ensalada": 6.750
        };
  
        const precio = precios[inputText];
  
        if (precio) {
          total += precio;
          totalSpan.textContent = `$${total.toFixed(3)}`;
          comidaInput.value = "";
        }
      }
    });
  });
  
  


