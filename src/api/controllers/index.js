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
	getAllHotelPackagesByHotelOwnerId,
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
	searchTourPacakges,
} from "./TourPackage.controller";

import {
	getHotelOwnerDetails,
	loginHotelOwner,
	registerHotelOwner,
	editHotelOwnerDetails,
} from "./HotelOwner.controller";

import {
	loginTourGuide,
	registerTourGuide,
	getAllTourGuides,
	getOneTourGuide,
	updateTourGuide,
	deleteTourGuide,
	searchTourGuide,
} from "./TourGuide.controller";

import {
	loginCampingVendor,
	registerCampingVendor,
	getAllCampingVendors,
	getOneCampingVendor,
	updateCampingVendor,
	deleteCampingVendor,
	searchCampingVendors,
} from "./CampingVendor.controller";

import { loginVehicleOwner, registerVehicleOwner } from "./VehicleOwner.controller";
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
	getAllHotelPackagesByHotelOwnerId,

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
	searchTourPacakges,

	// Hotel Owner Controller
	getHotelOwnerDetails,
	loginHotelOwner,
	registerHotelOwner,
	editHotelOwnerDetails,

	// Tour Guide Controller
	loginTourGuide,
	registerTourGuide,
	getAllTourGuides,
	getOneTourGuide,
	updateTourGuide,
	deleteTourGuide,
	searchTourGuide,

	// Camping Vendor Controller
	loginCampingVendor,
	registerCampingVendor,

	// Vehicle Owner Controller
	registerVehicleOwner,
	loginVehicleOwner,
	getAllCampingVendors,
	getOneCampingVendor,
	updateCampingVendor,
	deleteCampingVendor,
	searchCampingVendors,
};
