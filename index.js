import express from "express";
import cors from "cors";
import connectDB from "./config/db";
require("dotenv").config();

const PORT = process.env.PORT || 8000;

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/users", require("./routes/user"));
// app.use("/messages", require("./routes/message"));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
