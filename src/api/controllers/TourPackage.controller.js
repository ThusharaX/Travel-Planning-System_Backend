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
	await TourPackageService.getAllTourPackages("users").then(async (data) => {
		request.handleResponse.successRespond(response)(data);
		next();
	});
};
