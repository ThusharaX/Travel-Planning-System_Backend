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

// Get all tour guide
export const getAllTourGuides = async () => {
	return await TourGuideModel.find({})
		.then((tour_guide) => {
			return tour_guide;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one tour guide
export const getOneTourGuide = async (tour_guideId) => {
	return await TourGuideModel.findById(tour_guideId)
		.then((tour_guide) => {
			if (tour_guide) {
				return tour_guide;
			} else {
				throw new Error("Tour Guide not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one tour guide
export const updateTourGuide = async (tour_guideId, tour_guideData) => {
	return await TourGuideModel.findByIdAndUpdate(tour_guideId, tour_guideData, {
		new: true,
	})
		.then((tour_guide) => {
			if (tour_guide) {
				return tour_guide;
			} else {
				throw new Error("Tour Guide Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one tour guide
export const deleteTourGuide = async (tour_guideId) => {
	return await TourGuideModel.findByIdAndDelete(tour_guideId)
		.then((tour_guide) => {
			if (tour_guide) {
				return tour_guide;
			} else {
				throw new Error("Tour Guide Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search Tour Guide name or contact number
export const searchTourGuide = async (searchTerm) => {
	return await TourGuideModel.find({
		$or: [
			{ tourGuideName: { $regex: searchTerm, $options: "i" } },
			{ contactNumber: { $regex: searchTerm, $options: "i" } },
		],
	})
		.then((tour_guide) => {
			return tour_guide;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
