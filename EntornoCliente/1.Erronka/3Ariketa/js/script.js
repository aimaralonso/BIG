function mezua() {
let lehen, bigarren;
do{
     lehen = prompt("Sartu pasahitza:");
     bigarren = prompt("Sartu pasahitza berriz:");
     if(lehen!==bigarren){
         return("Ez dira berdinak.Saiatu berriro")
     }
}while(lehen!== bigarren)
        return ("Ongi etorri");
}
