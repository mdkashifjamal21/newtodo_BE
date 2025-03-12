const TodoModel = require("../model/TodoModel.js");

module.exports.saveTodo = (req, res) => {
  const { todo } = req.body;

  TodoModel.create({ todo })
    .then((data) => {
      console.log("Saved Successfully");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log("Error", err);
      res.status(400).send({ error: err });
    });
};
