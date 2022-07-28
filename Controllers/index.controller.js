const path = require("path");

const meView = (req, res) => {
  res.sendFile(path.join(__dirname, "../Views/index.html"));
};

module.exports = {
  meView,
};
