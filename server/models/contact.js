import db from '../db/schema.js';

export const ContactModel = {
  create: (data) => {
    const stmt = db.prepare(`
      INSERT INTO contact_submissions (name, email, subject, message)
      VALUES (@name, @email, @subject, @message)
    `);
    
    return stmt.run(data);
  },

  getAll: () => {
    const stmt = db.prepare('SELECT * FROM contact_submissions ORDER BY created_at DESC');
    return stmt.all();
  },

  getById: (id) => {
    const stmt = db.prepare('SELECT * FROM contact_submissions WHERE id = ?');
    return stmt.get(id);
  }
};