function kargatu() {
    var aukeratu = document.getElementById("aukeratu");
    var irudia = document.getElementById("imagen")
    if (aukeratu.value == "1") {
        irudia.innerHTML = "<img src='img/irudi1.jpg'>"
    } else if (aukeratu.value == "2") {
        irudia.innerHTML = "<img src='img/irudi2.jpg'>"
    } else if (aukeratu.value == "3") {
        irudia.innerHTML = "<img src='img/irudi3.jpg'>"
    }


}