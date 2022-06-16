const express = require("express");
const controller = require("../controllers/controller.js");

const router = express.Router();



router.post("/create", controller.createData)
router.get("/data", controller.findAllData)
router.get("/:id", controller.findById)

module.exports = router