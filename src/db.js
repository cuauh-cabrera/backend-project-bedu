// Import mysql2
import {createPool} from 'mysql2/promise';

//Create dB connection
export const pool = createPool({
    host: 'localhost',
    user:'root',
    password:'brav0tang0',
    port: 3306,
    database: 'employeesdb'
});
