import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import pool from '../database/database';

export const getFligthForBoardingId = async (req: Request, res: Response): Promise<any> => {
    try {
        const { boarding_Id } = req.body;
        let sqlString: string = `SELECT id_board, boardingId, origin, destination, airline, flight_num, origin_iata_code, origin_name, origin_latitude, origin_longitude, destination_iata_code, destination_name, destination_latitude, destination_longitude
	                               FROM deal.flightboard
                                  WHERE boardingId = '${boarding_Id}';`
        console.log('sqlString: ', sqlString)
        const response: QueryResult = await pool.query(sqlString);
        return res.status(200).json({
            message: 'Query succesfully',
            data: response.rows
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'Error in query',
            error: e
        })
    }
};

export const getDestAirportsList = async (req: Request, res: Response): Promise<any> => {
    try {
        let sqlString: string = `SELECT distinct destination_iata_code, destination_name, destination_latitude, destination_longitude
	                               FROM deal.flightboard
                               Order by destination_name;`
        console.log('sqlString: ', sqlString)
        const response: QueryResult = await pool.query(sqlString);
        return res.status(200).json({
            message: 'Query succesfully',
            data: response.rows
        });
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            message: 'Error in query',
            error: e
        })
    }
};