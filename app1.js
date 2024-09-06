let Vidas = 3;
let numeroMaquina = Math.floor(Math.random() * (10 - 1 + 1) + 1);
console.log("El número secreto es: " + numeroMaquina);

comparacion();

function comparacion() {
    let numeroUser = parseInt(prompt("Ingresa un número del 1 al 10:"));
    while (numeroMaquina !== numeroUser && Vidas > 1) {
        Vidas--;
        alert(`Número incorrecto, vidas disponibles: ${Vidas}`);
        numeroUser = parseInt(prompt("Ingresa un número del 1 al 10:"));  
    }
    correct(numeroUser);
}

function correct(numeroUser) {
    if (numeroMaquina === numeroUser) {
        alert("Número correcto");
    } else {
        alert(`Intentos agotados, el valor era ${numeroMaquina}`);
    }
}