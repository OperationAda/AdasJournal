const express = require("express");
const { sequelize } = require("./db");
const app = express();

const port = 3000;
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret:  process.env.SECRET ,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUERBASEURL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
//TODO: Create your GET Request Route Below:
const adas_journal_conn = require("./routes/adas_journal");
app.use("/adas_journal", adas_journal_conn);

app.listen(port, () => {
  sequelize.sync();
  console.log("Your server is listening on port " + port);
});
