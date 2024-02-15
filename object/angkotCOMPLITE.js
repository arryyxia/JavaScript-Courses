function Angkot(supir, track, penumpang, kas){
    this.supir = supir;
    this.track = track;
    this.kas = kas;
    this.penumpang = penumpang;
    this.penumpangNaik = function(namaPenumpang){
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
    this.penumpangTurun = function(namaPenumpang, bayar){
        if (penumpang.length == 0){
            alert("belum ada penumpang dalam angkot, yang turun hantu?");
            return false;
        }
        for (let i = 0; i < penumpang.length; i++){
            if(penumpang[i] == namaPenumpang){
                penumpang[i] = undefined;
                this.kas+=bayar
                
                return penumpang;
            }
            else if(i == penumpang.length - 1){
                console.log("tidak menemukan penumpang dengan nama "+ namaPenumpang);
                return penumpang;
            }
        }
    }
}
let angkot1 = new Angkot("cecep", ["Sudiang", "Antang"], [], 0);
let angkot2 = new Angkot("bambang", ["Pendidikan", "Alauddin"], [], 0);

function Nama(namaDepan, namaBelakang){
    this.namaDepan = namaDepan
    this.namaBelakang = namaBelakang
    this.namaPanjang = function(){
        return this.namaDepan + " " + this.namaBelakang;
    }
}