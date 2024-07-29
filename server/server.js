import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { formRouter } from "./routes/formRouter.js";
dotenv.config({ path: "./.env" });

const port = process.env.PORT || 6004;
const app = express();
const DB_URI = process.env.DB;

app.use(express.json());
app.use(
  cors({
    origin: ["https://deploy-mern-1whq.vercel.app"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

// ROUTER
app.use("/financial-records", formRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log("This is the process env DB", DB_URI);
// ! Connect to mongoose
mongoose.connect(
  "mongodb+srv://rusuemanuelwebdeveloper:B5Tjl9yWyx5F0BXE@financetracker.i9hhilk.mongodb.net/records"
);
mongoose.connection
  .on("error", console.error)
  .on("open", () => console.log(`Conntected to MongoDB `));
