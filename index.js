const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const routeLog = require("./routes/Log");

const application = express();
const port = process.env.PORT || 8080;

application.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
application.use(bodyParser.json());
application.use(morgan("combined"));

application.get("/", (request, response) =>
  response.send("Welcome to the Linked Line Common Log Service Code Challenge!")
);

application.use("/service", routeLog);

application.listen(port, () =>
  console.log(`Atix server listening on port ${port}!`)
);
