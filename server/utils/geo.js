import db from '../db/schema.js';

export const getGeoData = (zip, city) => {
  let stmt;
  let params;

  if (zip) {
    stmt = db.prepare(`
      SELECT zip, city, county, latitude, longitude
      FROM oregon_geo_data
      WHERE zip = ?
    `);
    params = [zip];
  } else if (city) {
    stmt = db.prepare(`
      SELECT zip, city, county, latitude, longitude
      FROM oregon_geo_data
      WHERE LOWER(city) = LOWER(?)
      LIMIT 1
    `);
    params = [city];
  } else {
    return null;
  }

  return stmt.get(params);
};