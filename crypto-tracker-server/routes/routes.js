const express = require("express");
const router = new express.Router();
require("../Model/Connection");
const userDetail = require("../Model/userSchema");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));


module.exports = router;