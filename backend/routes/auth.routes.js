import express from "express";
import { login, logout ,signin , signup} from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/login", login);
router.post("/logout", logout);
router.post("/signin", signin);
router.get("/signup", signup);

export default router;
