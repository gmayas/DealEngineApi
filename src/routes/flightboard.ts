import { Router } from 'express';
const router = Router();
//
import { getDestAirportsList, getFligthForBoardingId } from '../controllers/flightboard.controller';
//
router.post('/getBoardingId', getFligthForBoardingId);
router.get('/getDestAirportsList', getDestAirportsList);
//
export default router;