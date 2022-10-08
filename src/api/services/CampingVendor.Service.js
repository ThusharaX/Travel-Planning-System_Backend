import CampingVendorModel from "../models/CampingVendor.model";

export const authenticateCampingVendor = async (email, password) => {
	return await CampingVendorModel.findOne({ email })
		.then(async (camping_vendor) => {
			if (camping_vendor && (await camping_vendor.matchPassword(password))) {
				return camping_vendor;
			} else {
				throw new Error("Invalid Email or Password");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const insertCampingVendor = async (camping_vendor) => {
	return await CampingVendorModel.create(camping_vendor)
		.then(async (camping_vendor) => {
			await camping_vendor.generateAuthToken();
			return camping_vendor;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
