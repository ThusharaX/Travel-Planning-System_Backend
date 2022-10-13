import VehicleOwnerService from "../services";
import VehicleOwnerModel from "../models/VehicleOwner.modal";
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

export const registerVehicleOwner = async (request, response, next) => {
	if (await VehicleOwnerModel.findOne({ email: request.body.email })) {
		request.handleResponse.errorRespond(response)("Email already Exists");
		next();
	} else if (await VehicleOwnerModel.findOne({ nic: request.body.nic })) {
		request.handleResponse.errorRespond(response)("NIC already Exists");
		next();
	} else {
		const VehicleOwner = {
			companyOwnerName: request.body.companyOwnerName,
			email: request.body.email,
			nic: request.body.nic,
			contactNumber: request.body.contactNumber,
			companyName: request.body.companyName,
			companyAddress: request.body.companyAddress,
			companyPhone: request.body.companyPhone,
			companyRegisterNumber: request.body.companyRegisterNumber,
			profilePicture: "https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png",
			password: request.body.password,
			permissionLevel: "VEHICLE_OWNER",
		};

		await VehicleOwnerService.insertVehicleOwner(VehicleOwner)
			.then((data) => {
				logger.info(`New User with ID ${data._id} created`);
				request.handleResponse.successRespond(response)(data);
				next();
			})
			.catch((error) => {
				logger.error(error.message);
				request.handleResponse.errorRespond(response)(error.message);
				next();
			});
	}
};

// Get all Vehicle Owners
export const getAllVehicleOwners = async (request, response, next) => {
	await VehicleOwnerService.getAllVehicleOwners("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
