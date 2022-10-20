const mongoose = require("mongoose");

const VehiclePackageSchema = new mongoose.Schema({
	packageName: {
		type: String,
		required: true,
	},
	persons: {
		type: String,
		required: true,
	},
	vehicle: {
		type: String,
		required: true,
	},
	durantion: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		requred: true,
	},

	packageImage: {
		type: Array,
		required: false,
	},
});

module.exports = mongoose.model("VehiclePackage", VehiclePackageSchema);
