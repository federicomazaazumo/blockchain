const express = require("express");

const { writeFile } = require("../services/Log");

const router = express.Router();

router.post("/logger", async (request, response) => {
  const data = request.body.data

  await writeFile(data);
  response.send("Block added to the blockchain successfully!");
});

module.exports = router;
