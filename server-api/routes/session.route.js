const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/session.controller");

router.post("/login", sessionController.doLogin);

module.exports = router;
