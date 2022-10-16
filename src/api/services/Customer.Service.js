import CustomerModel from "../models/Customer.model";

export const authenticateCustomer = async (email, password) => {
	return await CustomerModel.findOne({ email })
		.then(async (customer) => {
			if (customer && (await customer.matchPassword(password))) {
				return customer;
			} else {
				throw new Error("Invalid Email or Password");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const insertCustomer = async (customer) => {
	return await CustomerModel.create(customer)
		.then(async (customer) => {
			await customer.generateAuthToken();
			return customer;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
