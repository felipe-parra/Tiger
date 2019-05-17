const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
	{
		name: String,
		shortName: String
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Categories', categorySchema);
