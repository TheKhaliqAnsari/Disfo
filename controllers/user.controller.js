const { model } = require("mongoose");
const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
  try {
    const allUserObject = await User.find();
    if (allUserObject.length) {
      res.json({ Users: allUserObject });
    } else {
      res.status(404).json({ message: "No user found" });
    }
  } catch (err) {
    return res.json({ message: "Error while fatching users" });
  }
};

const registerUser = async (req, res) => {
  try {
    const { fullName, username, email } = req.body;
    const newUser = await User.create({
      fullName: fullName,
      username: username,
      email: email,
    });
    res.status(201).json({ "User create": newUser });
  } catch (err) {
    if (err.code == 11000) {
      res.status(409).json({
        message: "Failed to create new user",
        reason: "Already Exists in DB",
      });
    } else {
      return res.status(500).json(err);
    }
  }
};

const getSingleUser = async (req, res) => {
  try {
    const userObj = await User.find({username: req.params.id});
    if (userObj.length) {
      res.json(userObj);
    } else {
      res.status(404).json({ message: "User not found!!" });
    }
  } catch {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAllUsers,
  registerUser,
  getSingleUser
};
