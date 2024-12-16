for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 2 * 5; j++) {
    if (j > i && 2 * 5 - j - 1 > i) {
      process.stdout.write(" ");
    } else {
      if (j >= 5) {
        process.stdout.write(`${(2 * 5) - j}`)
      } else {
        process.stdout.write(`${j + 1}`);
      }
    }
  }
  process.stdout.write("\n");
}
