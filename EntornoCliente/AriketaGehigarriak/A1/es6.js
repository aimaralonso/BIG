$(document).ready(() => {
    $("#formularioa").on('submit', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        const izena = $("#izena").val();
        const abizenak = $("#abizena").val();
        const email = $("#email").val();
        const animalesSeleccionados = obtenerAnimales();

        // Validar el email
        if (!validarEmail(email)) {
            alert("Sartu email baliozkoa. Emailak '@' eta '.' behar ditu eta '...' ondoren hiru karakterrekoa izan behar du.");
            return; // Detener ejecución si el email no es válido
        }

        // Verificar si todos los campos están vacíos
        const textoLleno = $("input").toArray().some(input => $(input).val().trim() !== "") || animalesSeleccionados.length > 0;

        // Condicional para mostrar el alert
        if (textoLleno) {
            alert(`Izena: ${izena}, Abizenak: ${abizenak}, Animales: ${animalesSeleccionados.join(", ")}, Email: ${email}`);
        } else {
            alert("Ez dago ezer beteta");
        }
    });
});

// Función para obtener los animales seleccionados
const obtenerAnimales = () => {
    return $("input[name='animales']:checked").map((_, input) => $(input).val()).get(); // Guardamos el valor de cada checkbox marcado
}

// Función para validar el email
const validarEmail = (email) => {
    const arroba = email.indexOf('@');
    const despues = email.indexOf('.', arroba);
    return arroba > 0 && despues > arroba + 1 && email.length - despues > 3; // Valida las condiciones
}
