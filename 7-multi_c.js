const arg = process.argv[2];
const numOfOccur = parseInt(arg);

if (isNaN(numOfOccur)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < numOfOccur) {
    console.log("C is fun");
    i++;
  }
}