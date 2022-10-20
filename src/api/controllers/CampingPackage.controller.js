import CampingPackageService from "../services";

// Insert one CampingPackage
export const insertCampingPackage = async (request, response, next) => {
	await CampingPackageService.insertCampingPackage(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get all CampingPackage
export const getAllCampingPackages = async (request, response, next) => {
	await CampingPackageService.getAllCampingPackages("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one CampingPackage
export const getOneCampingPackage = async (request, response, next) => {
	await CampingPackageService.getOneCampingPackage(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update one CampingPackage
export const updateCampingPackage = async (request, response, next) => {
	await CampingPackageService.updateCampingPackage(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one CampingPackage
export const deleteCampingPackage = async (request, response, next) => {
	await CampingPackageService.deleteCampingPackage(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search CampingPackage
export const searchCampingPackages = async (request, response, next) => {
	await CampingPackageService.searchCampingPackages(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
