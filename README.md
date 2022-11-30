# Node.js Express & PostgreSQL: CRUD Rest APIs!


In this project I have developed an API in Node.js that allows to create,
update, delete and get the data about airports, airlines and flights.


### TECNOLOGIES

- Node js.
- Express js.
- PostgreSQL
- Railway-Deploy


### GET 

__- GET https://airlinesapp-production.up.railway.app/airlines
This route allows to obtain the data of all the airlines.

__- GET https://airlinesapp-production.up.railway.app/airports
This route allows obtaining data from all airports.

__- GET https://airlinesapp-production.up.railway.app/flights?limit=10&offset=0
This route obtains all the information of the flights, to consult it we must use LIMIT and OFFSET.

For example, this route shows us the first 10 flights.

### GET BY ID


In these routes we can obtain the information of one by his ID.

__-GET https://airlinesapp-production.up.railway.app/airlines/1

__-GET https://airlinesapp-production.up.railway.app/airports/1

__-GET https://airlinesapp-production.up.railway.app/flights/1



### POST

__-POST https://airlinesapp-production.up.railway.app/create-airlines

This route allows you to create an airlines.

The route will respond with a JSON of the following format:



{
     "IATA_CODE": "AR",
     "AIRLINE": "ARGENTINA"
    }




__-POST https://airlinesapp-production.up.railway.app/create-airports

This route allows you to create an airlines.
The route will respond with a JSON of the following format:



{
        "IATA_CODE": "ABE",
        "AIRPORT": "Lehigh Valley International Airport",
        "CITY": "Allentown",
        "STATE": "PA",
        "COUNTRY": "USA",
        "LATITUDE": "40.65236",
        "LONGITUDE": "-75.44040",
        
    }
    


__-POST https://airlinesapp-production.up.railway.app/create-flights

This route allows you to create an airlines.
The route will respond with a JSON of the following format:


 {
        "YEAR": "2022",
        "MONTH": "1",
        "DAY": "1",
        "DAY_OF_WEEK": "4",
        "AIRLINE": "AS",
        "FLIGHT_NUMBER": "98",
        "TAIL_NUMBER": "N407AS",
        "ORIGIN_AIRPORT": "ANC",
        "DESTINATION_AIRPORT": "SEA",
        "SCHEDULED_DEPARTURE": "0005",
        "DEPARTURE_TIME": "2354",
        "DEPARTURE_DELAY": "-11",
        "TAXI_OUT": "21",
        "WHEELS_OFF": "0015",
        "SCHEDULED_TIME": "205",
        "ELAPSED_TIME": "194",
        "AIR_TIME": "169",
        "DISTANCE": "1448",
        "WHEELS_ON": "0404",
        "TAXI_IN": "4",
        "SCHEDULED_ARRIVAL": "0430",
        "ARRIVAL_TIME": "0408",
        "ARRIVAL_DELAY": "-22",
        "DIVERTED": "0",
        "CANCELLED": "0",
        "CANCELLATION_REASON": "",
        "AIR_SYSTEM_DELAY": "",
        "SECURITY_DELAY": "",
        "AIRLINE_DELAY": "",
        "LATE_AIRCRAFT_DELAY": "",
        "WEATHER_DELAY": "",
     
    }


### PUT

These routes allow you to change the information we want through your id.

__-PUT https://airlinesapp-production.up.railway.app/update-airlines/1

__-PUT https://airlinesapp-production.up.railway.app/update-airports/1

__-PUT https://airlinesapp-production.up.railway.app/update-flights/1




### DELETE

These routes allow us to eliminate what we want through its id.

__-DELETE https://airlinesapp-production.up.railway.app/delete-airlines/1

__-DELETE https://airlinesapp-production.up.railway.app/delete-airports/1

__-DELETE https://airlinesapp-production.up.railway.app/delete-flights/1



 
