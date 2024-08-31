import mongoose from 'mongoose';

const bioSchema = new mongoose.Schema({
	link: {
		type: String,
		default: '', //TODO have to have regex for links also
	},
	title: {
		type: String,
		default: '',
		//TODO have to have min and max length
	},
	job: {
		type: String,
		default: '', //TODO have to have "enum" of every job
	},
	description: {
		type: String,
		default: '',
		//TODO have to have min and max length
	},
});

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'Username is required.'],
			unique: [true, 'Username was taken.'],
			minLength: [3, 'Username has to have 3 charecter at least.'],
			minLength: [32, 'Username has to not have more then 32 charecter.'],
		},
		password: {
			type: String,
			match: [/^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g, 'Password invalid'],
		},
		firstName: {
			type: String,
			required: [true, 'FirstName is required'],
			//TODO have to have max length
		},
		lastName: {
			type: String,
			//TODO have to have max length
		},
		email: {
			type: String,
			required: [true, 'Email is required.'], //* for loging-in first step
			unique: [true, 'Email already used.'],
			match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g, 'Email is invalid.'],
		},
		phone: {
			type: String,
			unique: [true, 'Phone already used.'],
			match: [
				/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gi,
				'Phone is invalid.',
			],
		},
		profileImage: {
			type: String,
		},
		bio: bioSchema,
		followers: {
			type: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			],
			default: [],
		},
		following: {
			type: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			],
			default: [],
		},
		isPublic: {
			type: Boolean,
			default: false,
		},
		posts: {
			type: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Post',
				},
			],
			default: [],
		},
		saved: {
			type: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Post',
				},
			],
			default: [],
		},
		blockList: {
			type: [
				{
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User',
				},
			],
			default: [],
		},

		isComplete: {
			type: Boolean,
			default: false,
		},
		role: {
			type: String,
			default: 'user',
			enum: ['user', 'admin'],
		},
	},
	{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
