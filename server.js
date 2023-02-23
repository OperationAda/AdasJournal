const express = require("express");
const seed = require("./seed");
const { sequelize } = require("./db");
const app = express();

const port = 3000;

//TODO: Create your GET Request Route Below:
const adas_journal_conn = require("./routes/adas_journal");
app.use("/adas_journal", adas_journal_conn);

app.listen(port, () => {
  sequelize.sync();
  console.log("Your server is listening on port " + port);
});
