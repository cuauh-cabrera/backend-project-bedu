import {pool} from '../db.js';

export const getEmployee = (req, res) => res.send('Getting employee data');

export const createEmployee = async(req, res) => {
    const {name, salary} = req.body
    const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES(?, ?)', [name, salary])
    res.send({
        id: rows.insertId,
        name,
        salary,
    })
} 

export const updateEmployee = (req, res) => res.send('Updating employee data');

export const deleteEmployee = (req, res) => res.send('Deleting employee data');