
const input1 = document.getElementById("nombre");
const input2 = document.getElementById("edad");

const resultado = document.getElementById("resultado");

input1.addEventListener("input", function(event) {
    resultado.textContent = "Nombre ingresado: " + input1.value +" Edad: "+ input2.value;
    
    console.log(event);
});
input2.addEventListener("input", function(event) {
    resultado.textContent = "Nombre ingresado: " + input1.value + "| Edad: "+ input2.value;
    console.log(event);
});

let listaEstudiantes = [];
function agregarEstudiante() {
    const nombreC = input1.value;
    const edadG = input2.value;
    listaEstudiantes.push({"Nombre completo": nombreC, "Edad": edadG});
    console.log(listaEstudiantes);
    localStorage.setItem("estudiantes", JSON.stringify(listaEstudiantes));
}


let listaEstudiantesGuardados = JSON.parse(localStorage.getItem("estudiantes")) || [];
console.log(listaEstudiantesGuardados);
document.getElementById("estudiantesGuardados").textContent = "Estudiantes guardados: " + JSON.stringify(listaEstudiantesGuardados.map(est => est["Nombre completo"] + " " + est["Edad"]));

const buscarEstudiante = () => {
    const nombreABuscar = document.getElementById("buscarEstudiante").value;
    const estudianteEncontrado = listaEstudiantesGuardados.find(est => est["Nombre completo"] === nombreABuscar);
    document.getElementById("estudianteEncontrado").textContent = "Estudiante encontrado: " + JSON.stringify(estudianteEncontrado);
};

function mostrarTodos() {
    document.getElementById("estudiantesGuardados").textContent = "Estudiantes guardados: " + JSON.stringify(listaEstudiantesGuardados.map(est => est["Nombre completo"] + " " + est["Edad"]));
}
let n = listaEstudiantesGuardados.length
console.log("Cantidad de datos en la planilla: "+listaEstudiantesGuardados.length);
alert("Cantidad de datos en la planilla: "+n);

function datosGuardados() {
    const datos = JSON.parse(localStorage.getItem("listaEstudiantedGuardados")) || [];
    console.log("Datos guardados en localStorage:", datos);
    alert("Datos guardados en localStorage: " + JSON.stringify(datos));
    alert(datos);
}
;
