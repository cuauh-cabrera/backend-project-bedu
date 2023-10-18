import { Router } from "express";
import {createEmployee, deleteEmployee, getEmployee, getEmployeeId, updateEmployee} from '../controllers/employees.controller.js';

//Route endpoints
const router = Router();

router.get('/employees/:id',getEmployeeId);
router.get('/employees', getEmployee);
router.post('/employees', createEmployee);
router.patch('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);

export default router