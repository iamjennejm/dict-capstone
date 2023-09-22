import pkg from 'pg';
const { Pool } = pkg;

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

  return true;
};

export default {
  connectToDB,
};