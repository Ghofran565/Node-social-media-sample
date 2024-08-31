import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
	{
		medias: { //TODO maybe wrong spelling
			type: [String], //TODO have to be checked about: "[]"
			required: [true, 'Any post must have some media'],
		},
		description: {
			type: String,
			default: '',
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
		shareCount: {
			type: Number,
			default: 0,
		},
		isReel: {
			type: Boolean,
			default: false,
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
		tags: {
			type: [String], //TODO from top
			default: [],
		},
		publisherId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);

const Post = mongoose.model('Post', postSchema);
export default Post;
