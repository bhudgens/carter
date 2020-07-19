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

/********************************************************************
 * Start the Express Server
 ********************************************************************/
app.listen(process.env.PORT || 3000);

