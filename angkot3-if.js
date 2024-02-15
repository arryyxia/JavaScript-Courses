var busNumber, busTotal, busGood;

busNumber = 1;
busGood = prompt("sampai berapa yang beroprasi :");
busTotal = 10;

for ( busNumber; busNumber <= busTotal; busNumber++ ){
    if (busNumber <= busGood ) {
        console.log("ANGKOT NO. " + busNumber + " BEROPRASI DENGAN BAIK.");
    }
    else{
        console.log("ANGKOT NO. " + busNumber + " SEDANG TIDAK BEROPRASI.");
    }
}
