import TourPackageModel from "../models/TourPackage.model";

//
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

export const getAllTourPackages = async () => {
	return await TourPackageModel.find({})
		.then((tour_package) => {
			return tour_package;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
