const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const con = await mongoose.connect(
      "mongodb+srv://demouser:demouser1231456@cluster0.3juuo.mongodb.net/Ecommerce?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }
    );
    console.log("Mongo DB Connection Successfully");
  } catch (error) {
    console.log("Mongo DB Connection Failed");
  }
};
module.exports = connectDB;
