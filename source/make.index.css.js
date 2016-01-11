const variables = require("./config/variables");
const fs = require("fs");
const css = require("./css.js")(variables.id);

fs.writeFileSync( `public/${variables.id.toLowerCase()}.css`, css);
