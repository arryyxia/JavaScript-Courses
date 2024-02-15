// object literal
let siswa = {
    nama : "mahatma",
    lulus : false,
    nilaiSemester : [87, 90, 97],
    calculateAverage: function() {
        let total = 0;
        for (let i = 0; i < this.nilaiSemester.length; i++) {
            total += this.nilaiSemester[i];
        }
        return total / this.nilaiSemester.length;
    }
} 

// console.log(siswa);

// function declaration
function siswaObject(nama, lulus, nilaiSemester){
    var siswaF = {};
    siswaF.nama = nama;
    siswaF.lulus = lulus;
    siswaF.nilaiSemester = nilaiSemester;
    return siswaF;
}
let siswa1 = siswaObject("jhon", false, [53, 64, 99]) 
// console.log(siswa1)

// constraktor
function Siswa(nama, lulus, nilaiSemester){
    this.nama = nama;
    this.lulus = lulus;
    this.nilaiSemester = nilaiSemester;
}
let alumni = new Siswa("raykan", true, [83, 42, 88])

// console.log(alumni);