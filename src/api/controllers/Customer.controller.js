import CustomerService from "../services";
import logger from "../../util/logger";
import CustomerModel from "../models/Customer.model";

// Customer Login
export const loginCustomer = async (request, response, next) => {
	const { email, password } = request.body;

	if (email && password) {
		await CustomerService.authenticateCustomer(email, password)
			.then(async (customer) => {
				const authToken = await customer.generateAuthToken();
				const data = {
					_id: customer._id,
					name: customer.name,
					email: customer.email,
					token: authToken,
					permissionLevel: customer.permissionLevel,
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

// Custmer Register
export const registerCustomer = async (request, response, next) => {
	if (await CustomerModel.findOne({ email: request.body.email })) {
		request.handleResponse.errorRespond(response)("Email already exists");
		next();
	} else if (await CustomerModel.findOne({ nic: request.body.nic })) {
		request.handleResponse.errorRespond(response)("NIC already Exists");
		next();
	} else {
		const Customer = {
			name: request.body.name,
			email: request.body.email,
			nic: request.body.nic,
			contactNumber: request.body.contactNumber,
			profilePicture: "https://www.seekpng.com/png/full/514-5147412_default-avatar-icon.png",
			password: request.body.password,
			permissionLevel: "CUSTOMER",
		};

		await CustomerService.insertCustomer(Customer)
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
