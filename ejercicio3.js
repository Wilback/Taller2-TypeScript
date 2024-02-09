//implemente una función que genera contraseñas aleatorias basadas en ciertos criterios. La función debe aceptar parámetros como la longitud de la contraseña y los tipos de caracteres permitidos (mayúsculas, minúsculas, números y caracteres especiales)

function generarContraseña(longitud, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirEspeciales) {
    // Definir los conjuntos de caracteres posibles
    const caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresNumeros = '0123456789';
    const caracteresEspeciales = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    // Crear la cadena de caracteres permitidos basada en los parámetros
    let caracteresPermitidos = '';
    if (incluirMayusculas) caracteresPermitidos += caracteresMayusculas;
    if (incluirMinusculas) caracteresPermitidos += caracteresMinusculas;
    if (incluirNumeros) caracteresPermitidos += caracteresNumeros;
    if (incluirEspeciales) caracteresPermitidos += caracteresEspeciales;

    // Verificar que al menos un tipo de caracter esté permitido
    if (caracteresPermitidos === '') {
        throw new Error('Debe incluir al menos un tipo de caracteres en la contraseña.');
    }

    // Generar la contraseña aleatoria
    let contraseñaGenerada = '';
    for (let i = 0; i < longitud; i++) {
        const caracterAleatorio = caracteresPermitidos[Math.floor(Math.random() * caracteresPermitidos.length)];
        contraseñaGenerada += caracterAleatorio;
    }

    return contraseñaGenerada;
}

// Ejemplo de uso:
const longitudContraseña = 12;
const incluirMayusculas = true;
const incluirMinusculas = true;
const incluirNumeros = true;
const incluirEspeciales = true;

const contraseñaGenerada = generarContraseña(longitudContraseña, incluirMayusculas, incluirMinusculas, incluirNumeros, incluirEspeciales);

console.log(contraseñaGenerada);
