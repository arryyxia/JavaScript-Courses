let s = "";

for( let i = 1; i < 7; i++ ){
    for ( let j = i; j <= 7; j++ ){
        s += "  ";
    }
    for ( let j = 1; j < i; j++ ){
        s += "* ";
    }
    for ( let j = 1; j <= i; j++ ){
        s += "* ";
    }
    
    s += "\n";
}
for( let i = 1; i <= 7; i++ ){
    for ( let j = 1; j <= i; j++ ){
        s += "  ";
    }
    for ( let j = i; j < 7; j++ ){
        s += "* ";
    }
    for ( let j = i; j <= 7; j++ ){
        s += "* ";
    }
    
    s += "\n";
}
console.log(s);