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
	getAllHotelPackagesByHotelOwnerId,
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
} from "./TourPackage.service";

import {
	getHotelOwnerDetails,
	authenticateHotelOwner,
	insertHotelOwner,
	editHotelOwnerDetails,
} from "./HotelOwner.service";

import { getAdminDetails, authenticateAdmin, insertAdmin, editAdminDetails } from "./Admin.service";

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

import {
	authenticateVehicleOwner,
	insertVehicleOwner,
	getAllVehicleOwners,
	getOneVehicleOwner,
	updateVehicleOwner,
	deleteVehicleOwner,
	searchVehicleOwner,
} from "./VehicleOwner.Service";

import {
	authenticateCustomer,
	insertCustomer,
	getAllCustomers,
	getOneCustomer,
	updateCustomer,
	deleteCustomer,
	searchCustomer,
} from "./Customer.Service";

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
	getAllHotelPackagesByHotelOwnerId,

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

	// Hotel Owner Service
	getHotelOwnerDetails,
	authenticateHotelOwner,
	insertHotelOwner,
	editHotelOwnerDetails,

	// Hotel Owner Service
	getAdminDetails,
	authenticateAdmin,
	insertAdmin,
	editAdminDetails,

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
	getAllCampingVendors,
	getOneCampingVendor,
	updateCampingVendor,
	deleteCampingVendor,
	searchCampingVendor,

	// Vehicle Owner Services
	authenticateVehicleOwner,
	insertVehicleOwner,
	getAllVehicleOwners,
	getOneVehicleOwner,
	updateVehicleOwner,
	deleteVehicleOwner,
	searchVehicleOwner,

	// Customer
	authenticateCustomer,
	insertCustomer,
	getAllCustomers,
	getOneCustomer,
	updateCustomer,
	deleteCustomer,
	searchCustomer,
};
