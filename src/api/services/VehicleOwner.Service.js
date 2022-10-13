import VehicleOwnerModel from "../models/VehicleOwner.modal";

export const authenticateVehicleOwner = async (email, password) => {
	return await VehicleOwnerModel.findOne({ email })
		.then(async (vehicle_owner) => {
			if (vehicle_owner && (await vehicle_owner.matchPassword(password))) {
				return vehicle_owner;
			} else {
				throw new Error("Invalid Email or Password");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const insertVehicleOwner = async (vehicle_owner) => {
	return await VehicleOwnerModel.create(vehicle_owner)
		.then(async (vehicle_owner) => {
			await vehicle_owner.generateAuthToken();
			return vehicle_owner;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
