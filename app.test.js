const request = require("supertest");
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello from Isourse!"));
app.get("/health", (req, res) => res.status(200).send("OK"));

describe("GET /", () => {
  it("should return Hello from Isourse!", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello from Isourse!");
  });
});

describe("GET /health", () => {
  it("should return OK", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.text).toBe("OK");
  });
});
