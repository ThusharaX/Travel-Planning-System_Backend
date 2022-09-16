const jwt = require("jsonwebtoken");
import logger from "../../util/logger";
import TourGuideModel from "../models/TourPackage.model";

export const tour_guide_auth = async (request, response, next) => {
	try {
		const secret = process.env.JWT_SECRET;

		if (secret) {
			if (request.headers.authorization && request.headers.authorization.startsWith("Bearer")) {
				const authToken = request.headers.authorization.split(" ")[1];
				const decode = jwt.verify(authToken, secret);
				const tour_guide = await TourGuideModel.findOne({
					_id: decode,
					authToken: authToken,
				});

				if (!tour_guide) {
					const useNotFoundResponse = JSON.stringify({
						status: 401,
						message: "User not found in the system",
					});
					throw new Error(useNotFoundResponse);
				}
				request.authToken = authToken;
				request.tour_guide = tour_guide;

				logger.info(`Authentication Token for ID ${tour_guide._id} is Accepted`);
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
