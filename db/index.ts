import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL as string;
const pool = postgres(connectionString, { max: 1 })
 
export const db = drizzle(pool)