function kargatu() {
    var probintzia = document.getElementById("probintziak");
    var herria =  document.getElementById("herriak")
    var araba = ["Amurrio", "Oyón","La Guardia", "Gasteiz"]
    var bizkaia = ["Durango", "Gernika", "Ermua", "Lekeitio"]
    var gipuzkoa = ["Eibar", "Donosti", "Elgoibar", "Deba"]
    if (probintzia.value == "1") {
        herria.innerHTML = "<option>-</option>"
        for(var i = 0; i < araba.length; i++) {
            herria.innerHTML += "<option>"+araba[i]+"</option>"
        }
    }
    if (probintzia.value == "2") {
        herria.innerHTML = "<option>-</option>"
        for(var i = 0; i < bizkaia.length; i++) {
            herria.innerHTML += "<option>"+bizkaia[i]+"</option>"
        }
    }
    if (probintzia.value == "3") {
        herria.innerHTML = "<option>-</option>"
        for(var i = 0; i < gipuzkoa.length; i++) {
            herria.innerHTML += "<option>"+gipuzkoa[i]+"</option>"
        }
    }
}