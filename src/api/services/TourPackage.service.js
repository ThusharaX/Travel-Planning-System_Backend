import TourPackageModel from "../models/TourPackage.model";

//insert Tour package
export const insertTourPackage = async (tour_packageData) => {
	return await TourPackageModel.create(tour_packageData)
		.then(async (tour_package) => {
			await tour_package.save();
			return tour_package;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all tour package
export const getAllTourPackages = async () => {
	return await TourPackageModel.find({})
		.then((tour_package) => {
			return tour_package;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one tour pacakge
export const getOneTourPackage = async (tour_packageId) => {
	return await TourPackageModel.findById(tour_packageId)
		.then((tour_package) => {
			if (tour_package) {
				return tour_package;
			} else {
				throw new Error("Tour Package not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// update one tour package
export const updateTourPackage = async (tour_packageId, tour_packageData) => {
	return await TourPackageModel.findById(tour_packageId, tour_packageData, {
		new: true,
	})
		.then((tour_package) => {
			if (tour_package) {
				return tour_package;
			} else {
				throw new Error("Tour Package not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
