const mongoose = require("mongoose");
// Create a schema for the form

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
});
// Create a model based on the schema

userSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoError" || error.code === 11000) {
    const customError = new Error();
    customError.status = 409;
    customError.message = "User already exists";
    return next(customError);
  }
  next();
});

const User = mongoose.model("Cfids", userSchema);

module.exports = User;
