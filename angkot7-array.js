let penumpang = ['grook', 'brody', 'the', 'foxdrakonix'];

let tambahPenumpang = function(namaPenumpang, penumpang){
    if (penumpang.length == 0){
        penumpang.push(namaPenumpang);
        return penumpang;
    } 
    else {
        for (let i = 0; i < penumpang.length; i++){
            if(typeof penumpang[i] == "undefined"){
                penumpang.splice(i, 1, namaPenumpang);
                return penumpang;
            }
            if(penumpang[i] == namaPenumpang){
                return "penumpang dengan nama " + namaPenumpang + " sudah ada di angkot"
            }
            else if(i == penumpang.length - 1){
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}

let hapusPenumpang = function(namaPenumpang, penumpang){
    if (penumpang.length == 0){
        console.log("belum ada penumpang dalam angkot, yang turun hantu?");
        return penumpang
    }
    for (let i = 0; i < penumpang.length; i++){
        if(penumpang[i] == namaPenumpang){
            penumpang[i] = undefined;
            return penumpang;
        }
        else if(i == penumpang.length - 1){
            console.log("tidak menemukan penumpang dengan nama "+ namaPenumpang);
            return penumpang;
        }
    }
}
