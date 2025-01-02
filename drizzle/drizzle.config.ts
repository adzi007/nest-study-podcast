import { mysqlTable, serial, int, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable('users', {
    id: int().primaryKey().autoincrement(),
    name: varchar({ length: 255 }).notNull(),
    age: int().notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
});
