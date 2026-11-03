//Ejercicio 7
const numeros = [12, 5, 8, 21, 4, 17, 10];
let suma;
let cuenta = numeros.filter(function(valor){
    if (valor>10) {
        return true;
    }
    else {
        return false;
    }
})

   
console.log(cuenta);
suma = cuenta.length;
console.log("Cantidad de números mayores estrictos a 10: "+suma)

