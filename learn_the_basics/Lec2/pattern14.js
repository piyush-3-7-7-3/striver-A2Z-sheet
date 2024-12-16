function printPattern(n){
    for(let i=0; i<n; i++){
        for(let j=0; j<n-i; j++){
            process.stdout.write(`${String.fromCharCode(j+65)}`)
        }
        process.stdout.write("\n");
    }
}

printPattern(5);