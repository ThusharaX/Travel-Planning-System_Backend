import VehiclePackageService from "../services";

// Insert one vehicle package
export const insertVehiclePackage = async (request, response, next) => {
	await VehiclePackageService.insertVehiclePackage(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get all vehicle package
export const getAllVehiclePackages = async (request, response, next) => {
	await VehiclePackageService.getAllVehiclePackages("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one vehicle package
export const getOneVehiclePackage = async (request, response, next) => {
	await VehiclePackageService.getOneVehiclePackage(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update one vehicle package
export const updateVehiclePackage = async (request, response, next) => {
	await VehiclePackageService.updateVehiclePackage(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one vehicle package
export const deleteVehiclePackage = async (request, response, next) => {
	await VehiclePackageService.deleteVehiclePackage(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search vehicles package
export const searchVehiclesPackage = async (request, response, next) => {
	await VehiclePackageService.ssearchVehiclesPackage(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
