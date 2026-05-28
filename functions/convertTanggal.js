const moment = require("moment");

function convertTanggal(input) {
  const cekTanggal = moment(input, "DD-MM-YYYY", true).isValid();

  if (!cekTanggal) {
    return "format tanggal salah";
  }

  const ubahFormat = moment(input, "DD-MM-YYYY").format("DD/MM/YYYY");
  return ubahFormat;
}

module.exports = convertTanggal;
