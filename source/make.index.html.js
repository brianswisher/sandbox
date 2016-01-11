const variables = require("./config/variables");
const fs = require("fs");
const html = require("./html");
const viewport = require("./viewport");
const markup = html( viewport(variables.id) );

fs.writeFileSync( "public/index.html", markup);
