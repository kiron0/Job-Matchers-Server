const router = require("express").Router();
const { meView: indexView } = require("../Controllers/index.controller.js");
router.get("/", indexView);

module.exports = router;
