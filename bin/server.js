/** Hookup Express */
const express = require("express");
const app = express();
const log = require("../src/lib/log.js").init('servers.js');

/** Configure our body Parser */
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/********************************************************************
 * Route Handlers
 ********************************************************************/

app.use("/", express.static(`${__dirname}/../public`));
app.get("/codes/:password", (req, res) => {
  const { password } = req.params;
  if (password !== 1234) {
    const error = "You do not have the correct password";
    log.red(`Password provided ${password}`);
    return res.status(403).json({ error });
  }
  const message = `It worked: ${req.params.password}`;
  res.status(200).json({ message });
});

/********************************************************************
 * Start the Express Server
 ********************************************************************/
const { PORT } = process.env;
const _port = PORT || 3000;
app.listen(_port, () => log.green(`Running server on port ${_port}`));

log.blue("Hello Carter");
