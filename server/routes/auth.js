const express = require("express");
const router = express.Router();
const { createContacts } = require("../controllers/auth");
router.post("/createContacts", createContacts);
module.exports = router;
