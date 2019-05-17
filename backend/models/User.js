const mongoose = require('mongoose');
const { Schema } = mongoose;
const PLM = require('passport-local-mongoose');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true
		},
		phone: {
			type: String,
			unique: true
		},
		role: {
			type: String,
			default: 'User',
			enum: [ 'User', 'Admin', 'Supervisor', 'Chief' ]
		},
		rules: {
			type: Schema.Types.ObjectId,
			ref: 'Rules'
		},
		storeId: {
			type: Schema.Types.ObjectId,
			ref: 'Store'
		}
	},
	{
		timestamps: true
	}
);

userSchema.plugin(PLM, { usernameField: 'name' });

module.exports = mongoose.model('User', userSchema);
