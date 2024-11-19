$(document).ready(function () {
    const $image = $("#image"); // Referencia a la imagen usando jQuery

    $(document).on('keydown', function (e) {
        switch (e.key) {
            case "ArrowLeft": // Flecha izquierda
                $image.css({'transform': 'rotate(0deg)'});
                if (e.ctrlKey) {
                    $image.css({'transform': 'rotate(-45deg)'});
                    $image.animate({top: "-=100px", left: "-=100px"}, 500); // Mueve 100px a la izquierda
                } else if (e.shiftKey) {
                    $image.css({'transform': 'rotate(-135deg)'});
                    $image.animate({top: "+=100px", left: "-=100px"}, 500); // Mueve 100px a la izquierda
                } else {
                    $image.css({'transform': 'rotate(-90deg)'});
                    $image.animate({left: "-=100px"}, 500);
                }
                break;
            case "ArrowRight": // Flecha derecha
                $image.css({'transform': 'rotate(0deg)'});
                if (e.ctrlKey) {
                    $image.css({'transform': 'rotate(45deg)'});
                    $image.animate({top: "-=100px", left: "+=100px"}, 500); // Mueve 100px a la izquierda
                } else if (e.shiftKey) {
                    $image.css({'transform': 'rotate(135deg)'});
                    $image.animate({top: "+=100px", left: "+=100px"}, 500); // Mueve 100px a la izquierda
                } else {
                    $image.css({'transform': 'rotate(90deg)'});
                    $image.animate({left: "+=100px"}, 500);
                }
                break;

            case "ArrowUp": // Flecha arriba
                $image.css({'transform': 'rotate(0deg)'});
                if (e.ctrlKey) {
                    $image.css({'transform': 'rotate(45deg)'});
                    $image.animate({top: "-=100px", left: "+=100px"}, 500); // Mueve 100px a la izquierda
                } else if (e.shiftKey) {
                    $image.css({'transform': 'rotate(-45deg)'});
                    $image.animate({top: "-=100px", left: "-=100px"}, 500); // Mueve 100px a la izquierda
                } else {
                    $image.css({'transform': 'rotate(0deg)'});
                    $image.animate({top: "-=100px"}, 500);
                }
                break;
            case "ArrowDown": // Flecha arriba
                $image.css({'transform': 'rotate(0deg)'});
                if (e.ctrlKey) {
                    $image.css({'transform': 'rotate(-135deg)'});
                    $image.animate({top: "+=100px", left: "-=100px"}, 500); // Mueve 100px a la izquierda
                } else if (e.shiftKey) {
                    $image.css({'transform': 'rotate(135deg)'});
                    $image.animate({top: "+=100px", left: "+=100px"}, 500); // Mueve 100px a la izquierda
                } else {
                    $image.css({'transform': 'rotate(-180deg)'});
                    $image.animate({top: "+=100px"}, 500);
                }
                break;
        }
    });
});
