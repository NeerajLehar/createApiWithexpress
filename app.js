const express = require("express");
require("./db/connection");
const app = express();
const logger = require("./middleware/logger");
const user = require("./routes/user");
// const port = process.env.PORT || 4000;

// middleware;
app.use(express.json());
app.use(logger);

app.use("/", user);

app.listen(3000);
