const jwt = require("jsonwebtoken");
import logger from "../../util/logger";
import CampingVendorModel from "../models/CampingVendor.model";

export const camping_vendor_auth = async (request, response, next) => {
	try {
		const secret = process.env.JWT_SECRET;

		if (secret) {
			if (request.headers.authorization && request.headers.authorization.startsWith("Bearer")) {
				const authToken = request.headers.authorization.split(" ")[1];
				const decode = jwt.verify(authToken, secret);
				const camping_vendor = await CampingVendorModel.findOne({
					_id: decode,
					authToken: authToken,
				});

				if (!camping_vendor) {
					const userNotFoundResponse = JSON.stringify({
						status: 401,
						message: "User not found in the system",
					});
					throw new Error(userNotFoundResponse);
				}
				request.authToken = authToken;
				request.camping_vendor = camping_vendor;

				logger.info(`Authentication Token for ID ${camping_vendor._id} is Accepted`);
				next();
			} else {
				response.status(401);
				throw new Error("Not authorized, no token");
			}
		} else {
			throw new Error("Token Secret is not found");
		}
	} catch (error) {
		logger.warn(error.message);
		return request.handleResponse.unathorizedRespond(response)(error.message);
	}
};
