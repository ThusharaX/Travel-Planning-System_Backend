import VehicleOwnerService from "../services";
import logger from "../../util/logger";

// Vehicle Owner Login
export const loginVehicleOwner = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await VehicleOwnerService.authenticateVehicleOwner(email, password)
			.then(async (vehicle_owner) => {
				const authToken = await vehicle_owner.generateAuthToken();
				const data = {
					_id: vehicle_owner._id,
					companyOwnerName: vehicle_owner.companyOwnerName,
					email: vehicle_owner.email,
					token: authToken,
					permissionLevel: vehicle_owner.permissionLevel,
				};

				request.handleResponse.successRespond(response)(data);
			})
			.catch((error) => {
				const errorResponseData = {
					errorTime: new Date(),
					message: error.message,
				};
				logger.error(JSON.stringify(errorResponseData));
				request.handleResponse.errorRespond(response)(errorResponseData);
				next();
			});
	} else {
		logger.error("Username or Password is missing");
		request.handleResponse.errorRespond(response)("Username or Password is missing");
		next();
	}
};

// Vehicle Owner Register

export const registerVehicleOwner = async (req, res, next) => {
	const user = {
		companyOwnerName: req.body.companyOwnerName,
		email: req.body.email,
		nic: req.body.nic,
		contactNumber: req.body.contactNumber,
		companyName: req.body.companyName,
		companyAddress: req.body.companyAddress,
		companyPhone: req.body.companyPhone,
		companyRegisterNumber: req.body.companyRegisterNumber,
		profilePicture: "https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png",
		password: req.body.password,
		permissionLevel: "VEHICLE_OWNER",
	};

	await VehicleOwnerService.insertVehicleOwner(user)
		.then((data) => {
			logger.info(`New User with ID ${data._id} created`);
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			logger.error(error.message);
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};
