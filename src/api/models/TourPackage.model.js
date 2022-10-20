const mongoose = require("mongoose");

const TourPackageSchema = new mongoose.Schema({
	tourPackageName: {
		type: String,
		required: true,
	},

	guideName: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	contactNumber: {
		type: Number,
		required: true,
	},

	price: {
		type: Number,
		required: true,
	},

	NumberOfDays: {
		type: Number,
		required: true,
	},

	location: {
		type: String,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},

	images: {
		type: String,
	},
});

module.exports = mongoose.model("TourPackage", TourPackageSchema);
