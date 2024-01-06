import { Comment } from "../models/comments.js";

export const createComment = async (req, res) => {
	const { userId, subject, comment, name } = req.body;
	const newComment = new Comment({ userId, subject, comment, name });

	try {
		await newComment.save();
		res.status(201).json(newComment);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const getComments = async (req, res) => {
	try {
		const comments = await Comment.find({ subject: req.params.subject });
		res.status(200).json(comments);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
