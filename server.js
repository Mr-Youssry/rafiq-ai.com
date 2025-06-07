const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/waitlist', async (req, res) => {
  const { fullName, email, role, country, message } = req.body;

  if (!fullName || !email || !role || !country) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transport.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: 'waitlist@rafiq-ai.com',
      subject: 'New Waitlist Submission',
      text: `Name: ${fullName}\nEmail: ${email}\nRole: ${role}\nCountry: ${country}\nMessage: ${message || ''}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
