import VehicleService from "../services";

// Insert one vehicle
export const insertVehicle = async (request, response, next) => {
	await VehicleService.insertVehicle(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get all vehicle
export const getAllVehicles = async (request, response, next) => {
	await VehicleService.getAllVehicles("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one vehicle
export const getOneVehicle = async (request, response, next) => {
	await VehicleService.getOneVehicle(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update one vehicle
export const updateVehicle = async (request, response, next) => {
	await VehicleService.updateVehicle(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one vehicle
export const deleteVehicle = async (request, response, next) => {
	await VehicleService.deleteVehicle(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search vehicles
export const searchVehicles = async (request, response, next) => {
	await VehicleService.searchVehicles(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
