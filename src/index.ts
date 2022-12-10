import mongoose from "mongoose";
mongoose.set("strictQuery", false);
import express from "express";
import { config } from "dotenv";
config();
const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello me !!!!");
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    app.listen(PORT, () => "server running");
  } catch (error) {
    console.log(error);
  }
};
start();
