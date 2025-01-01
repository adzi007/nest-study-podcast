// import type { Config } from "drizzle-kit";

// export default {
//     schema: "./drizzle/drizzle.config.ts", // Path to schema
//     out: "./drizzle/migrations",          // Directory for migrations
//     connectionString: process.env.DATABASE_URL, // Connection string
// } satisfies Config;

import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './drizzle/drizzle.config.ts',
  dialect: 'mysql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});

