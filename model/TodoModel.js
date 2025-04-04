const mongoose = require("mongoose");  

const TodoSchema = new mongoose.Schema({  
    name: { type: String, required: true },  
    email: { type: String, required: true },  
    todo: { type: String, required: true },  
    date: { type: Date, required: true, default: Date.now },  
    isloggedIn: { type: Boolean, required: true },  
    userExist: { type: Boolean, required: true }  
});  

const TodoModel = mongoose.model("Todo", TodoSchema);  
module.exports = TodoModel;  
module.exports = mongoose.model("Todo", TodoSchema);
