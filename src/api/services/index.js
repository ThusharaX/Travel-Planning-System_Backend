import { insertSample, getAllSamples, getOneSample, updateSample, deleteSample, searchSamples } from "./Sample.service";
import {
	insertVehicle,
	getAllVehicles,
	getOneVehicle,
	updateVehicle,
	deleteVehicle,
	searchVehicles,
} from "./Vehicle.service";

import {
	insertHotelPackage,
	getAllHotelPackages,
	getOneHotelPackage,
	updateHotelPackage,
	deleteHotelPackage,
	searchHotelPackages,
} from "./HotelPackage.service";

import {
	insertCampingPackage,
	getAllCampingPackages,
	getOneCampingPackage,
	updateCampingPackage,
	deleteCampingPackage,
	searchCampingPackages,
} from "./CampingPackageService";

import {
	insertTourPackage,
	getAllTourPackages,
	getOneTourPackage,
	updateTourPackage,
	deleteTourPacakge,
} from "./TourPackage.service";

export default {
	// Sample services
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,

	//vehicle Services
	insertVehicle,
	getAllVehicles,
	getOneVehicle,
	updateVehicle,
	deleteVehicle,
	searchVehicles,

	// Hotel Package services
	insertHotelPackage,
	getAllHotelPackages,
	getOneHotelPackage,
	updateHotelPackage,
	deleteHotelPackage,
	searchHotelPackages,

	// Camping Package services
	insertCampingPackage,
	getAllCampingPackages,
	getOneCampingPackage,
	updateCampingPackage,
	deleteCampingPackage,
	searchCampingPackages,

	// Tour Package Service
	insertTourPackage,
	getAllTourPackages,
	getOneTourPackage,
	updateTourPackage,
	deleteTourPacakge,
};
