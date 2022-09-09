import {
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,
} from "./Sample.controller";

import {
	insertVehicle,
	getAllVehicles,
	getOneVehicle,
	updateVehicle,
	deleteVehicle,
	searchVehicles,
} from "./Vehicle.controller";

import {
	insertHotelPackage,
	getAllHotelPackages,
	getOneHotelPackage,
	updateHotelPackage,
	deleteHotelPackage,
	searchHotelPackages,
} from "./HotelPackage.controller";

import {
	insertCampingPackage,
	getAllCampingPackages,
	getOneCampingPackage,
	updateCampingPackage,
	deleteCampingPackage,
	searchCampingPackages,
} from "./CampingPackage.controller";

import {
	insertTourPackage,
	getAllTourPackages,
	getOneTourPackage,
	updateTourPackage,
	deleteTourPacakge,
} from "./TourPackage.controller";

export default {
	//Sample Controllers
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,

	//vehicle Controllers
	insertVehicle,
	getAllVehicles,
	getOneVehicle,
	updateVehicle,
	deleteVehicle,
	searchVehicles,

	// Hotel Package Controllers
	insertHotelPackage,
	getAllHotelPackages,
	getOneHotelPackage,
	updateHotelPackage,
	deleteHotelPackage,
	searchHotelPackages,

	// Camping Package Controllers
	insertCampingPackage,
	getAllCampingPackages,
	getOneCampingPackage,
	updateCampingPackage,
	deleteCampingPackage,
	searchCampingPackages,

	// Tour Package Controller
	insertTourPackage,
	getAllTourPackages,
	getOneTourPackage,
	updateTourPackage,
	deleteTourPacakge,
};
