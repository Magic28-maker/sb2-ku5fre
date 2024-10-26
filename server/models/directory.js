import db from '../db/schema.js';

export const DirectoryModel = {
  create: (data) => {
    const {
      practiceAreas,
      languages,
      education,
      ...mainData
    } = data;

    // Start a transaction
    const result = db.transaction(() => {
      // Insert main directory submission
      const directoryStmt = db.prepare(`
        INSERT INTO directory_submissions (
          bar_number, first_name, last_name, email, phone,
          firm, bio, address, city, zip, website, plan,
          latitude, longitude, county
        ) VALUES (
          @barNumber, @firstName, @lastName, @email, @phone,
          @firm, @bio, @address, @city, @zip, @website, @plan,
          @latitude, @longitude, @county
        )
      `);
      
      // Get geo coordinates and county from zip/city if available
      const geoData = mainData.zip || mainData.city ? 
        getGeoData(mainData.zip, mainData.city) : null;

      const submissionData = {
        ...mainData,
        latitude: geoData?.latitude || null,
        longitude: geoData?.longitude || null,
        county: geoData?.county || null
      };
      
      const info = directoryStmt.run(submissionData);
      const submissionId = info.lastInsertRowid;

      // Insert practice areas
      if (practiceAreas?.length) {
        const areaStmt = db.prepare(`
          INSERT INTO directory_practice_areas (directory_submission_id, practice_area)
          VALUES (?, ?)
        `);
        
        practiceAreas.forEach(area => {
          areaStmt.run(submissionId, area);
        });
      }

      // Insert languages
      if (languages?.length) {
        const langStmt = db.prepare(`
          INSERT INTO directory_languages (directory_submission_id, language)
          VALUES (?, ?)
        `);
        
        languages.forEach(lang => {
          langStmt.run(submissionId, lang);
        });
      }

      // Insert education
      if (education?.length) {
        const eduStmt = db.prepare(`
          INSERT INTO directory_education (
            directory_submission_id, institution, degree, year
          ) VALUES (?, ?, ?, ?)
        `);
        
        education.forEach(edu => {
          eduStmt.run(submissionId, edu.institution, edu.degree, edu.year);
        });
      }

      return submissionId;
    })();

    return result;
  },

  search: ({ location, radius, practiceArea, keyword }) => {
    let query = `
      SELECT 
        d.*,
        GROUP_CONCAT(DISTINCT pa.practice_area) as practice_areas,
        GROUP_CONCAT(DISTINCT l.language) as languages
      FROM directory_submissions d
      LEFT JOIN directory_practice_areas pa ON pa.directory_submission_id = d.id
      LEFT JOIN directory_languages l ON l.directory_submission_id = d.id
      WHERE d.status = 'active'
    `;

    const params = [];

    if (location) {
      // Get coordinates for the search location
      const searchGeo = getGeoData(null, location);
      
      if (searchGeo) {
        query += `
          AND (
            (
              6371 * acos(
                cos(radians(?)) * cos(radians(latitude)) *
                cos(radians(longitude) - radians(?)) +
                sin(radians(?)) * sin(radians(latitude))
              )
            ) <= ?
          )
        `;
        params.push(
          searchGeo.latitude,
          searchGeo.longitude,
          searchGeo.latitude,
          radius || 10 // Default to 10 miles if not specified
        );
      } else {
        // Fallback to text search if coordinates not found
        query += `
          AND (
            LOWER(city) LIKE ? OR 
            LOWER(zip) LIKE ? OR 
            LOWER(county) LIKE ?
          )
        `;
        const searchTerm = `%${location.toLowerCase()}%`;
        params.push(searchTerm, searchTerm, searchTerm);
      }
    }

    if (practiceArea) {
      query += ` AND EXISTS (
        SELECT 1 FROM directory_practice_areas 
        WHERE directory_submission_id = d.id 
        AND LOWER(practice_area) = ?
      )`;
      params.push(practiceArea.toLowerCase());
    }

    if (keyword) {
      query += `
        AND (
          LOWER(first_name) LIKE ? OR
          LOWER(last_name) LIKE ? OR
          LOWER(firm) LIKE ? OR
          LOWER(bio) LIKE ?
        )
      `;
      const searchTerm = `%${keyword.toLowerCase()}%`;
      params.push(searchTerm, searchTerm, searchTerm, searchTerm);
    }

    query += ` GROUP BY d.id ORDER BY d.created_at DESC`;

    const stmt = db.prepare(query);
    return stmt.all(params);
  },

  // ... rest of the existing methods ...
};