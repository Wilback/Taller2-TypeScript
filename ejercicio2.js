//Escribe una función que reciba una lista de números enteros y clasifique cada numero en una de las siguientes categorías: Positivo=números mayores que cero; negativo=números menores que cero; cero=números iguale a cero. La función debe devolver un objeto con tres propiedades: Positivos, negativos y ceros, que contienen listas de números correspondientes a cada categoría.

function clasificarNumeros(lista) {
    // Inicializar las listas para positivos, negativos y ceros
    let positivos = [];
    let negativos = [];
    let ceros = [];

    // Recorrer la lista de números
    for (let numero of lista) {
        if (numero > 0) {
            // Si es positivo, agregar a la lista de positivos
            positivos.push(numero);
        } else if (numero < 0) {
            // Si es negativo, agregar a la lista de negativos
            negativos.push(numero);
        } else {
            // Si es cero, agregar a la lista de ceros
            ceros.push(numero);
        }
    }

    // Crear y devolver el objeto con las listas clasificadas
    return {
        Positivos: positivos,
        Negativos: negativos,
        Ceros: ceros
    };
}

// Ejemplo de uso:
const numeros = [5, -2, 0, 10, -8, 3, 0, -1];
const resultado = clasificarNumeros(numeros);

console.log(resultado);
