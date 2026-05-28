const { describe, it } = require("node:test");
const assert = require("node:assert");

const convertTanggal = require("../functions/convertTanggal");

describe("Test convertTanggal", () => {
  it("should convert DD-MM-YYYY to DD/MM/YYYY", () => {
    const result = convertTanggal("28-05-2026");

    assert.strictEqual(result, "28/05/2026");
  });

  it("should return error message for invalid date", () => {
    const result = convertTanggal("99-99-2026");

    assert.strictEqual(result, "format tanggal salah");
  });

  it("should return error message for wrong format", () => {
    const result = convertTanggal("2026-05-28");

    assert.strictEqual(result, "format tanggal salah");
  });
});
