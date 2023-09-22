import express from 'express'; const app = express(); 

import { Pool } from 'pg'; 
const pool = new Pool({ 
user: 'root', host: 'localhost', database: 'ugjobs', password: 'admin123', port: 5432, 
}); 

import apiRoutes from './routes'; app.use('/api', apiRoutes); 

const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});