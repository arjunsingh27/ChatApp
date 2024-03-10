import express from "express";
import { sendMesssage } from "../controllers/message.controller.js";
import  protectRoutes  from "../middleware/protect.Route.js";
import { getMessages } from "../controllers/message.controller.js";
const router = express.Router();
router.get("/:id",protectRoutes,getMessages);
router.post("/send/:id",protectRoutes,sendMesssage);
export default router;