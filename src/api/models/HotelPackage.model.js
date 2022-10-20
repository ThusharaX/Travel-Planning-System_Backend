const mongoose = require("mongoose");

const HotelPackageSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	condition: {
		type: String,
		enum: ["AC", "Non-AC"],
		required: true,
	},
	beds: {
		type: Number,
		required: true,
	},
	room_no: {
		type: String,
		required: true,
	},
	cost: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	images: {
		type: Array,
		required: true,
	},
	hotel_owner_id: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("HotelPackage", HotelPackageSchema);
