import { desc, eq } from "drizzle-orm";
import { getDb, db } from "./db";
import { newsletter, inquiries, leads, type NewNewsletter, type NewInquiry, type NewLead } from "./schema";

export async function insertNewsletter(data: NewNewsletter) {
  if (!db) {
    return { success: false, fallback: true, message: "Database not configured. Saved in demo mode." };
  }
  const client = getDb();
  const [created] = await client
    .insert(newsletter)
    .values(data)
    .onConflictDoNothing({ target: newsletter.email })
    .returning();
  return { success: true, data: created };
}

export async function insertInquiry(data: NewInquiry) {
  if (!db) {
    return { success: false, fallback: true, message: "Database not configured. Saved in demo mode." };
  }
  const client = getDb();
  const [created] = await client
    .insert(inquiries)
    .values(data)
    .returning();
  return { success: true, data: created };
}

export async function insertLead(data: NewLead) {
  if (!db) {
    return { success: false, fallback: true, message: "Database not configured. Saved in demo mode." };
  }
  const client = getDb();
  const [created] = await client
    .insert(leads)
    .values(data)
    .returning();
  return { success: true, data: created };
}

export async function getRecentSubscribers(limit = 10) {
  if (!db) return [];
  const client = getDb();
  return client
    .select()
    .from(newsletter)
    .orderBy(desc(newsletter.createdAt))
    .limit(limit);
}

export async function getRecentInquiries(limit = 10) {
  if (!db) return [];
  const client = getDb();
  return client
    .select()
    .from(inquiries)
    .orderBy(desc(inquiries.createdAt))
    .limit(limit);
}
