import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const todo = sqliteTable("todo", {
  id: integer("id").primaryKey(),
  title: text("title"),
  status: text("status"),
  created: text("created").default(sql`CURRENT_TIMESTAMP`),
  updated: text("updated").default(sql`CURRENT_TIMESTAMP`),
});
