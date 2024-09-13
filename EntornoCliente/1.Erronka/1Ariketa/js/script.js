function mezua() {
    let lehen = prompt("Sartu lehen nota:");
    let bigarren = prompt("Sartu bigarren nota:");
    let hirugarren = prompt("Sartu hirugarren nota:");
    lehen=parseInt(lehen);
    bigarren=parseInt(bigarren)
    hirugarren=parseInt(hirugarren)
    let totala=lehen+bigarren+hirugarren
    let emaitza = totala / 3
    if(emaitza>5){
       return("Gaindituta")
    }

}
