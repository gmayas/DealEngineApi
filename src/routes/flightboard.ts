import { Router } from 'express';
const router = Router();
//
import { getFligthForBoardingId } from '../controllers/flightboard.controller';
//
// getFligthForBoardingId
router.post('/getBoardingId', getFligthForBoardingId);
//
export default router;