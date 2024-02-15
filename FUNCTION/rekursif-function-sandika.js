function harusNama(n){
    if(n === 0) return;
    console.log(n); 
    return(harusNama(n-1));
}

harusNama(10)
