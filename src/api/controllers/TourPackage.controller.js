import TourPackageService from "../services";

// Insert one Tour Pacakges

export const insertTourPackage = async (request, response, next) => {
	await TourPackageService.insertTourPackage(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get all Tour Pacakges

export const getAllTourPackages = async (request, response, next) => {
	await TourPackageService.getAllTourPackages("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Get one tour pacakges
export const getOneTourPackage = async (request, response, next) => {
	await TourPackageService.getOneTourPackage(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Update one tour package

export const updateTourPackage = async (request, response, next) => {
	await TourPackageService.updateTourPackage(request.params.id, request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Delete one tour pacakge
export const deleteTourPacakge = async (request, response, next) => {
	await TourPackageService.deleteTourPacakge(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

// Search Tour Pacakges
export const searchTourPacakges = async (request, response, next) => {
	await TourPackageService.searchTourPacakges(request.params.search)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
