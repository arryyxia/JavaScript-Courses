// manipulasi array

// menambah isi array

let arrayyan = [true, 'Amru', 'Radit', 'Abid', 1, 2, 3];
arrayyan[6] = "Puji";

for (const what in arrayyan) {
    if (Object.hasOwnProperty.call(arrayyan, what)) {
        const element = arrayyan[what];
        
    }
}

// memanggil array dengan loop
// for (let i = 0; i <= arrayyan.length; i++){
//     console.log(arrayyan[i])
// }

// method
// arrayyan.push('metro');

// console.log(arrayyan.pop());

// pop & push
// menghapus nilai terakhir
arrayyan.pop();

// menambah nilai index terakhir array
arrayyan.push("granger");

// shift & unshift
// menambah nilai di index paling awal
arrayyan.unshift("miya", "raja")
// menambah nilai index awal array
arrayyan.shift()

// bagaimana kalau mau di tengah coba?

// arr.splice(indexAwal, mauDihapusBerapa, ElemenBaru1, elementBaru2...)
arrayyan.splice(3, 2, "brody")
// console.log(arrayyan)

arrayyan2 = arrayyan.slice(2,4);
// console.log(arrayyan2)

// forEach
angkaNormal = [1,2,3,4,5,6,7,8,9,0];

angkaNormal.forEach(element => {
    // console.log(element)
});

// panggil pakai index
// let arrayyan1 = [true, 'Amru', 'Radit', 'Abid', 1, 2, 3];
// arrayyan1.forEach(function(element, i) {
    // console.log("data ke-" + (i+1) + " adalah : " + element)
// });


// map
// bedanya map dan forEach adalah ; map mengembalikan arrayy, sedangkan forEach tidak
// let angka = [1,2,3,4,5,6,7,8,9,0];

// let angkaKali2 = angka.map(function(element) {
//     return element*2;
// });

// console.log(angkaKali2.join(' - '));

// Sort
// let angka = [9,2,3,7,5,6,8,4,1,0, 87, 53, 11, 10,20, 23];

// console.log(angka)
// console.log(angka.sort(function(a,b){
//     return a-b;
// }))

// let absenKelas = ["jack", "reja", "muhammad", "adam", "zeus"]
// absenKelas.sort()
// console.log(absenKelas)

// filter & find
// let angka = [9,2,3,7,5,6,8,4,1,0, 87, 53, 11, 10,20, 23];
// let pekerjaan = ["web desain", "web plugin", "html", "css"]

// let pekerjaanFilter = prompt("cari pekerjaan :")

// pekerjaanTerFilter = pekerjaan.filter(function(x) {
//     return x = pekerjaan;
// });

// console.log(pekerjaanTerFilter)

// gpt
let pekerjaan = ["web desain", "web plugin", "html", "css"];

let pekerjaanFilter = prompt("Cari pekerjaan:");

let pekerjaanTerFilter = pekerjaan.filter(function(x) {
    return x.includes(pekerjaanFilter);
});

console.log(pekerjaanTerFilter);
