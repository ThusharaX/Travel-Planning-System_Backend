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

// Hotel Packages endpoints
router.post("/hotel-package/", controller.insertHotelPackage); // insert one hotel package
router.get("/hotel-package/", controller.getAllHotelPackages); // get all hotel packages
router.get("/hotel-package/:id", controller.getOneHotelPackage); // get one hotel package
router.put("/hotel-package/:id", controller.updateHotelPackage); // update one hotel package
router.delete("/hotel-package/:id", controller.deleteHotelPackage); // delete one hotel package
router.get("/hotel-package/search/:search", controller.searchHotelPackages); // search hotel packages

// Tour Pacakges endpoints
router.post("/tour-package/", controller.insertTourPackage);
router.get("/tour-package/", controller.getAllTourPackages);
router.get("/tour-package/:id", controller.getOneTourPackage);
router.put("/tour-package/:id", controller.updateTourPackage);
router.delete("/tour-package/:id", controller.deleteTourPacakge);
router.get("/tour-package/search/:search", controller.searchTourPacakges);

export default router;
