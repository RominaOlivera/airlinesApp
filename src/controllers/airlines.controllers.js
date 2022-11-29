// const { Pool } = require("pg")
const{DATABASE_URL} = process.env
const {pool} = require("../database")



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

    const { iata_code, airline } = req.body;
    const response = await pool.query("INSERT INTO airlines (iata_code, airline) VALUES ($1, $2)", [iata_code, airline]);
    res.json({
        message: "Airline created",
        body: {
            airlines: { iata_code, airline }
        }
    })

}

const createAirports = async (req, res) => {

    const { iata_code, airport, city, state, country, latitude, longitude } = req.body;
    const response = await pool.query("INSERT INTO airports (iata_code, airport, city, state, country, latitude, longitude ) VALUES ($1, $2, $3, $4, $5, $6, $7)", [iata_code, airport, city, state, country, latitude, longitude]);
    res.json({
        message: "Airports created",
        body: {
            airports: { iata_code, airport, city, state, country, latitude, longitude }
        }
    })

}

const createFlights = async (req, res) => {

    const {
        year,
        month,
        day,
        day_of_week,
        airline,
        flight_number,
        tail_number,
        origin_airport,
        destination_airport,
        scheduled_departure,
        departure_time,
        departure_delay,
        taxi_out,
        wheels_off,
        scheduled_time,
        elapsed_time,
        air_time,
        distance,
        wheels_on,
        taxi_in,
        scheduled_arrival,
        arrival_time,
        arrival_delay,
        diverted,
        cancelled,
        cancellation_reason,
        air_system_delay,
        security_delay,
        airline_delaydecimal,
        late_aircraft_delay,
        weather_delay } = req.body;

    const response = await pool.query("INSERT INTO flights (year,month,day,day_of_week,airline,flight_number,tail_number,origin_airport,destination_airport,scheduled_departure,departure_time,departure_delay,taxi_out,wheels_off,scheduled_time,elapsed_time,air_time,distance,wheels_on,taxi_in,scheduled_arrival,arrival_time,arrival_delay,diverted,cancelled,cancellation_reason,air_system_delay,security_delay,airline_delaydecimal,late_aircraft_delay,weather_delay) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31)",
        [year,
            month,
            day,
            day_of_week,
            airline,
            flight_number,
            tail_number,
            origin_airport,
            destination_airport,
            scheduled_departure,
            departure_time,
            departure_delay,
            taxi_out,
            wheels_off,
            scheduled_time,
            elapsed_time,
            air_time,
            distance,
            wheels_on,
            taxi_in,
            scheduled_arrival,
            arrival_time,
            arrival_delay,
            diverted,
            cancelled,
            cancellation_reason,
            air_system_delay,
            security_delay,
            airline_delaydecimal,
            late_aircraft_delay,
            weather_delay]);

    res.json({
        message: "Flights added succesfully",
        body: {
            flights: {
                year,
                month,
                day,
                day_of_week,
                airline,
                flight_number,
                tail_number,
                origin_airport,
                destination_airport,
                scheduled_departure,
                departure_time,
                departure_delay,
                taxi_out,
                wheels_off,
                scheduled_time,
                elapsed_time,
                air_time,
                distance,
                wheels_on,
                taxi_in,
                scheduled_arrival,
                arrival_time,
                arrival_delay,
                diverted,
                cancelled,
                cancellation_reason,
                air_system_delay,
                security_delay,
                airline_delaydecimal,
                late_aircraft_delay,
                weather_delay
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
    res.json(`Airlines ${id} deleted successffully`)   

}
const deleteAirports = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query("DELETE FROM airports WHERE id= $1", [id]);
    res.json(`Airports ${id} deleted successffully`)  
}
const deleteFlights = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query("DELETE FROM flights WHERE id= $1", [id]);
    res.json(`Fligths ${id} deleted successffully`)  

}


//UPDATE

const updateAirlines = async (req, res) => {
    const id = req.params.id;
    const { iata_code, airline } = req.body;
    const response = await pool.query( "UPDATE airlines SET iata_code = $1, airline = $2 WHERE id= $3", [iata_code, airline, id])

    res.send("Airlines updated");
}

const updateAirports = async (req, res) => {
    const id = req.params.id;
    const { iata_code, airport, city, state, country, latitude, longitude } = req.body;  
    const response = await pool.query("UPDATE airports SET iata_code = $1, airport = $2, city = $3, state = $4, country = $5, latitude = $6, longitude = $7 WHERE id = $8", [iata_code, airport, city, state, country, latitude, longitude, id]);
       
    res.send("Airports updated")

}

const updateFlights = async (req, res) => {
    const id = req.params.id;
    const {
        year,
        month,
        day,
        day_of_week,
        airline,
        flight_number,
        tail_number,
        origin_airport,
        destination_airport,
        scheduled_departure,
        departure_time,
        departure_delay,
        taxi_out,
        wheels_off,
        scheduled_time,
        elapsed_time,
        air_time,
        distance,
        wheels_on,
        taxi_in,
        scheduled_arrival,
        arrival_time,
        arrival_delay,
        diverted,
        cancelled,
        cancellation_reason,
        air_system_delay,
        security_delay,
        airline_delaydecimal,
        late_aircraft_delay,
        weather_delay,
         } = req.body;

        const response = await pool.query("UPDATE flights SET year = $1, month = $2, day = $3, day_of_week = $4,airline = $5,flight_number = $6, tail_number = $7, origin_airport = $8 , destination_airport = $9, scheduled_departure = $10, departure_time = $11, departure_delay = $12 ,taxi_out = $13 ,wheels_off = $14 ,scheduled_time = $15, elapsed_time = $16, air_time = $17, distance = $18,wheels_on = $19, taxi_in = $20, scheduled_arrival= $21, arrival_time = $22 , arrival_delay = $23 , diverted = $24, cancelled = $25,cancellation_reason = $26, air_system_delay = $27, security_delay = $28, airline_delaydecimal = $29,late_aircraft_delay = $30, weather_delay = $31, id = $32",
        [year,
            month,
            day,
            day_of_week,
            airline,
            flight_number,
            tail_number,
            origin_airport,
            destination_airport,
            scheduled_departure,
            departure_time,
            departure_delay,
            taxi_out,
            wheels_off,
            scheduled_time,
            elapsed_time,
            air_time,
            distance,
            wheels_on,
            taxi_in,
            scheduled_arrival,
            arrival_time,
            arrival_delay,
            diverted,
            cancelled,
            cancellation_reason,
            air_system_delay,
            security_delay,
            airline_delaydecimal,
            late_aircraft_delay,
            weather_delay,
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