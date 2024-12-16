for(let i = 0; i<5; i++){
    for(let j=5; j>i; j--){
        process.stdout.write(`${5-j+1}`);
    }
    process.stdout.write("\n");
}