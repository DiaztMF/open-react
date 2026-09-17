import { pgSchema, serial, text, timestamp } from "drizzle-orm/pg-core";

export const openReactSchema = pgSchema("open_react");

export const newsletter = openReactSchema.table("newsletter", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const inquiries = openReactSchema.table("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export const leads = openReactSchema.table("leads", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  source: text("source").default("hero_cta"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

export type Newsletter = typeof newsletter.$inferSelect;
export type NewNewsletter = typeof newsletter.$inferInsert;

export type Inquiry = typeof inquiries.$inferSelect;
export type NewInquiry = typeof inquiries.$inferInsert;

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
