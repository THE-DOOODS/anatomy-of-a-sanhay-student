/* eslint-disable no-undef */
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
	const { firstName, lastName, email, password, gender } = req.body;

	try {
		const user = await User.findOne({ email });

		if (user) {
			return res.status(400).json({ message: "User already exists" });
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const newUser = await User({
			firstName,
			lastName,
			email,
			password: hashedPassword,
			gender,
		});

		await newUser.save();

		const payload = {
			id: newUser._id,
			email: newUser.email,
		};

		const token = jwt.sign(payload, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		res
			.status(201)
			.json({ payload, token, message: "User successfully registered!" });
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};
