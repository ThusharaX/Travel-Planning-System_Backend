const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
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
		type: String,
		required: false,
	},
});

module.exports = mongoose.model("Vehicle", VehicleSchema);
