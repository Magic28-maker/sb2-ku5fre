import { config } from 'dotenv';
import Database from 'better-sqlite3';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

config();

const __dirname = dirname(fileURLToPath(import.meta.url));

// In production, use the mounted volume path
const dataDir = process.env.NODE_ENV === 'production' 
  ? '/app/data'
  : join(__dirname, '../data');

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = join(dataDir, 'database.sqlite');

const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

export default db;