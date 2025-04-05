const { model } = require("mongoose");
const TodoModel = require("../model/TodoModel.js");

module.exports.getToDos = async (req, res) => {
  try {
    const todoData = await TodoModel.find();
    res.status(200).send(todoData);
  } catch (err) {
    res.status(400).send({ error: err });
  }
};

module.exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).send({ error: "Id is required" });
    }
    const todoData = await TodoModel.findById(id);
    res.status(200).send(todoData);
  } catch (err) {
    res.status(400).send({ error: err });
  }
};

module.exports.saveTodo = async (req, res) => {  
  const { name, email, todo, date, isloggedIn, userExist } = req.body;  

  // Validate required fields  
  if (!name || !email || !todo || !date || isloggedIn === undefined || userExist === undefined) {  
      return res.status(400).send({ error: "All fields are required." });  
  }  

  try {  
      const data = await TodoModel.create({ name, email, todo, date, isloggedIn, userExist });  
      console.log("Saved Successfully");  
      res.status(201).send(data);  
  } catch (err) {  
      console.log("Error", err);  
      res.status(500).send({ error: "Unable to save todo." });  
  }  
};  

module.exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { todo,date,name } = req.body;

  TodoModel.findByIdAndUpdate(id, { todo,date,name })
    .then(() => {
      res.status(200).send("Updated Successfully");
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
}; 

module.exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  TodoModel.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send("Deleted Successfully");
    })
    .catch((err) => {
      res.status(400).send({ error: err });
    });
};

// 200 -> Successfull data Fetch from Database
// 201 -> Successfull data post in Database
// 400 -> Error in data Fetch from Database
// 404 -> Error in data post in Database
// 500 -> Server Error
// 401 -> Unauthorized
