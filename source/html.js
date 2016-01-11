const variables = require("./config/variables");

module.exports = function(element) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>sandbox</title>
  <link rel="stylesheet" type="text/css" href="${variables.id.toLowerCase()}.css">
</head>
<body>
  ${element}
</body>
</html>
`;
};
