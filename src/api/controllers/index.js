import {
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,
} from "./Sample.controller";

import {
	insertHotelPackage,
	getAllHotelPackages,
	getOneHotelPackage,
	updateHotelPackage,
	deleteHotelPackage,
	searchHotelPackages,
} from "./HotelPackage.controller";

export default {
	//Sample Controllers
	insertSample,
	getAllSamples,
	getOneSample,
	updateSample,
	deleteSample,
	searchSamples,

	// Hotel Package Controllers
	insertHotelPackage,
	getAllHotelPackages,
	getOneHotelPackage,
	updateHotelPackage,
	deleteHotelPackage,
	searchHotelPackages,
};
