import TourGuideModel from "../models/TourGuide.model";

export const authenticateTourGuide = async (email, password) => {
	return await TourGuideModel.findOne({ email })
		.then(async (tour_guide) => {
			if (tour_guide && (await tour_guide.matchPassword(password))) {
				return tour_guide;
			} else {
				throw new Error("Invalid Emaiil or Password");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const insertTourGuide = async (tour_guide) => {
	return await TourGuideModel.create(tour_guide)
		.then(async (tour_guide) => {
			await tour_guide.generateAuthToken();
			return tour_guide;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
