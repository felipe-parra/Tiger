const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
	{
		article: {
			type: String,
			unique: true,
			required: true
		},
		barcode: {
			type: String,
			unique: true
		},
		category: {
			type: Schema.Types.ObjectId,
			ref: 'Categories'
		},
		name: {
			type: String,
			unique: true,
			required: true
		},
		saleUnit: {
			type: Schema.Types.ObjectId,
			ref: 'Units'
		},
		purchaseUnit: {
			type: Schema.Types.ObjectId,
			ref: 'Units'
		},
		extraUnit: {
			type: Array
		},
		taxes: {
			type: Array,
			default: [ { IVA: 0, IEOS: 0 } ]
		},
		price: {
			type: Array,
			required: true
		},
		stock: Number
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Article', articleSchema);
