const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
	name: String,
	location: {
		address: {
			type: String,
			default: 'Point'
		},
		coordinates: [ Number ]
	},
  phoneNumber: String,
  
});

module.exports = mongoose.model('Store', storeSchema);
