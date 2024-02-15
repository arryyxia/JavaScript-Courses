// menyimpan pilihan pemain
let pemain = prompt('PILIH, "GUNTING", "BATU", "KERTAS"');

// generate random number
let comp = Math.random();

// menentukan pilihan computer
if ( comp <= 0.3 ){
    comp = "GUNTING";
} else if ( comp <= 0.6 ){
    comp = "BATU";
} else {
    comp = "KERTAS";
}

// deklarasi variable hasil
let hasil;

if ( pemain == comp ){
    hasil = pemain + " SERI! " + comp;
} else if ( pemain == "GUNTING" ){
    if( comp === "BATU" ){
        hasil = pemain + " KAMU KALAH DARI " + comp + "!";
    } else if ( comp == "kertas" ){
        hasil = pemain + " KAMU MENANG DARI " + comp + "!";
    }
} else if ( pemain == "BATU" ){
    if( comp === "KERTAS" ){
        hasil = pemain + " KAMU KALAH DARI " + comp + "!";
    } else if ( comp == "GUNTING" ){
        hasil = pemain + " KAMU MENANG DARI " + comp + "!";
    }
} else if ( pemain == "KERTAS" ){
    if( comp === "GUNTING" ){
        hasil = pemain + " KAMU KALAH DARI " + comp + "!";
    } else if ( comp == "BATU" ){
        hasil = pemain + " KAMU MENANG DARI " + comp + "!";
    }
} else {
    hasil = "TOLONG IKUTI RULES! ('GUNTING', 'BATU', 'KERTAS')"
}

alert(hasil);