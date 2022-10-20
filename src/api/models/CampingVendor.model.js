const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
import jwt from "jsonwebtoken";

const CampingVendorSchema = new mongoose.Schema(
	{
		companyOwnerName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		nic: {
			type: String,
			required: true,
		},
		contactNumber: {
			type: String,
			required: true,
		},
		companyName: {
			type: String,
			required: true,
		},
		companyAddress: {
			type: String,
			requred: true,
		},
		companyPhone: {
			type: String,
			required: true,
		},
		companyRegisterNumber: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String,
		},
		permissionLevel: {
			type: String,
			default: "CAMPING_VENDOR",
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

CampingVendorSchema.pre("save", async function (next) {
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

CampingVendorSchema.methods.generateAuthToken = async function () {
	const user = this;
	const secret = process.env.JWT_SECRET;

	const authToken = jwt.sign(
		{
			id: user._id,
			permissionLevel: user.permissionLevel,
		},
		secret
	);

	user.authToken = authToken;
	await user.save();
	return authToken;
};

CampingVendorSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("CampingVendor", CampingVendorSchema);
