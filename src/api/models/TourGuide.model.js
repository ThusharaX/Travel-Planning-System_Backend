const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
import jwt from "jsonwebtoken";

const TourGuideSchema = new mongoose.Schema(
	{
		tourGuideName: {
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
		guideArea: {
			type: String,
			required: true,
		},
		guideCity: {
			type: String,
			required: true,
		},
		spokenLanguages: {
			type: String,
			required: true,
		},
		motherTongue: {
			type: String,
			required: true,
		},
		profilePicture: {
			type: String,
		},
		password: {
			type: String,
			required: true,
		},
		permissionLevel: {
			type: String,
			default: "TOUR_GUIDE",
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

TourGuideSchema.pre("save", async function (next) {
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

TourGuideSchema.methods.generateAuthToken = async function () {
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

TourGuideSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("TourGuide", TourGuideSchema);
