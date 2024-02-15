let busNumber, busTotal, busWorking, askOvertime, numberOvertime, busOvertime;

busNumber = 1;
busTotal = prompt("berapa total bus yang dimiliki :");
busWorking = prompt("ada berapa bus yang sedang beroprasi :");

askOvertime = confirm("apakah ada bus yang lembur?")

while (askOvertime === true){
    numberOvertime = prompt("masukkan nomor angkot (pisah dengan koma) :");
    busOvertime = numberOvertime.split(",");
    
    askOvertime = confirm("apakah masih ada bus yang lembur?");
}

for ( busNumber; busNumber <= busTotal; busNumber++ ){
    if (busNumber <= busWorking ) {
        console.log("ANGKOT NO. " + busNumber + " BEROPRASI DENGAN BAIK.");
    }
    else if (busOvertime == 8 || busOvertime == 10){
        console.log("ANGKOT NO. " + busNumber + " SEDANG LEMBUR.");
    }
    else{
        console.log("ANGKOT NO. " + busNumber + " SEDANG TIDAK BEROPRASI.");
    }
}
