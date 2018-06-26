import express from 'express';
const router = express.Router();

import registrationActivityRouter from './routes/registrationActivity';
import registrationItem from './routes/registrationItem';

router.use('/registrationActivity', registrationActivityRouter);
router.use('/registrationItem', registrationItem);

export default router;
