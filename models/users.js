const { default: mongoose } = require("mongoose");
const Mongoose = require("mongoose");
var validator = require("validator");


const userSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "email already present"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },
});

const Users = new mongoose.model("User", userSchema);

module.exports = Users;
