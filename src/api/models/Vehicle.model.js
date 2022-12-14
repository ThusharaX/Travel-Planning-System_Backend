const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
	ownerId: {
		type: String,
		required: true,
	},
	vehicleType: {
		type: String,
		required: true,
	},
	regNo: {
		type: String,
		required: true,
	},
	ownersName: {
		type: String,
		required: true,
	},
	year: {
		type: String,
		required: true,
	},
	discription: {
		type: String,
		required: true,
	},
	vehicleImage: {
		type: Array,
		required: false,
	},
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
