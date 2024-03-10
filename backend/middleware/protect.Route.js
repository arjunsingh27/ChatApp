import jwt from "jsonwebtoken";
import User from "../models/user.models.js";  

const protectRoutes = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({ error: "Unauthorized access" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({ error: "Unauthorized access" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoutes middleware", error);
        return res.status(500).json({ error: "Internal Server Error" });  
    }
};

export default protectRoutes;
