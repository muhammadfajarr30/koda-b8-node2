const readline = require("node:readline");
const convertTanggal = require("./functions/convertTanggalManual");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input Date: ", (ans) => {
  const result = convertTanggal(ans);

  console.log(result);

  rl.close();
});
