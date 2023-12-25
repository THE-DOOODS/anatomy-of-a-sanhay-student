/* eslint-disable no-undef */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import { limiter } from "./lib/limiter.js";
import { auth } from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
	cors({
		origin: "*",
		method: ["GET", "POST", "PUT", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	})
);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(morgan("tiny"));
app.use(limiter);

app.use("/api/auth", auth);

new Promise((resolve, reject) => {
	mongoose
		.connect(process.env.MONGODB_URI)
		.then(() => {
			console.log("MongoDB connected successfully");
			resolve();
		})
		.catch((err) => {
			console.log("MongoDB connection failed");
			reject(err);
		});
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
