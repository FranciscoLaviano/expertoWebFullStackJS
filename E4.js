

const t = [{Nombre: "Francisco", Apellido: "Laviano", Nota: 4},
          {Nombre: "Juan", Apellido: "Perez", Nota: 8},
            {Nombre: "Maria", Apellido: "Gonzalez", Nota: 3},
            {Nombre: "Pedro", Apellido: "Gomez", Nota: 0},
            {Nombre: "Lucia", Apellido: "Martinez", Nota: 10},
            {Nombre: "Ana", Apellido: "Lopez", Nota: 6},
            {Nombre: "Carlos", Apellido: "Rodriguez", Nota: 5},
            {Nombre: "Sofia", Apellido: "Fernandez", Nota: 12},
];

console.log("LISTA GENERAL (nota máxima 12)");
console.log(t);

let u = t.filter(function (nota) {
    return nota.Nota >=6
});
console.log("LISTA DE APROBADOS (nota mínima 6)");
console.log(u);

