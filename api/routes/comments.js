import express from "express";
import { createComment, getComments } from "../controllers/comment.js";

const router = express.Router();

router.get("/comments/:subject", getComments);
router.post("/comments", createComment);

export { router as comments };
