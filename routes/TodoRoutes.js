const express = require("express");
const {
  saveTodo,
  getToDos,
  getTodoById,
} = require("../controllers/TodoControllers");

const router = express.Router();

router.post("/postTasks", saveTodo);
router.get("/getTasks", getToDos);
router.get("/getTask/:id", getTodoById);

module.exports = router;
