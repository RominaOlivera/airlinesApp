CREATE DATABASE airplanes;

CREATE TABLE airlines(
    id SERIAL PRIMARY KEY,
    iata_code VARCHAR(5),
    airline VARCHAR(40)
);


INSERT INTO airlines (iata_code, airline) VALUES
('UA','United Air Lines Inc.'),
('AA' ,'American Airlines Inc.'),
('US' , 'US Airways Inc.'),
('F9' , 'Frontier Airlines Inc.'),
('B6' , 'JetBlue Airways'),
('OO' , 'Skywest Airlines Inc.'),
('AS', 'Alaska Airlines Inc.'),
('NK' ,'Spirit Air Lines'),
('WN', 'Southwest Airlines Co.'),
('DL' , 'Delta Air Lines Inc.'),
('EV' , 'Atlantic Southeast Airlines'),
('HA' , 'Hawaiian Airlines Inc.'),
('MQ', 'American Eagle Airlines Inc.'),
('VX', 'Virgin America');


CREATE TABLE airports(
    id SERIAL PRIMARY KEY,
    iata_code VARCHAR(5),
    airport VARCHAR(255),
    city VARCHAR (255),
    state VARCHAR (255),
    country VARCHAR (255),
    latitude  DECIMAL,
    longitude DECIMAL
);



CREATE TABLE airports(
    iata_code VARCHAR(5),
    airport VARCHAR(255),
    city VARCHAR (255),
    state VARCHAR (255),
    country VARCHAR (255),
    latitude  DECIMAL,
    longitude DECIMAL
);

CREATE TABLE flights(
id SERIAL PRIMARY KEY,
YEAR INTEGER,
MONTH INTEGER,
DAY INTEGER,
DAY_OF_WEEK INTEGER,
AIRLINE  VARCHAR(5),
FLIGHT_NUMBER VARCHAR(10),
TAIL_NUMBER  VARCHAR(10),
ORIGIN_AIRPORT VARCHAR(10),
DESTINATION_AIRPORT VARCHAR(5),
SCHEDULED_DEPARTURE DECIMAL,
DEPARTURE_TIME DECIMAL,
DEPARTURE_DELAY DECIMAL,
TAXI_OUT DECIMAL,
WHEELS_OFF DECIMAL,
SCHEDULED_TIME DECIMAL,
ELAPSED_TIME DECIMAL,
AIR_TIME DECIMAL,
DISTANCE DECIMAL,
WHEELS_ON DECIMAL,
TAXI_IN DECIMAL,
SCHEDULED_ARRIVAL DECIMAL,
ARRIVAL_TIME DECIMAL,
ARRIVAL_DELAY DECIMAL,
DIVERTED DECIMAL,
CANCELLED DECIMAL,
CANCELLATION_REASON VARCHAR(5),
AIR_SYSTEM_DELAY DECIMAL,
SECURITY_DELAY DECIMAL,
AIRLINE_DELAYDECIMAL DECIMAL,
LATE_AIRCRAFT_DELAY DECIMAL,
WEATHER_DELAY DECIMAL
);
