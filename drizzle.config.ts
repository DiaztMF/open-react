import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  schemaFilter: ["open_react"],
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});
