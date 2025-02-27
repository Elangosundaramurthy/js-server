const express = require("express");
const mongoose = require("mongoose");
const login = require("./routers/login");
const aggregation =require("./routers/aggrerouters");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://localhost:27017/login")
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log("Error while connecting to the database:", err));
app.use("/api", login);
app.use("/api", aggregation);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
