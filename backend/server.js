import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import bodyparser from "body-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
import message from "./models/message.model.js";
import cookieParser from "cookie-parser";
const app = express();
app.use(bodyparser.json());
app.use(cookieParser());
dotenv.config();
const port = process.env.PORT || 4000;
//root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//auth routes
app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
