function BidaliDatuak() {
    Errorea = []
    kont1 = 0
    var elementuak = document.getElementsByTagName("input");
    for (var i = 0; i < elementuak.length; i++) {
        if (elementuak[i].type == "text") {
            if (elementuak[i].value == "") {
                Errorea.push(elementuak[i].id + "testuko inputa hutsik dago");
            }
        } else if (elementuak[i].type == "checkbox") {
            if (elementuak[i].checked) {
                kont1++;
            }
        }

    }
    if(kont1=0){
        Errorea.push("Ez duzu ikasketarik aukeratu");
    }
    var herria = document.getElementById("herria").options[document.getElementById("herria").selectedIndex].value;
    if(herria.text == "0") {
        Errorea.push("Ez duzu herririk aukeratu");
    }
    if (Errorea.length != 0)
    {
        document.getElementById("kapaErrorea").style.display="block";
        var testua="";
        for (var i=0; i<Errorea.length; i++)
        {
            testua=testua + Errorea[i]+"<br />";
        }
        document.getElementById("datuak").innerHTML=testua;
    }
    else{
        document.getElementById("kapaErrorea").style.display="none";
        setTimeout(function(){ alert("Zure datuak balidatu dira eta konforme daude. Formularioa bidaliko da"); }, 50)

    }
}