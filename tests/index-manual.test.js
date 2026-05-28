const { describe, it } = require("node:test");
const assert = require("node:assert");
const convertTanggal = require("../functions/convertTanggalManual.js");

describe("Test convertTanggal manual", () => {
  it("should convert valid date", () => {
    const result = convertTanggal("28-05-2026");

    assert.strictEqual(result, "28/5/2026");
  });

  it("should return error for wrong format", () => {
    const result = convertTanggal("2026-05-28");

    assert.strictEqual(result, "format tanggal salah");
  });

  it("should return error for invalid date", () => {
    const result = convertTanggal("31-02-2026");

    assert.strictEqual(result, "format tanggal salah");
  });
});
