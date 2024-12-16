function printPattern(n){
    let count = 1; 
    for(let i=0; i<n; i++){
        for(let j=0; j<=i; j++){
            process.stdout.write(`${count} `);
            count++;
        }
        process.stdout.write("\n");
    }
}

printPattern(5)