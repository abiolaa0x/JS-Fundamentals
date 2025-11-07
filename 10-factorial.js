const arg = parseInt(process.argv[2]);

function facto(arg) {
  if (isNaN(arg) || arg <= 0) {
    return 1;
  }
  return arg * facto(arg - 1);
}

console.log(facto(arg));
