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

// Get All Customers
export const getAllCustomers = async (request, response, next) => {
	await CustomerService.getAllCustomers("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one customer
export const getOneCustomer = async (request, response, next) => {
	await CustomerService.getOneCustomer(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update Customer
export const updateCustomer = async (request, response, next) => {
	await CustomerService.updateCustomer(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one customer
export const deleteCustomer = async (request, response, next) => {
	await CustomerService.deleteCustomer(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search Customer
export const searchCustomer = async (request, response, next) => {
	await CustomerService.searchCustomer(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
