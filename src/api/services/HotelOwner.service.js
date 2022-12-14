import HotelOwnerModel from "../models/HotelOwner.model";

export const authenticateHotelOwner = async (email, password) => {
	return await HotelOwnerModel.findOne({ email })
		.then(async (hotel_owner) => {
			if (hotel_owner && (await hotel_owner.matchPassword(password))) {
				return hotel_owner;
			} else {
				throw new Error("Invalid Email or Password!");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const insertHotelOwner = async (hotel_owner) => {
	return await HotelOwnerModel.create(hotel_owner)
		.then(async (hotel_owner) => {
			await hotel_owner.generateAuthToken();
			return hotel_owner;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get Hotel Owner Details
export const getHotelOwnerDetails = async (userId) => {
	return await HotelOwnerModel.findById(userId)
		.then((hotelOwner) => {
			return hotelOwner;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update Hotel Owner Details
export const editHotelOwnerDetails = async (userId, hotelOwner) => {
	return await HotelOwnerModel.findByIdAndUpdate(userId, hotelOwner, { new: true })
		.then((hotelOwner) => {
			return hotelOwner;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete Hotel Owner
export const deleteHotelOwner = async (userId) => {
	return await HotelOwnerModel.findByIdAndDelete(userId)
		.then((hotelOwner) => {
			return hotelOwner;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
