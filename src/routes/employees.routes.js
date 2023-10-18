import { Router } from "express";

//Route endpoints
const router = Router();

router.get('/employees', (req, res) => res.send('Getting employee data'));
router.post('/employees', (req, res) => res.send('Adding employee data'));
router.put('/employees', (req, res) => res.send('Updating employee data'));
router.delete('/employees', (req, res) => res.send('Deleting employee data'));

export default router