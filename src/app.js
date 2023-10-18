//Express import
import express from 'express';

//Import routes
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js';

//Server setup
const app = express();

app.use(express.json())

app.use(indexRoutes);
app.use('/api', employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message:'Endpoint Not Found'
    })
})

export default app;
