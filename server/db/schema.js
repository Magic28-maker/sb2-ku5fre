import Database from 'better-sqlite3';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new Database(join(__dirname, 'database.sqlite'));

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create tables
const schema = `
  -- Contact submissions
  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Directory submissions
  CREATE TABLE IF NOT EXISTS directory_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bar_number TEXT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    profile_photo TEXT,
    firm TEXT,
    bio TEXT,
    address TEXT,
    city TEXT,
    zip TEXT,
    county TEXT,
    latitude REAL,
    longitude REAL,
    website TEXT,
    plan TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Create index for geographical searches
  CREATE INDEX IF NOT EXISTS idx_directory_geo 
  ON directory_submissions(latitude, longitude);

  -- Create index for text searches
  CREATE INDEX IF NOT EXISTS idx_directory_location 
  ON directory_submissions(city, zip, county);

  -- Practice areas for directory submissions
  CREATE TABLE IF NOT EXISTS directory_practice_areas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    directory_submission_id INTEGER NOT NULL,
    practice_area TEXT NOT NULL,
    FOREIGN KEY (directory_submission_id) 
      REFERENCES directory_submissions(id) 
      ON DELETE CASCADE
  );

  -- Languages for directory submissions
  CREATE TABLE IF NOT EXISTS directory_languages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    directory_submission_id INTEGER NOT NULL,
    language TEXT NOT NULL,
    FOREIGN KEY (directory_submission_id) 
      REFERENCES directory_submissions(id) 
      ON DELETE CASCADE
  );

  -- Education entries for directory submissions
  CREATE TABLE IF NOT EXISTS directory_education (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    directory_submission_id INTEGER NOT NULL,
    institution TEXT NOT NULL,
    degree TEXT NOT NULL,
    year TEXT,
    FOREIGN KEY (directory_submission_id) 
      REFERENCES directory_submissions(id) 
      ON DELETE CASCADE
  );

  -- Oregon ZIP codes and geo data
  CREATE TABLE IF NOT EXISTS oregon_geo_data (
    zip TEXT PRIMARY KEY,
    city TEXT NOT NULL,
    county TEXT NOT NULL,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL
  );
`;

export const initializeDatabase = () => {
  // Execute schema
  db.exec(schema);
  console.log('Database schema initialized');
};

export default db;