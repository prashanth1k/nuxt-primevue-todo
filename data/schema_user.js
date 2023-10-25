import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const user = sqliteTable("user", {
  id: integer("id").primaryKey(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  email: text("email").unique(),
  created: text("created").default(sql`CURRENT_TIMESTAMP`),
  updated: text("updated").default(sql`CURRENT_TIMESTAMP`),
});
