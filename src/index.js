//Express import
import express from 'express';

//Import routes
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

//Server setup
const app = express();
app.listen(3000);
console.log("Server is running on port 3000");

//Add routes
app.use(indexRoutes);
app.use(employeesRoutes);
