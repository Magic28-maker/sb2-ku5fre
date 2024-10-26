import express from 'express';
import multer from 'multer';
import * as XLSX from 'xlsx';
import { DirectoryModel } from '../models/directory.js';

const router = express.Router();

// Configure multer for file upload
const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.mimetype === 'application/vnd.ms-excel') {
      cb(null, true);
    } else {
      cb(new Error('Only Excel files are allowed'));
    }
  }
});

// Import lawyers from Excel
router.post('/import-lawyers', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Read Excel file
    const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(worksheet);

    // Validate and transform data
    const lawyers = data.map(row => {
      // Validate required fields
      if (!row['First Name'] || !row['Last Name'] || !row['Phone']) {
        throw new Error(`Missing required fields for lawyer: ${row['First Name']} ${row['Last Name']}`);
      }

      return {
        barNumber: row['Bar Number'] || null,
        firstName: row['First Name'],
        lastName: row['Last Name'],
        email: row['Email'] || null,
        phone: row['Phone'],
        profilePhoto: row['Profile Photo URL'] || null,
        firm: row['Firm Name'],
        practiceAreas: row['Practice Areas']?.split(',').map(area => area.trim()),
        experience: row['Years of Experience'],
        bio: row['Bio'],
        address: row['Address'],
        city: row['City'],
        zip: row['ZIP'],
        website: row['Website'],
        languages: row['Languages']?.split(',').map(lang => lang.trim()),
        education: row['Education']?.split(';').map(edu => {
          const [institution, degree, year] = edu.split(',').map(s => s.trim());
          return { institution, degree, year };
        })
      };
    });

    // Insert lawyers into database
    const results = [];
    for (const lawyer of lawyers) {
      try {
        const id = await DirectoryModel.create({
          ...lawyer,
          plan: 'basic', // Default plan
          status: 'active' // Default status
        });
        results.push({ success: true, id, lawyer });
      } catch (error) {
        results.push({ success: false, error: error.message, lawyer });
      }
    }

    res.json({
      message: 'Import completed',
      total: lawyers.length,
      successful: results.filter(r => r.success).length,
      failed: results.filter(r => !r.success).length,
      results
    });

  } catch (error) {
    console.error('Import error:', error);
    res.status(500).json({ error: 'Failed to import data' });
  }
});

export const adminRouter = router;