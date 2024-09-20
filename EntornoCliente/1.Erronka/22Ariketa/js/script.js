function irakurrita(liburuak) {
    for (let i = 0; i < liburuak.length; i++) {
        if (liburuak[i][2] === true) {
            console.log("Liburu hau irakurrita duzu " + liburuak[i][0] + " " + liburuak[i][1]);
        } else {
            console.log("Liburu hau irakurri behar duzu " + liburuak[i][0] + " " + liburuak[i][1]);

        }
    }

}

const liburuak = [["Proba1", "Autore1", true], ["Proba2", "Autore2", false]]
irakurrita(liburuak);