import HotelPackageService from "../services";

// Insert one hotel package
export const insertHotelPackage = async (request, response, next) => {
	await HotelPackageService.insertHotelPackage(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get all hotel packages
export const getAllHotelPackages = async (request, response, next) => {
	await HotelPackageService.getAllHotelPackages("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one hotel package
export const getOneHotelPackage = async (request, response, next) => {
	await HotelPackageService.getOneHotelPackage(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update one hotel package
export const updateHotelPackage = async (request, response, next) => {
	await HotelPackageService.updateHotelPackage(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one hotel package
export const deleteHotelPackage = async (request, response, next) => {
	await HotelPackageService.deleteHotelPackage(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search hotel packages
export const searchHotelPackages = async (request, response, next) => {
	await HotelPackageService.searchHotelPackages(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
