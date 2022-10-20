const mongoose = require("mongoose");

const CampingPackageSchema = new mongoose.Schema({
	vendorId: {
		type: String,
		required: true,
	},

	packageName: {
		type: String,
		required: true,
	},
	persons: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	duration: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	packageDescription: {
		type: String,
		required: false,
	},
	image: {
		type: String,
		required: false,
	},
});

module.exports = mongoose.model("CampingPackage", CampingPackageSchema);
