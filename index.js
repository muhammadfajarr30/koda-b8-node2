const moment = require("moment");
const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function convertTanggal(input) {
  const cekTanggal = moment(input, "DD-MM-YYYY", true).isValid();

  if (!cekTanggal) {
    console.log("format tanggal salah");
    return;
  }

  const ubahFormat = moment(input, "DD-MM-YYYY").format("DD/MM/YYYY");
  return ubahFormat;
}

rl.question("Input date: ", (ans) => {
  const result = convertTanggal(ans);

  console.log(result);

  rl.close();
});
