let oddCount = true;
for(let i=0; i<5; i++){
    for(let j=0; j<=i; j++){
        if(oddCount == true){
            process.stdout.write("1");
        }else{
            process.stdout.write("0");
        }
        oddCount = !oddCount;
    }
    process.stdout.write("\n");
}