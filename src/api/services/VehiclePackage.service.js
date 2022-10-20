import VehiclePackageModal from "../models/VehiclePackage.modal";

// Insert one VehiclePackage
export const insertVehiclePackage = async (vehiclepackageData) => {
	return await VehiclePackageModal.create(vehiclepackageData)
		.then(async (VehiclePackage) => {
			await VehiclePackage.save();
			return VehiclePackage;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all vehiclePackages
export const getAllVehiclePackages = async () => {
	return await VehiclePackageModal.find({})
		.then((VehiclePackage) => {
			return VehiclePackage;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one vehiclePackage
export const getOneVehiclePackage = async (vehiclePacakageId) => {
	return await VehiclePackageModal.findById(vehiclePacakageId)
		.then((VehiclePackage) => {
			if (VehiclePackage) {
				return VehiclePackage;
			} else {
				throw new Error("Vehicle pacakge not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one vehiclePackage
export const updateVehiclePackage = async (vehiclePacakageId, vehiclepackageData) => {
	return await VehiclePackageModal.findByIdAndUpdate(vehiclePacakageId, vehiclepackageData, {
		new: true,
	})
		.then((VehiclePackage) => {
			if (VehiclePackage) {
				return VehiclePackage;
			} else {
				throw new Error("vehicle Package not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one sample
export const deleteVehiclePackage = async (vehiclePacakageId) => {
	return await VehiclePackageModal.findByIdAndDelete(vehiclePacakageId)
		.then((VehiclePackage) => {
			if (VehiclePackage) {
				return VehiclePackage;
			} else {
				throw new Error("package not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search Package titles or content
export const searchVehiclesPackage = async (searchTerm) => {
	return await VehiclePackageModal.find({
		$or: [{ title: { $regex: searchTerm, $options: "i" } }, { content: { $regex: searchTerm, $options: "i" } }],
	})
		.then((VehiclePackage) => {
			return VehiclePackage;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
