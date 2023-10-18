// Import mysql2
import { createPool } from 'mysql2/promise';
import {
    DB_DATABASE,
    DB_PORT,
    DB_PASSWORD,
    DB_USER,
    DB_HOST,
} from './config.js';

//Create dB connection
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});
