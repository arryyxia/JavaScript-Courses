// this sebuah keyword spesial yang secara otomatis di definisikan pada setiap function/object
// this mengenmbalikan object global

// function declaration
function halo(){
    console.log("halo")
    console.log(this)
}
// this.halo();
// this mengembalikan oject global gakjelas


// object literal
obj = {nilai : 10, nama : "vorte"}
obj.halo = function(){
    console.log(this)
    console.log('halo')
}
// obj.halo();
// this mengembalikan object yang bersangkutan


// construcktor
let Halo = function(){
    console.log(this)
    console.log('halo')
}
var coba = new Halo();
// this mengembalikan object yang baru dibuat