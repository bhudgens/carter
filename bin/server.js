/** Logger */
const log = require("../src/lib/log.js").init('servers.js');

/** Hookup Express */
const express = require("express");
const app = express();

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
  /** An example of capturing a password.  We will learn
      how to not store real passwords in our code later */
  if (Number(password) !== 5544) {
    const error = "You do not have the correct password";
    log.red(`Password provided: ${password}`);
    return res.status(403).json({ error });
  }

  /** If things work out we'll get to the stuff below.  If
      the password was wrong they would get stopped above */
  const message = `It worked: ${req.params.password}`;
  log.green(`Password provided: ${password}`);
  res.status(200).json({ message });
});

/********************************************************************
 * Start the Express Server
 ********************************************************************/
const { PORT } = process.env;
const _port = PORT || 3000;
app.listen(_port, () => log.green(`Running server on port ${_port}`));

log.blue("Hello Carter");
