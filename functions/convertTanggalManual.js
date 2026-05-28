function convertTanggal(input) {
  const pisah = input.split("-");

  if (pisah.length !== 3) {
    return "format tanggal salah";
  }

  const [hari, bulan, tahun] = pisah.map(Number);

  const tanggal = new Date(tahun, bulan - 1, hari);

  if (
    tanggal.getDate() === hari &&
    tanggal.getMonth() === bulan - 1 &&
    tanggal.getFullYear() === tahun
  ) {
    return tanggal.toLocaleDateString("id-ID");
  } else {
    return "format tanggal salah";
  }
}

module.exports = convertTanggal;
