const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
	article: {
		type: Schema.Types.ObjectId
	}
});

module.exports = mongoose.model('Stock', stockSchema);
