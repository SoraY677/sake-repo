import type { Config } from "drizzle-kit";
import path from "path";

export const PROJECT_DIR = "../..";
export const SCHEMA_PATH_WILDCARD = "./src/schema/*";
export const TRANSLATE_OUT_DIR = "./query";
export const MIGRATION_DB_PATH = "./result/main.sqlite3";
export const MIGRATION_ORIGIN_DB_PATH = path.join(
  PROJECT_DIR,
  process.env.DB_FILE_PATH ?? "./data/main.sqlite3"
);

export default {
  dialect: "sqlite",
  schema: SCHEMA_PATH_WILDCARD,
  out: TRANSLATE_OUT_DIR,
  dbCredentials: {
    url: MIGRATION_DB_PATH,
  },
} satisfies Config;
