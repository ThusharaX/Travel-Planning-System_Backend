import { Router } from "express";
import controller from "../controllers";

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
router.post("/hotel-package/", controller.insertHotelPackage); // insert one hotel package
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

export default router;
