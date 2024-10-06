import { Router } from 'express';
const router = Router();
//
router.get('/', (req, res) => {
    res.send({ Response: "DealEngineApi for Deal Engine working", By: "© 2024 Copyright: GMayaS C:\>Desarrollo en Sistemas." }).status(200);
});
// 
export default router;//