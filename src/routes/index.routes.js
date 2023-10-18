import { Router } from "express";
//Import dB
import { pool } from '../db.js';

const router = Router()
//Connect dB
router.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
});

export default router;