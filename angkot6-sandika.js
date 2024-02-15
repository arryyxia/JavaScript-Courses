let busNumber, busTotal, busWorking, askOvertime, numberOvertime, busOvertime;

busNumber = 1;
busTotal = prompt("berapa total bus yang dimiliki :");
busWorking = prompt("ada berapa bus yang sedang beroprasi :");


for ( busNumber; busNumber <= busTotal; busNumber++ ){
    if (busNumber <= busWorking && busNumber !== 5) {
        console.log("ANGKOT NO. " + busNumber + " BEROPRASI DENGAN BAIK.");

    }
    else if ( busNumber === 8 || busNumber === 10 || busNumber === 5){
        console.log("ANGKOT NO. " + busNumber + " SEDANG LEMBUR.");
    }
    else{
        console.log("ANGKOT NO. " + busNumber + " SEDANG TIDAK BEROPRASI.");
    }
}
