const arg = process.argv[2];
let sqr = parseInt(arg);

if (isNaN(sqr)) {
  console.log("Missing Size");
  console.log("Missing Size");
  console.log("Missing Size");
} else {
  for (let i = 0; i < sqr; i++) {
    let row = "";
    for (let j = 0; j < sqr; j++) {
      row += "x";
    }
    console.log(row);
  }
}
