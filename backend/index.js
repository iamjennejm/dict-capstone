const express = require('express'); const app = express(); 

const { Pool } = require('pg'); 
const pool = new Pool({ 
user: 'root', host: 'localhost', database: 'ugjobs', password: 'admin123', port: 5432, 
}); 

const apiRoutes = require('./routes'); app.use('/api', apiRoutes); 

const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});