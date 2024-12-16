for(let i=0; i<=2*5-1; i++){
    for(let j=0; j<i; j++){
        if(i <= 2*5/2){
            process.stdout.write("*");
        }else{
            if(j < 2*5 - i){
                process.stdout.write("*");
            }
        }
    }
    process.stdout.write("\n");
}