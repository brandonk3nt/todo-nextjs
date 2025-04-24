import { uuid, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const tasksTable = pgTable("tasks", {
  id: uuid().notNull().primaryKey().defaultRandom(),
  title: text().notNull(),
  description: text(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
});
