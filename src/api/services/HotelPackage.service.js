import HotelPackageModel from "../models/HotelPackage.model";

// Insert one hotel package
export const insertHotelPackage = async (hotel_packageData) => {
	return await HotelPackageModel.create(hotel_packageData)
		.then(async (hotel_package) => {
			await hotel_package.save();
			return hotel_package;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all hotel packages
export const getAllHotelPackages = async () => {
	return await HotelPackageModel.find({})
		.then((hotel_packages) => {
			return hotel_packages;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one hotel package
export const getOneHotelPackage = async (hotel_packageId) => {
	return await HotelPackageModel.findById(hotel_packageId)
		.then((hotel_package) => {
			if (hotel_package) {
				return hotel_package;
			} else {
				throw new Error("Hotel Package not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one hotel package
export const updateHotelPackage = async (hotel_packageId, hotel_packageData) => {
	return await HotelPackageModel.findByIdAndUpdate(hotel_packageId, hotel_packageData, {
		new: true,
	})
		.then((hotel_package) => {
			if (hotel_package) {
				return hotel_package;
			} else {
				throw new Error("Hotel Package not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one hotel package
export const deleteHotelPackage = async (hotel_packageId) => {
	return await HotelPackageModel.findByIdAndDelete(hotel_packageId)
		.then((hotel_package) => {
			if (hotel_package) {
				return hotel_package;
			} else {
				throw new Error("Hotel Package not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search hotel_package name or description
export const searchHotelPackages = async (searchTerm) => {
	return await HotelPackageModel.find({
		$or: [{ name: { $regex: searchTerm, $options: "i" } }, { description: { $regex: searchTerm, $options: "i" } }],
	})
		.then((hotel_packages) => {
			return hotel_packages;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all hotel packages for hotel_owner_id=owner_id
export const getAllHotelPackagesByHotelOwnerId = async (owner_id) => {
	return await HotelPackageModel.find({ hotel_owner_id: owner_id })
		.then((hotel_packages) => {
			return hotel_packages;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
