const mongoose = require('mongoose');

const ruleSchema = new mongoose.Schema(
	{
		name: String,
		role: String,
		description: String
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Rules', ruleSchema);
