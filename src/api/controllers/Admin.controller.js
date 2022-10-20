import AdminService from "../services";
import logger from "../../util/logger";

// Admin Login
export const loginAdmin = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await AdminService.authenticateAdmin(email, password)
			.then(async (admin) => {
				const authToken = await admin.generateAuthToken();
				const data = {
					_id: admin._id,
					email: admin.email,
					token: authToken,
					permissionLevel: admin.permissionLevel,
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

// Admin Register
export const registerAdmin = async (req, res, next) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		permissionLevel: "ADMIN",
	};

	await AdminService.insertAdmin(user)
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

// Get Admin Details
export const getAdminDetails = async (req, res, next) => {
	await AdminService.getAdminDetails(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

// Edit Admin Details
export const editAdminDetails = async (req, res, next) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};

	await AdminService.editAdminDetails(req.params.id, user)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};
