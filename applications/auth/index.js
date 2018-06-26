import express from 'express';
const router = express.Router();

import administratorUserRouter from './routes/administratorUser'
import getCurrentUserRouter from './routes/getCurrentUser';

router.use('/administratorUser', administratorUserRouter);
router.use('/getCurrentUser', getCurrentUserRouter);

export default router;

