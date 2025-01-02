import { createPool } from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import 'dotenv/config';

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export const db = drizzle(pool);
