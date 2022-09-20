import TourGuideService from "../services";
import logger from "../../util/logger";

// Tour Guide Login
export const loginTourGuide = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await TourGuideService.authenticateTourGuide(email, password)
			.then(async (tour_guide) => {
				const authToken = await tour_guide.generateAuthToken();
				const data = {
					_id: tour_guide._id,
					email: tour_guide.email,
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
export const registerTourGuide = async (req, res, next) => {
	const user = {
		tourGuideName: req.body.tourGuideName,
		email: req.body.email,
		nic: req.body.nic,
		contactNumber: req.body.contactNumber,
		profilePicture: "https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png",
		password: req.body.password,
		permissionLevel: "TOUR_GUIDE",
	};

	await TourGuideService.insertTourGuide(user)
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
