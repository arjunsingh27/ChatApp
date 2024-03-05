import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import bodyparser from "body-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
app.use(bodyparser.json());
dotenv.config();
const port = process.env.PORT || 4000;
//root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//auth routes
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
