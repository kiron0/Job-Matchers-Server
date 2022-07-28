const client = require("../Connection/connection");
const kiron = client.db("jobMatchers").collection("kiron");

const kironTheMoonLight = async (req, res) => {
  const team = await kiron.find({}).toArray();
  res.send({ success: true, data: team });
};

module.exports = {
  kironTheMoonLight,
};
