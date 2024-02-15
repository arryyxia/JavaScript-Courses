function kubusVolume(sisi){
    return sisi**3;
}
function totalVolume(a, b) {
    return a + b;
}

let kubusA, kubusB;
kubusA = parseInt(prompt("masukkan sisi dari kubus A"));
kubusB = parseInt(prompt("masukkan sisi dari kubus B"));

alert("sisi dari kubus A : " + kubusVolume(kubusA) + "\nsisi dari kubus B : " + kubusVolume(kubusB));
alert("total gabungan volume dari kubus A dan B adalah : " + totalVolume(kubusVolume(kubusA), kubusVolume(kubusB)));