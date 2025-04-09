const mongoose = require("mongoose");

const db = "bookLibrary";
const uri = `mongodb+srv://mchaouch007:mchaouch007@cluster0.qdtbh.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`;

const connectDb = () => {
  mongoose.connect(uri).then(console.log("connected to db"));
};

module.exports = connectDb;
