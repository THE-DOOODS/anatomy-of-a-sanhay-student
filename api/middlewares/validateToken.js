/* eslint-disable no-undef */
import jwt from "jsonwebtoken";

export const validateToken = (req, res, next) => {
	try {
		const token = req.headers["Authorization"].split(" ")[1];

		if (!token) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET, {
			expiresIn: "1h",
		});

		if (!decoded) {
			return res.status(401).json({ message: "Unauthorized" });
		}

		req.userId = decoded.id;
		next();
	} catch (err) {
		console.log("Unable to validate token", err);
		throw new Error(err);
	}
};
