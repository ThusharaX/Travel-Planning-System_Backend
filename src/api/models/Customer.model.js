const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
import jwt from "jsonwebtoken";

const CustomerSchema = new mongoose.Schema(
	{
		name: {
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
		password: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String,
		},
		permissionLevel: {
			type: String,
			default: "CUSTOMER",
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

CustomerSchema.pre("save", async function (next) {
	const user = this;
	const password = user.password;

	if (!user.isModified("password")) {
		return next();
	}
	// Number of rounds hash functions wiil execute
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hashSync(password, salt);
	user.password = hash;
	return next();
});

CustomerSchema.methods.generateAuthToken = async function () {
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

CustomerSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("Customer", CustomerSchema);
