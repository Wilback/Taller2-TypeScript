// Parte 1
// Declaración de variables
let numero: number = 10; // Número
let cadena: string = "Buenas noches"; // Cadena de texto
let booleano: boolean = true; // Booleano
let arreglo: number[] = [1, 2, 3, 4, 5]; // Arreglo de números
let objeto: { nombre: string, edad: number } = { nombre: "Wilson", edad: 37 }; // Objeto con propiedades nombre y edad
// Mostrar variables
console.log("Número:", numero);
console.log("Cadena:", cadena);
console.log("Booleano:", booleano);
console.log("Arreglo:", arreglo);
console.log("Objeto:", objeto);

// Declaración de una variable con tipo de literal
let diaDeLaSemana: "lunes" | "martes" | "miércoles" | "jueves" | "viernes" = "lunes";
// Mostrar el valor de la variable en la consola
console.log("Día de la semana:", diaDeLaSemana);


// Parte 2
// Estructura condicional que determina el rango de la edad
function determinarRangoEdad(edad: number): string {
    let rangoEdad: string;

    if (edad <= 5) {
        rangoEdad = "Primera Infancia";
    } else if (edad > 5 && edad <= 11) {
        rangoEdad = "Infancia";
    } else if (edad > 11 && edad <=18) {
        rangoEdad = "Adolescencia";
    } else if (edad > 18 && edad <= 26) {
        rangoEdad = "Juventud";
    } else if (edad > 26 && edad < 60) {
        rangoEdad = "Adultez";
    } else {
        rangoEdad = "Vejez";
    }

    // Parte 3
    // Retorna el rango de edad determinado
    return rangoEdad;
}

// Parte 3
// Ejemplo de uso de la función de rango de la edad
let edadUsuario: number = 30;
let rangoEdadUsuario: string = determinarRangoEdad(edadUsuario);
// Mostrar en la consola
console.log("El rango de edad del usuario es:", rangoEdadUsuario);


// Parte 4
// Función con parámetro opcional
function saludar(nombre?: string): void {
    if (nombre) {
        console.log("¡Hola, " + nombre + "!");
    } else {
        console.log("¡Hola, Buen dia!");
    }
}
// Llamar a la función saludar
saludar();
saludar("Wilson");

// Función con parámetro con valor predeterminado
function sumar(a: number, b: number = 0): number {
    return a + b;
}
// Llamadas a la función sumar
console.log(sumar(5));
console.log(sumar(5, 3));
