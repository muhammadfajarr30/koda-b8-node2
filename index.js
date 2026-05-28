const readline = require("node:readline");
const convertTanggal = require("../functions/convertTanggal.js");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input date: ", (ans) => {
  const result = convertTanggal(ans);

  console.log(result);

  rl.close();
});
