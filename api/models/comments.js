import mongoose from "mongoose";

const collectionName = "comments";

const commentsSchema = mongoose.Schema(
	{
		userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
		name: { type: "string" },
		subject: { type: "string" },
		comment: { type: "string" },
	},
	{ timestamps: true }
);

export const Comment = mongoose.model(collectionName, commentsSchema);
