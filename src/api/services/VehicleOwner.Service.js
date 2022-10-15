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

// Get all Vehicle Owners
export const getAllVehicleOwners = async () => {
	return await VehicleOwnerModel.find({})
		.then((vehicle_owner) => {
			return vehicle_owner;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get One Vehicle Owners
export const getOneVehicleOwner = async (vehicle_ownerId) => {
	return await VehicleOwnerModel.findById(vehicle_ownerId)
		.then((vehicle_owner) => {
			if (vehicle_owner) {
				return vehicle_owner;
			} else {
				throw new Error("Vehicle Owner not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one vehicle owner
export const updateVehicleOwner = async (vehicle_ownerId, vehicle_ownerData) => {
	return await VehicleOwnerModel.findByIdAndUpdate(vehicle_ownerId, vehicle_ownerData, {
		new: true,
	})
		.then((vehicle_owner) => {
			if (vehicle_owner) {
				return vehicle_owner;
			} else {
				throw new Error("Vehicle Owner not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete Vehicle Owner

export const deleteVehicleOwner = async (vehicle_ownerId) => {
	return await VehicleOwnerModel.findByIdAndDelete(vehicle_ownerId)
		.then((vehicle_owner) => {
			if (vehicle_owner) {
				return vehicle_owner;
			} else {
				throw new Error("Vehicle Owner not found");
			}
		})
		.catch((error) => {
			throw new Error(error.nessage);
		});
};

// Search company name or contact number
export const searchVehicleOwner = async (searchTerm) => {
	return await VehicleOwnerModel.find({
		$or: [
			{ companyOwnerName: { $regex: searchTerm, $options: "i" } },
			{ companyName: { $regex: searchTerm, $options: "i" } },
		],
	})
		.then((vehicle_owner) => {
			return vehicle_owner;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
