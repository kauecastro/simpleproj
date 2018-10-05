import express from 'express';
const router = express.Router();

import { getAll } from '../controllers/cards.js';

router.get('/all', getAll);

module.exports = router;

