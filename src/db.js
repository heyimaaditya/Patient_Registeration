import { PGlite } from '@electric-sql/pglite';

const db = new PGlite('idb://patients-db');

export async function initDB() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS patients (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      age INTEGER NOT NULL,
      email TEXT NOT NULL,
      registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

export default db;
