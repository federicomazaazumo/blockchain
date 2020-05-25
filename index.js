const express = require("express");
const morgan = require("morgan");

const application = express();
const port = process.env.PORT || 8080;

application.use(morgan("combined"));

application.get("/", (request, response) =>
  response.send("Welcome to the Linked Line Common Log Service Code Challenge!")
);

application.listen(port, () =>
  console.log(`Atix server listening on port ${port}!`)
);
