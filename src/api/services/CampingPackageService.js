import CampingPackageModel from "../models/CampingPackage.model";

// Insert one Camping Package
export const insertCampingPackage = async (packageData) => {
	return await CampingPackageModel.create(packageData)
		.then(async (campingPackage) => {
			await campingPackage.save();
			return campingPackage;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all Camping Package
export const getAllCampingPackages = async () => {
	return await CampingPackageModel.find({})
		.then((campingPackages) => {
			return campingPackages;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one Camping Package
export const getOneCampingPackage = async (packageId) => {
	return await CampingPackageModel.findById(packageId)
		.then((campingPackage) => {
			if (campingPackage) {
				return campingPackage;
			} else {
				throw new Error("Camping Package not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one Camping Package
export const updateCampingPackage = async (packageId, packageData) => {
	return await CampingPackageModel.findByIdAndUpdate(packageId, packageData, {
		new: true,
	})
		.then((campingPackage) => {
			if (campingPackage) {
				return campingPackage;
			} else {
				throw new Error("Camping Package not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one Camping Package
export const deleteCampingPackage = async (packageId) => {
	return await CampingPackageModel.findByIdAndDelete(packageId)
		.then((campingPackage) => {
			if (campingPackage) {
				return campingPackage;
			} else {
				throw new Error("Camping Package not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search Camping Package titles or content
export const searchCampingPackages = async (searchTerm) => {
	return await CampingPackageModel.find({
		$or: [{ title: { $regex: searchTerm, $options: "i" } }, { content: { $regex: searchTerm, $options: "i" } }],
	})
		.then((campingPackages) => {
			return campingPackages;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
