import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
	{
		senderId: {
			//TODO maybe wrong spelling
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		text: {
			type: String,
			required: [true, 'text is required'],
		},
		seen: {
			default: false,
			type: Boolean,
		},
		file: {
			type: String,
		},
		reply: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Message',
		},
		likedUserIds: {
			//TODO check for what it is
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

const conversationSchema = new mongoose.Schema(
	{
		members: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		messages: {
			type: [messageSchema],
			default: [],
		},
	},
	{ timestamps: true }
);

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;
