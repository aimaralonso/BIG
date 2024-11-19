$(document).ready(function () {
    $("#boton0").click(function () {
        $("#capa0").animate({outlineWidth: "15px"});
    });
    $("#boton1").click(function () {
        $("#capa1").animate({borderWidth: "10px"}, 3000);
    });
    $("#boton2").click(function () {
        $("#capa2").animate({borderBottomWidth: "20px"}, 5000, function () {
            alert('Efecto terminado!');
        });
    });
    $("#boton3").click(function () {
        $("#capa3").animate({borderTopWidth: "15px"}, function () {
            alert('Efecto terminado!');
        });
    });
    $("#boton4").click(function () {
        $("#capa4").animate({borderLeftWidth: "10px", borderRightWidth: "20px"});
    });
});