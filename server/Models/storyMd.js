import mongoose from 'mongoose';

const storySchema = new mongoose.Schema(
	{
		media: {
			type: String,
			required: [true, 'Any story must have an media'],
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
		seenUserId: {
			type: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			],
			default: [],
		},
		isArchive: {
			type: Boolean,
			default: false,
		},
		publisherId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);

const Story = mongoose.model('Story', storySchema);
export default Story;
