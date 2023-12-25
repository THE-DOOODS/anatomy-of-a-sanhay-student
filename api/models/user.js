import mongoose from "mongoose";

const collectionName = "user";

const userSchema = mongoose.Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		gender: { type: String, required: true },
		profilePicture: { type: String, required: false, default: "" },
		bio: { type: String, required: false, default: "" },
	},
	{ timestamps: true }
);

export const User = mongoose.model(collectionName, userSchema);
