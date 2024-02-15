let benang = "";

for(let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        if(i % 2 == 0) {
            benang += "# ";
        } 
        else {
            benang += " #";
        }
    }
    benang += "\n";
}
console.log(benang);