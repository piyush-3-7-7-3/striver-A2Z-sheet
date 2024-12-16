for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j >= i) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  for (let z = 4; z > i; z--) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
