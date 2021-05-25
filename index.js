require('dotenv').config()
const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const client = require("./configs/db");
const noteRoutes= require("./routes/notes");

const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8043;


app.get("/", (req, res) => {
  res.status(200).send("Server is up and running!!");
});


app.use("/auth", authRoutes);
app.use("/notes",noteRoutes);
client.connect(() => {
 
  console.log("Connected to database!");
});
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});