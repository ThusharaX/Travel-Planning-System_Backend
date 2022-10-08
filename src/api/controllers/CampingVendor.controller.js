import CampingVendorService from "../services";
import logger from "../../util/logger";

// Camping Vendor Login
export const loginCampingVendor = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await CampingVendorService.authenticateCampingVendor(email, password)
			.then(async (camping_vendor) => {
				const authToken = await camping_vendor.generateAuthToken();
				const data = {
					_id: camping_vendor._id,
					companyOwnerName: camping_vendor.companyOwnerName,
					email: camping_vendor.email,
					token: authToken,
					permissionLevel: camping_vendor.permissionLevel,
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

// Camping Vendor Register
export const registerCampingVendor = async (req, res, next) => {
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
		permissionLevel: "CAMPING_VENDOR",
	};

	await CampingVendorService.insertCampingVendor(user)
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
