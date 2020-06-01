const express = require("express");
const routes = require("./routes");
const app = express();
const port = process.env.PORT || 2500;
const router = new routes();
const connection = require("./src/database/connection");

appInitializer = () => {
  connection.getInstance();
  router.mountRoutes(app);
};

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

appInitializer();
