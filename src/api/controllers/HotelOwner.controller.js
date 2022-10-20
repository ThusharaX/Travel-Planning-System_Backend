import HotelOwnerService from "../services";
import logger from "../../util/logger";

// Hotel Owner Login
export const loginHotelOwner = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await HotelOwnerService.authenticateHotelOwner(email, password)
			.then(async (hotel_owner) => {
				const authToken = await hotel_owner.generateAuthToken();
				const data = {
					_id: hotel_owner._id,
					email: hotel_owner.email,
					token: authToken,
					permissionLevel: hotel_owner.permissionLevel,
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

// Hotel Owner Register
export const registerHotelOwner = async (req, res, next) => {
	const user = {
		ownerName: req.body.ownerName,
		email: req.body.email,
		nic: req.body.nic,
		contactNumber: req.body.contactNumber,
		password: req.body.password,
		hotelName: req.body.hotelName,
		hotelAddress: req.body.hotelAddress,
		companyPhoneNumber: req.body.companyPhoneNumber,
		companyRegNo: req.body.companyRegNo,
		profilePicture: "https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png",
		permissionLevel: "HOTEL_OWNER",
	};

	await HotelOwnerService.insertHotelOwner(user)
		.then((data) => {
			logger.info(`New user with ID ${data._id} created`);
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			logger.error(error.message);
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Get Hotel Owner Details
export const getHotelOwnerDetails = async (req, res, next) => {
	await HotelOwnerService.getHotelOwnerDetails(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Edit Hotel Owner Details
export const editHotelOwnerDetails = async (req, res, next) => {
	const user = {
		ownerName: req.body.ownerName,
		email: req.body.email,
		nic: req.body.nic,
		contactNumber: req.body.contactNumber,
		hotelName: req.body.hotelName,
		hotelAddress: req.body.hotelAddress,
		companyPhoneNumber: req.body.companyPhoneNumber,
		companyRegNo: req.body.companyRegNo,
	};

	await HotelOwnerService.editHotelOwnerDetails(req.params.id, user)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};
