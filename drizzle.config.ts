import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./db/migrations/",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },

  // security major
  verbose: true, // logs the queries and mutations
  strict: true, // asks confirmations before migrations,
});
