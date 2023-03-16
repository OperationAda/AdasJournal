const express = require("express");
const { sequelize } = require("./db");
const app = express();

const port = 3000;
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'twtXWz4JujUq2YLcq70Gt0wECkAwfbPw',
  issuerBaseURL: 'https://dev-yvei8zpyhh37mrs5.us.auth0.com'
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
