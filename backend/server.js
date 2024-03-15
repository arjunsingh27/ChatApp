//Packages Import
import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

//Routes Import 
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

//Database connection
import connectToMongoDB from "./db/connectToMongoDB.js";

//App Config
const app = express();
app.use(bodyparser.json());
app.use(cookieParser());
app.use(cors());
dotenv.config();
const port = process.env.PORT || 4000;


//root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

//auth routes
app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

//Server Listening on Port
app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
