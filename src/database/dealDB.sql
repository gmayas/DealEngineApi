/*
-- Name data base

CREATE DATABASE "DealDB"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Mexico.1252'
    LC_CTYPE = 'Spanish_Mexico.1252'
    LOCALE_PROVIDER = 'libc'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Name schema


DROP SCHEMA deal
CREATE SCHEMA deal
    AUTHORIZATION postgres;

GRANT ALL ON SCHEMA deal TO PUBLIC;

-- Table: deal.flightboard

-- DROP TABLE IF EXISTS deal.flightboard;

CREATE TABLE IF NOT EXISTS deal.flightboard
(
    id_board serial,
    boardingId character varying(14),
	origin character varying(6),
    destination character varying(6),
    airline character varying(6),
    flight_num character varying(6),
    origin_iata_code character varying(6),
    origin_name character varying(255),
    origin_latitude real,
    origin_longitude real,
    destination_iata_code character varying(6),
    destination_name character varying(255),
    destination_latitude real,
    destination_longitude real,
    PRIMARY KEY (id_board)
);

create index I_flightboard_boardingId on deal.flightboard(boardingId);

-- FUNCTION: deal.creationid()

-- DROP FUNCTION IF EXISTS deal.creationid();

CREATE OR REPLACE FUNCTION deal.creationid(
	)
    RETURNS character varying
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
AS $BODY$
DECLARE 
 	 creation_id varchar(30);
 
	BEGIN
           
      SELECT trunc(random() * 99999999 + 10000000) INTO creation_id;
      RETURN creation_id;

	END;
$BODY$;

ALTER FUNCTION deal.creationid()
    OWNER TO postgres;
