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

// Get all Camping Package
export const getAllCampingVendors = async () => {
	return await CampingVendorModel.find({})
		.then((campingVendors) => {
			return campingVendors;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one Camping Package
export const getOneCampingVendor = async (vendorId) => {
	return await CampingVendorModel.findById(vendorId)
		.then((campingVendor) => {
			if (campingVendor) {
				return campingVendor;
			} else {
				throw new Error("Camping Vendor not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one Camping Package
export const updateCampingVendor = async (vendorId, vendorData) => {
	return await CampingVendorModel.findByIdAndUpdate(vendorId, vendorData, {
		new: true,
	})
		.then((campingVendor) => {
			if (campingVendor) {
				return campingVendor;
			} else {
				throw new Error("Camping Vendor not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one Camping Package
export const deleteCampingVendor = async (vendorId) => {
	return await CampingVendorModel.findByIdAndDelete(vendorId)
		.then((campingVendor) => {
			if (campingVendor) {
				return campingVendor;
			} else {
				throw new Error("Camping Vendor not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search Camping Package titles or content
export const searchCampingVendor = async (searchTerm) => {
	return await CampingVendorModel.find({
		$or: [{ title: { $regex: searchTerm, $options: "i" } }, { content: { $regex: searchTerm, $options: "i" } }],
	})
		.then((campingVendors) => {
			return campingVendors;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
