// import express from "express";
const express = require("express"); // Use to import the library
const mongoose = require("mongoose");
const routes = require("./routes/TodoRoutes.js");

const app = express(); // Create an express app

const PORT = 5050;

app.use(express.json()); // Middleware to parse the request body

mongoose
  .connect(
    "mongodb+srv://svfahadmahmood:RYUt9qdVEvGyfLkI@fahad.93o1c.mongodb.net/?retryWrites=true&w=majority&appName=Fahad"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.use("/baseApi", routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Start the server on port 5000

// localhost:5050/api/postTasks (POST)
// localhost:5050/api/getTasks (GET)
// localhost:5050/api/updateTasks (PUT)
// localhost:5050/api/deleteTasks (DELETE)
