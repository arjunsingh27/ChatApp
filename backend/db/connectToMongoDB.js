import mongoose  from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectToMongoDB = async () => {
try {
    console.log(process.env.MONGO_DB_URI);
    await mongoose.connect(process.env.MONGO_DB_URI,)
    console.log("Database Connected");
} catch (error) {
    console.log("Error : Connecting to Database");
}
};
export default connectToMongoDB;