function harusNama(n){
    console.log(n); 
    n--;
    for(let i = 1; i <= n; i--){
        return harusNama(n);
    }
}

harusNama(10)
