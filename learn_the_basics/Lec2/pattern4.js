for(let i = 0; i<5; i++){
    for(let j = 0; j<i+1; j++){
        process.stdout.write(`${i+1}`);
    }
    process.stdout.write("\n");
}