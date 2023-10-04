import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();

export const sql = postgres(process.env.DATABASE_URL, { ssl: 'require' }); 

import express from "express";
const app = express(); 

/*import express from "express";
import pkg from 'pg';
const { Pool } = pkg;

const app = express(); 

const connectToDB = async () => {
  const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
  });

  const client = await pool.connect();
  client.release();
  console.log(client);

pool.connect(function (err, client) {
    if (err) {
      //DB not running on first boot
      console.log("no db on startup", err.code);
    } else {
      console.log("connected.");
    }
});



  return pool;
};

export const sql = connectToDB;

const pool = new Pool({ 
user: 'postgres', host: 'localhost', database: 'postgres', password: 'postgres', port: 5432
}); 

*/

app.listen(3000, () => {
  console.log('App running at http://localhost:3000');
});

const PORT = process.env.PORT || 3001; 
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});