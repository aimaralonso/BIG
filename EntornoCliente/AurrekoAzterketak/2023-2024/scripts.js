$(document).ready(function () {
    $('#formularioaa').hide();
    $('#formularioa').on('submit', function (event) {

        // Verifica que la opción seleccionada no sea la primera
        if ($('#selektorea').val() === 'Aukeratu') {
            event.preventDefault(); // Evita el envío del formulario
            alert('Bidalketa mota aukeratu behar duzu.');
        } else {
            $('#imagenesContainer').show();
            // Si la opción seleccionada es válida, cargamos las imágenes
            $.ajax({
                url: 'sushi.json', // Ruta al archivo JSON
                type: 'GET',
                dataType: 'json',
                success: function (data) {
                    let html = '';
                    let rowCount = 0;

                    // Iterar sobre cada item del JSON
                    data.forEach(function (item, index) {
                        // Si es el primer elemento de una fila, creamos un div row
                        if (index % 2 === 0) {
                            if (rowCount > 0) {
                                html += '</div>'; // Cerrar el div de la fila anterior
                            }
                            html += '<div class="row">'; // Iniciar un nuevo div row
                            rowCount++;
                        }

                        // Añadir la imagen dentro de la fila
                        html += `<div class="col">
                            <img src="Irudiak/${item.izena}" alt="${item.izena}" style="width: auto; height: auto;">
                        </div>`;
                    });

                    html += '</div>'; // Cerrar la última fila
                    $('#imagenesContainer').html(html); // Mostrar las imágenes
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.error('Error al cargar el JSON:', textStatus, errorThrown);
                }
            });
            $('#botoiak').addClass('mt-5 d-flex justify-content-center');
            event.preventDefault(); // Evita el envío del formulario si solo quieres mostrar las imágenes
        }
    });
    $('#erosi').click(function () {
        $('#imagenesContainer').empty(); // Vaciar el contenedor de imágenes
        $('#formularioaa').show();
        // Inyectar el nuevo HTML en el contenedor
        $('#imagenesContainer').addClass("mt-3 d-flex justify-content-center"); // Inyectar el nuevo HTML en el contenedor

    });

});
