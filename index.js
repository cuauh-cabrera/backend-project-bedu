//Express import
import express from 'express';
//Import dB
import { pool } from './db.js';

//Server setup
const app = express();
app.listen(3000);
console.log("Server is running on port 3000");

//Creating endpoints
app.get('/employees', (req, res) => res.send('Getting employee data'));
app.post('/employees', (req, res) => res.send('Adding employee data'));
app.put('/employees', (req, res) => res.send('Updating employee data'));
app.delete('/employees', (req, res) => res.send('Deleting employee data'));

//Connect dB
app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
});
