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



````js
{
     "iata_code": "AR",
     "airline": "ARGENTINA"

    }
````




__-POST https://airlinesapp-production.up.railway.app/create-airports

This route allows you to create an airlines.
The route will respond with a JSON of the following format:




````js
{ 
        "iata_code": "abe",
        "airport": "abe Airport",
        "city": "Allentown",
        "state": "PA",
        "country": "USA",
        "latitude": "40.65236",
        "longitude": "-75.44040"
    }
  ````  



__-POST https://airlinesapp-production.up.railway.app/create-flights

This route allows you to create an airlines.
The route will respond with a JSON of the following format:




````js
 {
  "year": "2015",
        "month": "1",
        "day": "1",
        "day_of_week": "4",
        "airline": "as",
        "flight_number": "98",
        "tail_number": "n407as",
        "origin_airport": "anc",
        "destination_airport": "sea",
        "scheduled_departure": "0005",
        "departure_time": "2354",
        "departure_delay": "-11",
        "taxi_out": "21",
        "wheels_off": "0015",
        "scheduled_time": "205",
        "elapsed_time": "194",
        "air_time": "169",
        "distance": "1448",
        "wheels_on": "0404",
        "taxi_in": "4",
        "scheduled_arrival": "0430",
        "arrival_time": "0408",
        "arrival_delay": "-22",
        "diverted": "0",
        "cancelled": "0",
        "cancellation_reason": "undefined",
        "air_system_delay": "undefined",
        "security_delay": "undefined",
        "airline_delay": "undefined",
        "late_aircraft_delay": "undefined",
        "weather_delay": "undefined"
    }
 ```` 



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



 
