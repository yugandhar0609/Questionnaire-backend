import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true, 
    required: true,
  },
  phoneNumber: {
    type: String,
    unique: true, 
    required: true,
  },
  email: {
    type: String,
    unique: true, 
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  picture: {
    type: String, 
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserDB = mongoose.model("NewUser", userSchema);
export default UserDB;
