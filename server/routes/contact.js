import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendEmail } from '../utils/email.js';
import { ContactModel } from '../models/contact.js';

const router = express.Router();

// Validation middleware
const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
];

// Contact form submission endpoint
router.post('/', validateContact, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    // Save to database
    const result = ContactModel.create({
      name,
      email,
      subject,
      message
    });

    // Send notification email
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `
    });

    // Send confirmation email to user
    await sendEmail({
      to: email,
      subject: 'Thank you for contacting Oregon Legal Directory',
      text: `
        Dear ${name},

        Thank you for contacting Oregon Legal Directory. We have received your message and will respond shortly.

        Best regards,
        Oregon Legal Directory Team
      `
    });

    res.status(200).json({ 
      message: 'Contact form submitted successfully',
      id: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      error: 'Failed to process contact form submission' 
    });
  }
});

export const contactRouter = router;