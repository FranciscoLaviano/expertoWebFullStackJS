
console.log("EJERCICIO 1");
let temperaturaCelsius = -10;
let temperaturaFahrenheit = temperaturaCelsius * 9/5 + 32;

console.log("La temperatura en Celsius es: " + temperaturaCelsius + "°C y en Fahrenheit es: " + temperaturaFahrenheit + "°F");

console.log("EJERCICIO 2");

let edad = 44;

if(edad < 0 || isNaN(edad)){
    console.log( "Ingrese un valor válido");
} else if (edad < 13) {
    console.log("edad: " + edad + " Eres un niño");
} else if (edad >= 13 && edad < 18) {
    console.log("edad: " + edad + " Eres un adolescente");
} else if (edad >= 18 && edad < 60) {
    console.log("edad: " + edad + " Eres un adulto");
} else {
    console.log("edad: " + edad + " Eres un adulto mayor");
}

console.log("EJERCICIO 3");

const gastos = [3500, 12000, 2800, 7500, 15000, 4200];

function calcularGastoTotal(gastos) {
    let total = 0;
    for (let i = 0; i < gastos.length; i++) {
        total += gastos[i];
    }
    return total;
}

console.log("Gasto total: $" + calcularGastoTotal(gastos));

function contarGastosAltos(gastos, umbral) {
    let contador = 0;
   
    if (gastos > umbral) {
        contador++;
    } else {
        contador = 0; 
    }
    return contador;
    
}