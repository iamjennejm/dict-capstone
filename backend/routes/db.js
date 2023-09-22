/*import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

export const sql = postgres(process.env.DATABASE_URL);*/

import express from 'express'; 
const app = express(); 

import { Pool } from 'pg'; 
const pool = new Pool({ 
user: 'root', host: 'localhost', database: 'postgres', password: 'postgres', port: 5432, 
}); 

const connection = {
    pool,
    query: (...args) => {
      return pool.connect().then((client) => {
        return client.query(...args).then((res) => {
          client.release();
          return res.rows;
        });
      });
    },
  };

  process.postgresql = connection;

  if (callback) {
    callback(connection);
  }

export const sql = connection;

import apiRoutes from './routes'; app.use('/api', apiRoutes); 

const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});