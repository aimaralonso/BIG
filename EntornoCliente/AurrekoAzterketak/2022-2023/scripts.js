$(document).ready(function () {
    $(".needs-validation").on("submit", function (e) {
        if (!this.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        $(this).addClass("was-validated");
    });
    $('#formularioaa').hide()
    const $image = $("#cookpad"); // Referencia a la imagen usando jQuery
    // Animación al hacer clic en la imagen cookpad
    $image.click(function () {
        $image.animate({opacity: 0, height: "0px"}, 2000);
    });

    $('#erakutsi').click(function () {
        // Obtiene el país seleccionado al inicio
        const selectedCountry = $('#selektorea').val();
        // Verifica que la opción seleccionada no sea la primera
        if (selectedCountry === 'Aukeratu') {
            alert('Herrialdea aukeratu behar duzu.');
        } else {
            // Si la opción seleccionada es válida, cargamos las imágenes
            $.ajax({
                url: 'cookpad.json', // Ruta al archivo JSON
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    let html = '';
                    let found = false; // Variable para saber si encontramos recetas para el país seleccionado

                    // Primer bucle para encontrar el país seleccionado
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].herrialdea === selectedCountry) {
                            found = true; // Se encontró el país

                            // Segundo bucle para leer las recetas del país
                            var errezetak = data[i].errezetak;
                            var cantidad = errezetak.length;
                            for (let j = 0; j < errezetak.length; j++) {

                                html += `<div class="col">
                                            <img src="${errezetak[j].izena}" alt="${errezetak[j].izena}" style="width: auto; height: auto;">
                                         </div>`;
                            }
                            break; // Salir del bucle una vez que se han encontrado las recetas
                        }
                    }
                    // Si no se encontró recetas para el país seleccionado
                    if (!found) {
                        alert("Ez da errezetarako informaziorik aurkitu.");
                    } else {
                        // Limpiar el contenedor de imágenes antes de agregar nuevas
                        $('#imagenesContainer').empty(); // Limpia el contenedor
                        $('#imagenesContainer').html('<div class="row">' + html + '</div>'); // Mostrar las imágenes en el contenedor
                        $('#cantidad').html(cantidad);
                    }
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error('Error al cargar el JSON:', textStatus, errorThrown);
                }
            });
        }
    });
    $('#berria').click(function () {
        $('#formularioaa').show()
        // Example starter JavaScript for disabling form submissions if there are invalid fields

        $('#imagenesContainer').addClass("mt-3 d-flex justify-content-center");

    });
});