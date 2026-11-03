 // Ejercicio 1:Calcular precio final

 
 let precio = 0;
 let costo;

 if (isNaN(precio) || precio < 0) {console.log("Por favor, ingrese un precio válido.")} else if (precio > 10000) {costo = precio*0.8} else {costo = precio};
 console.log("El precio final del producto es: $" + precio) 
 
 console.log("El costo es de: $" + costo);