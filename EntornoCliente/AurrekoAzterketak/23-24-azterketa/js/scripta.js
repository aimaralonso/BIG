$(document).ready(function () {

    $("#erosiForm").hide()
    $("#erakutsi").click(Aukeraketa);
    $("#erosi").click(Formularioa);
});

function Aukeraketa() {
    $("#erosiForm").hide()
    if ($('#mota option:selected').html() == "Aukeratu") {
        alert("Bidalketa mota aukeratu behar duzu");
    } else {
        irudiakSortu();
    }

}

function irudiakSortu() {
    $.ajax({
        url: 'sushi.json', // Ruta al archivo JSON
        type: 'GET',
        dataType: 'json',
        success: function (data) {

            let html = '';
            let found = false; // Variable para saber si encontramos recetas para el país seleccionado

            // Primer bucle para encontrar el país seleccionado
            for (let i = 0; i < data.length; i++) {
                found = true;
                html += `<div class="col">
                                            <img src="${data[i].izena}" alt="${data[i].izena}" style="width: auto; height: auto;">
                                         </div>`;
            }
            // Si no se encontró recetas para el país seleccionado
            if (!found) {
                alert("Ez da errezetarako informaziorik aurkitu.");
            } else {
                // Limpiar el contenedor de imágenes antes de agregar nuevas

                $('#irudiak').html('<div class="row">' + html + '</div>'); // Mostrar las imágenes en el contenedor

            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error al cargar el JSON:', textStatus, errorThrown);
        }
    });
}

function Formularioa() {
    $('#irudiak').html("")
    $("#erosiForm").show()
}