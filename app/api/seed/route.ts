import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletter, inquiries, leads } from "@/lib/schema";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!db) {
    return NextResponse.json({
      status: "fallback_mode",
      database: "unconfigured",
      message: "DATABASE_URL is not configured or empty. App running in mock/demo mode.",
      schema: "open_react",
      tables: ["newsletter", "inquiries", "leads"],
    });
  }

  try {
    // 1. Create schema if not exists
    await db.execute(sql`CREATE SCHEMA IF NOT EXISTS open_react;`);

    // 2. Create tables if not exist
    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS open_react.newsletter (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL UNIQUE,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS open_react.inquiries (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    await db.execute(sql`
      CREATE TABLE IF NOT EXISTS open_react.leads (
        id SERIAL PRIMARY KEY,
        email TEXT NOT NULL,
        source TEXT DEFAULT 'hero_cta',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `);

    // 3. Seed demo record if empty
    const existingCount = await db.select({ count: sql<number>`count(*)` }).from(newsletter);
    let seeded = false;

    if (Number(existingCount[0]?.count ?? 0) === 0) {
      await db.insert(newsletter).values({ email: "hello@example.com" }).onConflictDoNothing();
      await db.insert(inquiries).values({
        name: "Acme Product Team",
        email: "contact@acme.inc",
        message: "Interested in integrating Open React tools into our developer stack.",
      });
      await db.insert(leads).values({
        email: "lead@acme.inc",
        source: "seed_init",
      });
      seeded = true;
    }

    return NextResponse.json({
      status: "ok",
      database: "connected",
      schema: "open_react",
      tables: ["open_react.newsletter", "open_react.inquiries", "open_react.leads"],
      seeded,
      timestamp: new Date().toISOString(),
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Database initialization error";
    return NextResponse.json(
      {
        status: "error",
        schema: "open_react",
        error: message,
        fallback_active: true,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  if (!db) {
    return NextResponse.json({
      success: true,
      mode: "fallback",
      message: "Seeded mock data in memory (no DB connected)",
    });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const email = body.email || `lead-${Date.now()}@test.com`;

    const [newLead] = await db
      .insert(leads)
      .values({
        email,
        source: body.source || "api_seed_post",
      })
      .returning();

    return NextResponse.json({
      success: true,
      lead: newLead,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Seed failed";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
