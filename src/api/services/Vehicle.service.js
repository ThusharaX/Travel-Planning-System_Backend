import VehicleModel from "../models/Vehicle.model";

// Insert one Vehicle
export const insertVehicle = async (vehicleData) => {
	return await VehicleModel.create(vehicleData)
		.then(async (vehicle) => {
			await vehicle.save();
			return vehicle;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all vehicles
export const getAllVehicles = async () => {
	return await VehicleModel.find({})
		.then((vehicles) => {
			return vehicles;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one vehicle
export const getOneVehicle = async (vehicleId) => {
	return await VehicleModel.findById(vehicleId)
		.then((vehicle) => {
			if (vehicle) {
				return vehicle;
			} else {
				throw new Error("Vehicle not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one vehicle
export const updateVehicle = async (vehicleId, vehicleData) => {
	return await VehicleModel.findByIdAndUpdate(vehicleId, vehicleData, {
		new: true,
	})
		.then((vehicle) => {
			if (vehicle) {
				return vehicle;
			} else {
				throw new Error("vehicle not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one sample
export const deleteVehicle = async (vehicleId) => {
	return await VehicleModel.findByIdAndDelete(vehicleId)
		.then((vehicle) => {
			if (vehicle) {
				return vehicle;
			} else {
				throw new Error("Sample not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search sample titles or content
export const searchVehicles = async (searchTerm) => {
	return await VehicleModel.find({
		$or: [{ title: { $regex: searchTerm, $options: "i" } }, { content: { $regex: searchTerm, $options: "i" } }],
	})
		.then((vehicles) => {
			return vehicles;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
