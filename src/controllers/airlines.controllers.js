
const pool = require("../database")



//GET
const getAirlines = async (req, res) => {
    const response = await pool.query("SELECT * FROM airlines");
    res.status(200).json(response.rows)
}

const getAirports = async (req, res) => {
    const response = await pool.query("SELECT * FROM airports");
    res.status(200).json(response.rows)
}

const getFlights = async (req, res) => {

    const { limit, offset } = req.query
    const response = await pool.query(`SELECT * FROM flights LIMIT ${limit} OFFSET ${offset}`);

    res.status(200).json(response.rows)
}


//POST
const createAirlines = async (req, res) => {

    const { IATA_CODE, AIRLINE } = req.body;
    const response = await pool.query("INSERT INTO airlines (IATA_CODE, AIRLINE) VALUES ($1, $2)", [IATA_CODE, AIRLINE]);
    res.json({
        message: "AIRLINE created",
        body: {
            airlines: { IATA_CODE, AIRLINE }
        }
    })

}

const createAirports = async (req, res) => {

    const { IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE, LONGITUDE } = req.body;
    const response = await pool.query("INSERT INTO airports (IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE, LONGITUDE ) VALUES ($1, $2, $3, $4, $5, $6, $7)", [IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE, LONGITUDE]);
    res.json({
        message: "Airport created",
        body: {
            airports: { IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE, LONGITUDE }
        }
    })

}

const createFlights = async (req, res) => {

    const {
        YEAR,
        MONTH,
        DAY,
        DAY_OF_WEEK,
        AIRLINE,
        FLYGHT_NUMBER,
        TAIL_NUMBER,
        ORIGIN_AIRPORT,
        DESTINATION_AIRPORT,
        SCHEDULED_DEPARTURE,
        DEPARTURE_TIME,
        DEPARTURE_DELAY,
        TAXI_OUT,
        WHEELS_OFF,
        SCHEDULED_TIME,
        ELAPSED_TIME,
        AIR_TIME,
        DISTANCE,
        WHEELS_ON,
        TAXI_IN,
        SCHEDULED_ARRIVAL,
        ARRIVAL_TIME,
        ARRIVAL_DELAY,
        DIVERTED,
        CANCELLED,
        CANCELLATION_REASON,
        AIR_SYSTEM_DELAY,
        SECURITY_DELAY,
        AIRLINE_DELAYDECIMAL,
        LATE_AIRCRAFT_DELAY,
        WEATHER_DELAY } = req.body;

    const response = await pool.query("INSERT INTO flights (YEAR,MONTH,DAY,DAY_OF_WEEK,AIRLINE,FLYGHT_NUMBER,TAIL_NUMBER,ORIGIN_AIRPORT,DESTINATION_AIRPORT,SCHEDULED_DEPARTURE,DEPARTURE_TIME,DEPARTURE_DELAY,TAXI_OUT,WHEELS_OFF,SCHEDULED_TIME,ELAPSED_TIME,AIR_TIME,DISTANCE,WHEELS_ON,TAXI_IN,SCHEDULED_ARRIVAL,ARRIVAL_TIME,ARRIVAL_DELAY,DIVERTED,CANCELLED,CANCELLATION_REASON,AIR_SYSTEM_DELAY,SECURITY_DELAY,AIRLINE_DELAYDECIMAL,LATE_AIRCRAFT_DELAY,WEATHER_DELAY) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31)",
        [YEAR,
            MONTH,
            DAY,
            DAY_OF_WEEK,
            AIRLINE,
            FLYGHT_NUMBER,
            TAIL_NUMBER,
            ORIGIN_AIRPORT,
            DESTINATION_AIRPORT,
            SCHEDULED_DEPARTURE,
            DEPARTURE_TIME,
            DEPARTURE_DELAY,
            TAXI_OUT,
            WHEELS_OFF,
            SCHEDULED_TIME,
            ELAPSED_TIME,
            AIR_TIME,
            DISTANCE,
            WHEELS_ON,
            TAXI_IN,
            SCHEDULED_ARRIVAL,
            ARRIVAL_TIME,
            ARRIVAL_DELAY,
            DIVERTED,
            CANCELLED,
            CANCELLATION_REASON,
            AIR_SYSTEM_DELAY,
            SECURITY_DELAY,
            AIRLINE_DELAYDECIMAL,
            LATE_AIRCRAFT_DELAY,
            WEATHER_DELAY]);

    res.json({
        message: "Flights added succesfully",
        body: {
            flights: {
                YEAR,
                MONTH,
                DAY,
                DAY_OF_WEEK,
                AIRLINE,
                FLYGHT_NUMBER,
                TAIL_NUMBER,
                ORIGIN_AIRPORT,
                DESTINATION_AIRPORT,
                SCHEDULED_DEPARTURE,
                DEPARTURE_TIME,
                DEPARTURE_DELAY,
                TAXI_OUT,
                WHEELS_OFF,
                SCHEDULED_TIME,
                ELAPSED_TIME,
                AIR_TIME,
                DISTANCE,
                WHEELS_ON,
                TAXI_IN,
                SCHEDULED_ARRIVAL,
                ARRIVAL_TIME,
                ARRIVAL_DELAY,
                DIVERTED,
                CANCELLED,
                CANCELLATION_REASON,
                AIR_SYSTEM_DELAY,
                SECURITY_DELAY,
                AIRLINE_DELAYDECIMAL,
                LATE_AIRCRAFT_DELAY,
                WEATHER_DELAY
            }
        }
    })

}

