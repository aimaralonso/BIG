$(document).ready(function() {

    $("#formularioa").on('submit', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        const izena = $("#izena").val();
        const abizenak = $("#abizena").val();
        const email = $("#email").val();
        const animalesSeleccionados = animales();
        if (!emailBalidatu(email)) {
            alert("Sartu email baliozkoa. Emailak '@' eta '.' behar ditu eta '...' ondoren hiru karakterrekoa izan behar du.");
            return; // Detener ejecución si el email no es válido
        }
        // Verificar si todos los campos están vacíos
        let textoLleno = false;
        $("input").each(function() {
            if ($(this).val().trim() !== "" || animalesSeleccionados.length > 0) {
                textoLleno = true;
            }
        });

        // Condicional para mostrar el alert
        if (textoLleno) {
            alert("Izena: " + izena + ", Abizenak: " + abizenak + ", Animales: " + animalesSeleccionados + ", Email: " + email);
        } else {
            alert("Ez dago ezer beteta");
        }
        event.submit();
    });
});

// Función para obtener los animales seleccionados
function animales() {
    let animalesSeleccionados = [];
    $("input[name='animales']:checked").each(function() {
        animalesSeleccionados.push($(this).val()); // Guardamos el valor de cada checkbox marcado
    });
    return animalesSeleccionados;
}
function emailBalidatu(email){
    const arroba=email.indexOf('@')
    const despues=email.indexOf('.',arroba);
    if(arroba!==0&&despues!==0&&email.length-despues===4){
        return true;
    }
    else{
        return false;
    }
}
