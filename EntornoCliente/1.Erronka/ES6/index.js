// Constructor de Estudiante en ES5 function
class Estudiante {
    constructor(nombre, edad, ...asignaturas) {
        this.nombre = nombre;
        this.edad = edad;
        this.asignaturas = asignaturas;
    }


    saludar = () => console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);


    listarAsignaturas = () => console.log(`Mis asignaturas son: ${this.asignaturas.join(', ')}`);

}

const estudiante1 = new Estudiante('Ana', 20, 'Matemáticas', 'Historia', 'Literatura');
const {nombre, edad} = estudiante1;
// Destructuring manual para extraer nombre y edad

console.log('Nombre: ' + nombre);
console.log('Edad: ' + edad);
estudiante1.saludar();
estudiante1.listarAsignaturas();

const calcularPromedio = (...notas) => notas.reduce((suma, nota) => suma + nota, 0) / notas.length;
const promedioo = (...notas) => {
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    return suma / notas.length;
}


// Calcular promedio de notas
const promedio = calcularPromedio(85, 90, 78, 92);
const promedioa= promedioo(85, 90, 78, 92);
console.log(`El promedio es: ${promedio} o ${promedioa}`);
