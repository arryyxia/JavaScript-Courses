let busNumber, busTotal, busGood, askOvertime, busOvertime;

busNumber = 1;
busTotal = prompt("berapa total bus yang dimiliki :");
busGood = prompt("ada berapa bus yang sedang beroprasi :");

askOvertime = confirm("apakah ada bus yang lembur?")
while (askOvertime === true){
    busOvertime = prompt("Bus nomor berapa yang sedang lembur :")
    
    askOvertime = confirm("apakah masih ada bus yang lembur?")
}

for ( busNumber; busNumber <= busTotal; busNumber++ ){
    if (busNumber <= busGood ) {
        console.log("ANGKOT NO. " + busNumber + " BEROPRASI DENGAN BAIK.");
    }
    else if( busNumber == 8 || busNumber == 10 ){
        console.log("ANGKOT NO. " + busNumber + " SEDANG LEMBUR.");
    }
    else{
        console.log("ANGKOT NO. " + busNumber + " SEDANG TIDAK BEROPRASI.");
    }
}