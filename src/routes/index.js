const {Router} =require("express");
const router = Router();

const { getAirlines,getAirports, getFlights,createAirlines, createAirports, createFlights, getArlinesById, getAirportsById, getFlightsById, deleteAirlines, deleteAirports, deleteFlights, updateAirlines,updateAirports,updateFlights } = require ("../controllers/airlines.controllers")



router.get("/airlines", getAirlines)
router.get("/airports", getAirports)
router.get("/flights", getFlights)


router.get("/airlines/:id", getArlinesById)
router.get("/airports/:id", getAirportsById)
router.get("/flights/:id", getFlightsById)

router.post("/create-airlines", createAirlines)
router.post("/create-airports", createAirports)
router.post("/create-flights", createFlights)


router.put("/update-airlines/:id",updateAirlines)
router.put("/update-airports/:id",updateAirports)
router.put("/update-flights/:id",updateFlights)

router.delete("/delete-airlines/:id", deleteAirlines)
router.delete("/delete-airports/:id", deleteAirports)
router.delete("/delete-flights/:id", deleteFlights)






module.exports = router;
