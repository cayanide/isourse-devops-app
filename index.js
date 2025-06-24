const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Hello from Isourse!"));
app.get("/health", (req, res) => res.status(200).send("OK"));

app.listen(port, () => console.log(`Running on port ${port}`));
