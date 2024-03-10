import express from "express";
import protectRoutes from "../middleware/protect.Route.js";
import { getUserForSideBar } from "../controllers/user.controller.js";
const router = express.Router();
 
router.get("/",protectRoutes,getUserForSideBar);

export default router;