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

export default router;
