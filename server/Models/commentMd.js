import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
	{
		senderId: {
			//TODO maybe wrong spelling
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		postId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Post',
		},
		reply: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment',
		},
		text: {
			type: String,
			required: [true, 'text is required'],
		},
		likedUserIds: {
			type: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			],
			default: [],
		},
	},
	{ timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
