const client = require("../Connection/connection");
const usersCollection = client.db("jobMatchers").collection("users");

const getUsers = async (req, res) => {
  const users = await usersCollection.find({}).toArray();
  if (users) {
    res.send({ success: true, data: users });
  } else {
    res.status(403).send({
      success: false,
      message: "You are not authorized to perform this action",
    });
  }
};

module.exports = {
  getUsers,
};
