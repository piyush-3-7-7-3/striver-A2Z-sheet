function printPatter(n){
    for(let i=0; i<2*n; i++){
        for(let j=0; j<2*n; j++){
            if(j >= n && i<n){
                if(i <= j-n){
                    process.stdout.write("*");
                }else{
                    process.stdout.write(" ");
                }
            }else if(n-j <= i && i < n){
                process.stdout.write(" ");
            }else if(i < n){
                process.stdout.write("*");
            }

            if(i >= n){
                if(j > i){
                    process.stdout.write(" ");
                }else{
                    process.stdout.write("*");
                }
            }
        }
        process.stdout.write("\n");
    }
}

printPatter(5);