import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use("/", (req, res, next) => {
  res.send("Welcome1");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("node server start at " + PORT);
});
