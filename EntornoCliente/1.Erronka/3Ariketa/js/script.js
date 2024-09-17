function mezua() {
    var zenbakia = prompt("Zenbaki");

    zenbakia = Number(zenbakia);
    // Verificar si el valor es un número válido
    if (!isNaN(zenbakia)) {
        // Verificar si el número es negativo
        if (zenbakia < 0) {
            return 0;
        } else {
            let resultado = 1;
            // Calcular el factorial
            for (let i = 1; i <= zenbakia; i++) {
                resultado *= i;
            }
            return resultado;
        }
    } else {
        // Manejo de caso en el que el input no es un número
        return "Error: Entrada no válida";
    }
}

function aldatulabel() {
    var label = document.getElementById("testua");
    label.textContent = String(mezua());
}


