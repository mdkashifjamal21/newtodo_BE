const express = require("express");
const { saveTodo } = require("../controllers/TodoControllers");

const router = express.Router();

router.post("/postTasks", saveTodo);

module.exports = router;
