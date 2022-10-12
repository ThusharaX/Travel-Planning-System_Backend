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
	searchTourPacakges,
	uploadImage,
} from "./TourPackage.service";

import { getHotelOwnerDetails, authenticateHotelOwner, insertHotelOwner } from "./HotelOwner.service";

import {
	authenticateTourGuide,
	insertTourGuide,
	getAllTourGuides,
	getOneTourGuide,
	updateTourGuide,
	deleteTourGuide,
	searchTourGuide,
} from "./TourGuide.service";

import {
	authenticateCampingVendor,
	insertCampingVendor,
	getAllCampingVendors,
	getOneCampingVendor,
	updateCampingVendor,
	deleteCampingVendor,
	searchCampingVendor,
} from "./CampingVendor.service";

import { authenticateVehicleOwner, insertVehicleOwner } from "./VehicleOwner.Service";

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

	// Tour Package Services
	insertTourPackage,
	getAllTourPackages,
	getOneTourPackage,
	updateTourPackage,
	deleteTourPacakge,
	searchTourPacakges,
	uploadImage,

	// Hotel Owner Service
	getHotelOwnerDetails,
	authenticateHotelOwner,
	insertHotelOwner,

	// Tour Guide Servvices
	authenticateTourGuide,
	insertTourGuide,
	getAllTourGuides,
	getOneTourGuide,
	updateTourGuide,
	deleteTourGuide,
	searchTourGuide,

	// Camping Vendor Services
	authenticateCampingVendor,
	insertCampingVendor,

	// Vehicle Owner Services
	authenticateVehicleOwner,
	insertVehicleOwner,
	getAllCampingVendors,
	getOneCampingVendor,
	updateCampingVendor,
	deleteCampingVendor,
	searchCampingVendor,
};
