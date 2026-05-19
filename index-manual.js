const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function convertTanggal(input) {
  const pisah = input.split("-");

  if (pisah.length !== 3) {
    console.log("format tanggal salah");
    return;
  }

  const [hari, bulan, tahun] = pisah.map(Number);

  const tanggal = new Date(tahun, bulan - 1, hari);

  if (
    tanggal.getDate() === hari &&
    tanggal.getMonth() === bulan - 1 &&
    tanggal.getFullYear() === tahun
  ) {
    console.log(tanggal.toLocaleDateString("id-ID"));
  } else {
    console.log("format tanggal salah");
  }
}

rl.question("Input Date: ", (ans) => {
  convertTanggal(ans);
  rl.close();
});
