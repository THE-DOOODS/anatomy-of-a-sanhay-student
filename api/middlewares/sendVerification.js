/* eslint-disable no-unused-vars */
import nodemailer from "nodemailer";

/**
 *
 * TODO: Implement this function to send verification email to the user
 *
 * @param {*} req
 *
 * @returns {Promise}
 */
export const sendVerification = async (req, _) => {
	const { email } = req.body;
	const transporter = nodemailer.createTransport({
		service: "gmail",
		host: "smtp.gmail.com",
		port: 587,
		secure: 587,
	});

	new Promise((resolve, reject) => {
		transporter.verify((error, success) => {
			if (error) {
				console.log(error);
				reject(error);
			}

			console.log("Server is ready to take messages", success);
			resolve(success);
		});
	});

	const message = {
		from: "anatomy_of_sanhay_student@gmail.com",
		to: email,
	};
};