//ID

const getArlinesById = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM airlines WHERE id= $1", [id]);
    res.json(response.rows)

}
const getAirportsById = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM airports WHERE id= $1", [id]);
    res.json(response.rows)

}
const getFlightsById = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM flights WHERE id= $1", [id]);
    res.json(response.rows)

}

//DELETE

const deleteAirlines = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query("DELETE FROM airlines WHERE id= $1", [id]);
    res.json(`airlines ${id} deleted successffully`)   

}
const deleteAirports = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query("DELETE FROM airports WHERE id= $1", [id]);
    res.json(`airports ${id} deleted successffully`)  
}
const deleteFlights = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query("DELETE FROM flights WHERE id= $1", [id]);
    res.json(`Fligths ${id} deleted successffully`)  

}


//UPDATE

const updateAirlines = async (req, res) => {
    const id = req.params.id;
    const { IATA_CODE, AIRLINE } = req.body;
    const response = await pool.query( "UPDATE airlines SET IATA_CODE = $1, AIRLINE = $2 WHERE id= $3", [IATA_CODE, AIRLINE, id])

    res.send("airlines updated");
}

const updateAirports = async (req, res) => {
    const id = req.params.id;
    const { IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE, LONGITUDE } = req.body;  
    const response = await pool.query("UPDATE airports SET IATA_CODE = $1, AIRPORT = $2, CITY = $3, STATE = $4, COUNTRY = $5, LATITUDE = $6, LONGITUDE = $7 WHERE id = $8", [IATA_CODE, AIRPORT, CITY, STATE, COUNTRY, LATITUDE, LONGITUDE, id]);
       
    res.send("airports updated")

}

const updateFlights = async (req, res) => {
    const id = req.params.id;
    const {
        YEAR,
        MONTH,
        DAY,
        DAY_OF_WEEK,
        AIRLINE,
        FLYGHT_NUMBER,
        TAIL_NUMBER,
        ORIGIN_AIRPORT,
        DESTINATION_AIRPORT,
        SCHEDULED_DEPARTURE,
        DEPARTURE_TIME,
        DEPARTURE_DELAY,
        TAXI_OUT,
        WHEELS_OFF,
        SCHEDULED_TIME,
        ELAPSED_TIME,
        AIR_TIME,
        DISTANCE,
        WHEELS_ON,
        TAXI_IN,
        SCHEDULED_ARRIVAL,
        ARRIVAL_TIME,
        ARRIVAL_DELAY,
        DIVERTED,
        CANCELLED,
        CANCELLATION_REASON,
        AIR_SYSTEM_DELAY,
        SECURITY_DELAY,
        AIRLINE_DELAYDECIMAL,
        LATE_AIRCRAFT_DELAY,
        WEATHER_DELAY,
         } = req.body;

        const response = await pool.query("UPDATE flights SET YEAR = $1, MONTH = $2, DAY = $3, DAY_OF_WEEK = $4,AIRLINE = $5,FLYGHT_NUMBER = $6, TAIL_NUMBER = $7, ORIGIN_AIRPORT = $8 , DESTINATION_AIRPORT = $9, SCHEDULED_DEPARTURE = $10, DEPARTURE_TIME = $11, DEPARTURE_DELAY = $12 ,TAXI_OUT = $13 ,WHEELS_OFF = $14 ,SCHEDULED_TIME = $15, ELAPSED_TIME = $16, AIR_TIME = $17, DISTANCE = $18,WHEELS_ON = $19, TAXI_IN = $20, SCHEDULED_ARRIVAL= $21, ARRIVAL_TIME = $22 , ARRIVAL_DELAY = $23 , DIVERTED = $24, CANCELLED = $25,CANCELLATION_REASON = $26, AIR_SYSTEM_DELAY = $27, SECURITY_DELAY = $28, AIRLINE_DELAYDECIMAL = $29,LATE_AIRCRAFT_DELAY = $30, WEATHER_DELAY = $31, id = $32",
        [YEAR,
            MONTH,
            DAY,
            DAY_OF_WEEK,
            AIRLINE,
            FLYGHT_NUMBER,
            TAIL_NUMBER,
            ORIGIN_AIRPORT,
            DESTINATION_AIRPORT,
            SCHEDULED_DEPARTURE,
            DEPARTURE_TIME,
            DEPARTURE_DELAY,
            TAXI_OUT,
            WHEELS_OFF,
            SCHEDULED_TIME,
            ELAPSED_TIME,
            AIR_TIME,
            DISTANCE,
            WHEELS_ON,
            TAXI_IN,
            SCHEDULED_ARRIVAL,
            ARRIVAL_TIME,
            ARRIVAL_DELAY,
            DIVERTED,
            CANCELLED,
            CANCELLATION_REASON,
            AIR_SYSTEM_DELAY,
            SECURITY_DELAY,
            AIRLINE_DELAYDECIMAL,
            LATE_AIRCRAFT_DELAY,
            WEATHER_DELAY,
             id]);

    res.json("Flights updated")
}





module.exports = {
    getAirlines,
     getAirports, 
     getFlights, 
     createAirlines, 
     createAirports, 
     createFlights,
     getArlinesById,
     getAirportsById,
     getFlightsById,
     deleteAirlines,
     deleteAirports,
     deleteFlights, 
     updateAirlines,
     updateAirports,
     updateFlights
}