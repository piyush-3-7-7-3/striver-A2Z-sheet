for(let i=0; i<5; i++){
    for(let j = 5; j>=i; j--){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}