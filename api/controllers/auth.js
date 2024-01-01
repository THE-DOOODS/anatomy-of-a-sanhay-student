/* eslint-disable no-undef */
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

/**
 *
 * Register function
 *
 * To register a new user, we need to:
 * 1. Check if the user already exists
 * 2. Hash the password
 * 3. Create a new user
 * 4. Save the user to the database
 * 5. Create a payload for the token
 * 6. Sign the token
 * 7. Send the token to the user
 * @param {*} req
 * @param {*} res
 * @returns
 */
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

/**
 *
 * Login function
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */

export const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });

		if (!user) {
			return res.status(400).json({ message: "User does not exist" });
		}

		if (!user.is_validated) {
			return res.status(401).json({ message: "Verify email first." });
		}

		const isPasswordMatch = await bcrypt.compare(password, user.password);

		if (!isPasswordMatch) {
			return res
				.status(401)
				.json({ message: "Invalid password. Please try again." });
		}

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		const payload = {
			id: user._id,
			email: user.email,
			name: `${user.firstName} ${user.lastName}`,
			token,
		};

		res.status(200).json({ payload, message: "User successfully logged in!" });
	} catch (err) {
		console.log(err);
	}
};
