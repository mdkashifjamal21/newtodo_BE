const express = require("express");
const {
  saveTodo,
  getToDos,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../controllers/TodoControllers");

const router = express.Router();

router.post("/postTasks", saveTodo);
router.get("/getTasks", getToDos);
router.get("/getTask/:id", getTodoById);
router.put("/updateTask/:id", updateTodo);
// router.patch("/updateTask/:id", updateTodo);
router.delete("/deleteTask/:id", deleteTodo);

module.exports = router;

// If the ID doesnt exist then you have to show a response to the user that the ID doesnt exist

// To create a new React app, and Integrate the Backend with the Frontend, using following API's

// http://localhost:5050/v1/getTasks
