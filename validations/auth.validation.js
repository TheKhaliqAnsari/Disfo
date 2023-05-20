require('dotenv').config();
const AUTH_KEY = process.env["x-api-key"]


const authValidation = async(req, res, next) => {
   
if ( req.headers["x-api-key"] === AUTH_KEY) {
    next();
  } else {
    return res.status(403).json({ message: "Unautorized access" });
  }
}

module.exports = { authValidation }
