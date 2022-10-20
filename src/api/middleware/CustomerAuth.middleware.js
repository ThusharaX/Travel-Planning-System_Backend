const jwt = require("jsonwebtoken");
import logger from "../../util/logger";
import CustomerModel from "../models/Customer.model";

export const customer_auth = async (request, response, next) => {
	try {
		const secret = process.env.JWT_SECRET;

		if (secret) {
			if (request.headers.authorization && request.headers.authorization.startsWith("Bearer")) {
				const authToken = jwt.verify(authToken, secret);
				const decode = jwt.verify(authToken, secret);
				const customer = await CustomerModel.findOne({
					_id: decode,
					authToken: authToken,
				});

				if (!customer) {
					const useNotFoundResponse = JSON.stringify({
						status: 401,
						message: "User not found in the system",
					});
					throw new Error(useNotFoundResponse);
				}
				request.authToken = authToken;
				request.customer = customer;
				logger.info(`Authentication Token for ID ${customer._id} is Accepted`);
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
