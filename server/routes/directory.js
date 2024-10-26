import express from 'express';
import { body, validationResult } from 'express-validator';
import { sendEmail } from '../utils/email.js';
import { DirectoryModel } from '../models/directory.js';

const router = express.Router();

// Validation middleware
const validateDirectorySubmission = [
  // Verification step
  body('barNumber').trim().notEmpty().withMessage('Bar number is required'),
  body('firstName').trim().notEmpty().withMessage('First name is required'),
  body('lastName').trim().notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  
  // Profile step
  body('firm').optional().trim(),
  body('practiceAreas').optional().isArray(),
  body('experience').optional().trim(),
  body('bio').optional().trim(),
  body('address').optional().trim(),
  body('city').optional().trim(),
  body('zip').optional().trim(),
  
  // Optional fields
  body('website').optional().isURL().withMessage('Invalid website URL'),
  body('languages').optional().isArray(),
  body('education').optional().isArray(),
  body('certifications').optional().isArray()
];

// Directory submission endpoint
router.post('/submit', validateDirectorySubmission, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Save to database
    const submissionId = DirectoryModel.create(req.body);

    // Send notification email to admin
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: 'New Directory Listing Submission',
      text: `
        New directory listing submission:
        
        Attorney Information:
        Name: ${req.body.firstName} ${req.body.lastName}
        Bar Number: ${req.body.barNumber}
        Email: ${req.body.email}
        Phone: ${req.body.phone}
        
        Firm: ${req.body.firm}
        Practice Areas: ${req.body.practiceAreas?.join(', ')}
        Experience: ${req.body.experience}
        
        Address:
        ${req.body.address}
        ${req.body.city}, OR ${req.body.zip}
        
        Selected Plan: ${req.body.plan}
      `
    });

    // Send confirmation email to attorney
    await sendEmail({
      to: req.body.email,
      subject: 'Directory Listing Submission Received',
      text: `
        Dear ${req.body.firstName} ${req.body.lastName},

        Thank you for submitting your listing to Oregon Legal Directory. We have received your submission and will review it shortly.
        
        Next Steps:
        1. Our team will verify your bar membership
        2. We'll review your profile information
        3. You'll receive a confirmation email once your listing is approved
        
        If you selected a premium plan, we'll contact you separately regarding payment.

        Best regards,
        Oregon Legal Directory Team
      `
    });

    res.status(200).json({ 
      message: 'Directory submission received successfully',
      id: submissionId
    });
  } catch (error) {
    console.error('Directory submission error:', error);
    res.status(500).json({ 
      error: 'Failed to process directory submission' 
    });
  }
});

export const directoryRouter = router;