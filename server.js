// import express from "express";

//if we had pass certain api in our frontent and after that we want to add certain feils in our backened in 
//api we have to change the port number
const express = require("express"); // Use to import the library
const mongoose = require("mongoose");
const routes = require("./routes/TodoRoutes.js");
const cors = require("cors");

const app = express(); // Create an express app

app.use(cors());

const PORT = 7000;

app.use(express.json()); // Middleware to parse the request body

mongoose
  .connect(
    "mongodb+srv://todoUser_01:test123@cluster0.9tfif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.use("/v1", routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)); // Start the server on port 5000

// localhost:5050/api/postTasks (POST)
// localhost:5050/api/getTasks (GET)
// localhost:5050/api/updateTasks (PUT)
// localhost:5050/api/deleteTasks (DELETE)

