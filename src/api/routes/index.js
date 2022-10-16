import { Router } from "express";
import controller from "../controllers";
import middleware from "../middleware";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Travel Planning System");
	next();
});

// Sample endpoints
router.post("/sample/", controller.insertSample); // insert one sample
router.get("/sample/", controller.getAllSamples); // get all samples
router.get("/sample/:id", controller.getOneSample); // get one sample
router.put("/sample/:id", controller.updateSample); // update one sample
router.delete("/sample/:id", controller.deleteSample); // delete one sample
router.get("/sample/search/:search", controller.searchSamples); // search samples

// vehicle endpoints
router.post("/vehicle/", controller.insertVehicle); // insert one vehicle
router.get("/vehicle/", controller.getAllVehicles); // get all vehicles
router.get("/vehicle/:id", controller.getOneVehicle); // get one vehicles
router.put("/vehicle/:id", controller.updateVehicle); // update one vehicles
router.delete("/vehicle/:id", controller.deleteVehicle); // delete one vehicles
router.get("/vehicle/search/:search", controller.searchVehicles); // search vehicles

// Hotel Packages endpoints
router.post("/hotel-package/", middleware.hotel_owner_auth, controller.insertHotelPackage); // insert one hotel package
router.get("/hotel-package/", controller.getAllHotelPackages); // get all hotel packages
router.get("/hotel-package/:id", controller.getOneHotelPackage); // get one hotel package
router.put("/hotel-package/:id", controller.updateHotelPackage); // update one hotel package
router.delete("/hotel-package/:id", controller.deleteHotelPackage); // delete one hotel package
router.get("/hotel-package/search/:search", controller.searchHotelPackages); // search hotel packages

// Camping Packages endpoints
router.post("/camping-package/", controller.insertCampingPackage); // insert one Camping package
router.get("/camping-package/", controller.getAllCampingPackages); // get all Camping packages
router.get("/camping-package/:id", controller.getOneCampingPackage); // get one Campingl package
router.put("/camping-package/:id", controller.updateCampingPackage); // update one Camping package
router.delete("/camping-package/:id", controller.deleteCampingPackage); // delete one Camping package
router.get("/camping-package/search/:search", controller.searchCampingPackages); // search Camping packages

// Tour Pacakges endpoints
router.post("/tour-package/", controller.insertTourPackage);
router.get("/tour-package/", controller.getAllTourPackages);
router.get("/tour-package/:id", controller.getOneTourPackage);
router.put("/tour-package/:id", controller.updateTourPackage);
router.delete("/tour-package/:id", controller.deleteTourPacakge);
router.get("/tour-package/search/:search", controller.searchTourPacakges);

// Hotel Owner endpoints
router.get("/hotel-owner/:id", controller.getHotelOwnerDetails);
router.post("/hotel-owner/login", controller.loginHotelOwner);
router.post("/hotel-owner/register", controller.registerHotelOwner);

// Tour Guide endpoints
router.post("/tour-guide/register/", controller.registerTourGuide); // Register Tour Guide
router.post("/tour-guide/login/", controller.loginTourGuide); // Login Tour Guide
router.get("/tour-guide/", controller.getAllTourGuides); // Get all tour guide
router.get("/tour-guide/:id", controller.getOneTourGuide); // get one tour guide
router.put("/tour-guide/:id", controller.updateTourGuide); // edit tour guide
router.delete("/tour-guide/:id", controller.deleteTourGuide); // delete tour guide
router.get("/tour-guide/search/:search", controller.searchTourGuide); // search tour guide

// Camping Vendor endpoints
router.post("/camping-vendor/register/", controller.registerCampingVendor);
router.post("/camping-vendor/login/", controller.loginCampingVendor);
router.get("/camping-vendor/", controller.getAllCampingVendors); // get all Camping packages
router.get("/camping-vendor/:id", controller.getOneCampingVendor); // get one Campingl package
router.put("/camping-vendor/:id", controller.updateCampingVendor); // update one Camping package
router.delete("/camping-vendor/:id", controller.deleteCampingVendor); // delete one Camping package
router.get("/camping-vendor/search/:search", controller.searchCampingVendors); // search Camping packages

// Vehicle Owner Endpoints
router.post("/vehicle-owner/register/", controller.registerVehicleOwner);
router.post("/vehicle-owner/login/", controller.loginVehicleOwner);
router.get("/vehicle-owner/", controller.getAllVehicleOwners);
router.get("/vehicle-owner/:id", controller.getOneVehicleOwner);
router.put("/vehicle-owner/:id", controller.updateVehicleOwner);
router.delete("/vehicle-owner/:id", controller.deleteVehicleOwner);
router.get("/vehicle-owner/search/:search", controller.searchVehicleOwner);

// Customer Endpoints
router.post("/customer/register/", controller.registerCustomer);
router.get("/customer/", controller.getAllCustomers);
router.get("/customer/:id", controller.getOneCustomer);
router.put("/customer/:id", controller.updateCustomer);
router.delete("/customer/:id", controller.deleteCustomer);
router.get("/customer/search/:search", controller.searchCustomer);

export default router;
