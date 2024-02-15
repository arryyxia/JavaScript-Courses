let n = prompt("gimana kotaknya?");
let symbol = prompt("gimana symbol kotaknya?");
let s = "";

for (let i = 1; i <= n; i++){
    for (let j = 1; j<= n; j++){
        s += symbol + " ";
    }
    s += "\n";
}

console.log(s);