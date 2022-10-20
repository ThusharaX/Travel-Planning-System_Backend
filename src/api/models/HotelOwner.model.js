const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
import jwt from "jsonwebtoken";

const HotelOwnerSchema = new mongoose.Schema(
	{
		ownerName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		nic: {
			type: String,
			required: true,
		},
		contactNumber: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		hotelName: {
			type: String,
			required: true,
		},
		hotelAddress: {
			type: String,
			required: true,
		},
		companyPhoneNumber: {
			type: String,
			required: true,
		},
		companyRegNo: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String,
		},
		permissionLevel: {
			type: String,
			default: "HOTEL_OWNER",
			required: true,
		},
		authToken: {
			type: String,
			required: false,
		},
		deletedAt: {
			type: Date,
			required: false,
			default: null,
		},
	},
	{
		timestamps: true,
	}
);

HotelOwnerSchema.pre("save", async function (next) {
	const user = this;
	const password = user.password;

	if (!user.isModified("password")) {
		return next();
	}

	// Number of rounds hash function will execute
	const salt = await bcrypt.genSalt(10);

	const hash = await bcrypt.hashSync(password, salt);
	user.password = hash;
	return next();
});

HotelOwnerSchema.methods.generateAuthToken = async function () {
	const user = this;
	const secret = process.env.JWT_SECRET;

	const authToken = jwt.sign(
		{
			_id: user._id,
			permissionLevel: user.permissionLevel,
		},
		secret
	);
	user.authToken = authToken;
	await user.save();
	return authToken;
};

HotelOwnerSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("HotelOwner", HotelOwnerSchema);
