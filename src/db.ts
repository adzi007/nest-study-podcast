import { createPool } from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

const pool = createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "test",
});

export const db = drizzle(pool);
