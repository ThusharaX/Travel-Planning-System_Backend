import TourGuideService from "../services";
import logger from "../../util/logger";
import TourGuideModel from "../models/TourGuide.model";

// Tour Guide Login
export const loginTourGuide = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await TourGuideService.authenticateTourGuide(email, password)
			.then(async (tour_guide) => {
				const authToken = await tour_guide.generateAuthToken();
				const data = {
					_id: tour_guide._id,
					tourGuideName: tour_guide.tourGuideName,
					email: tour_guide.email,
					contactNumber: tour_guide.contactNumber,
					token: authToken,
					permissionLevel: tour_guide.permissionLevel,
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

// Tour Guide Register
export const registerTourGuide = async (request, response, next) => {
	if (await TourGuideModel.findOne({ email: request.body.email })) {
		request.handleResponse.errorRespond(response)("Email already exists");
		next();
	} else if (await TourGuideModel.findOne({ nic: request.body.nic })) {
		request.handleResponse.errorRespond(response)("NIC already Exists");
		next();
	} else {
		const TourGuide = {
			tourGuideName: request.body.tourGuideName,
			email: request.body.email,
			nic: request.body.nic,
			contactNumber: request.body.contactNumber,
			guideArea: request.body.guideArea,
			guideCity: request.body.guideCity,
			spokenLanguages: request.body.spokenLanguages,
			motherTongue: request.body.motherTongue,
			profilePicture: "https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png",
			password: request.body.password,
			permissionLevel: "TOUR_GUIDE",
		};

		await TourGuideService.insertTourGuide(TourGuide)
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

// Get all tour gudies

export const getAllTourGuides = async (request, response, next) => {
	await TourGuideService.getAllTourGuides("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one tour guide
export const getOneTourGuide = async (request, response, next) => {
	await TourGuideService.getOneTourGuide(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update tour guide
export const updateTourGuide = async (request, response, next) => {
	await TourGuideService.updateTourGuide(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one tour guide

export const deleteTourGuide = async (request, response, next) => {
	await TourGuideService.deleteTourGuide(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search Tour Guide
export const searchTourGuide = async (request, response, next) => {
	await TourGuideService.searchTourGuide(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
