const path = require("path");

const meView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"));
};

module.exports = {
  meView,
};
