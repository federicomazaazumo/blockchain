const express = require("express");
const { readFile, writeFile } = require("../services/Log");

const router = express.Router();

router.use((request, response, next) => {
  console.log(request.method, request.url);

  next();
});

router.get("/logger", (request, response) => {
  readFile();
  response.send("im the home page!");
});

router.get("/loggers", (request, response) => {
  writeFile("Hola");
  response.send("processing the login form!");
});

module.exports = router;
