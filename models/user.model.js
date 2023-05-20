const mongoose = require('mongoose');

const users = mongoose.Schema({
    fullName:{
        type: String,
        // default: "",
        // maxlength: [50, "Full name should be less than 50 characters"]
    },
    username:{
        type:String,
        unique: true,
        // required: true,
        // maxlength: [25, "Username should be less than 25 characters"]
    },
    email:{
        type:String,
        unique: true,
        // required: true,
        // match: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
    }
})

const userModel = mongoose.model("userModel", users);
module.exports = userModel;