import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL || "";

// Supabase transaction pooler requires prepare: false
const client = connectionString
  ? postgres(connectionString, {
      prepare: false,
      max: 10,
      idle_timeout: 20,
      connect_timeout: 10,
    })
  : null;

export const db = client ? drizzle(client, { schema }) : null;

export function getDb() {
  if (!db) {
    throw new Error(
      "Database connection is not configured. Please set DATABASE_URL."
    );
  }
  return db;
}
