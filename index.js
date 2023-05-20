const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require('./routes/user.routes')
require("dotenv").config();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DB Connected successfully"))
  .catch(() => console.log("Error while starting db!!!"));

app.use(express.json());

app.use('/users', userRouter)

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error while starting server", err);
  }
  console.log("Server started at: ", PORT);
});
