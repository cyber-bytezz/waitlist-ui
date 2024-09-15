// pages/api/sendEmail.js

import { Client } from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    
    const client = new Client();
    client.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: email,
      from: 'welcome@hyperflux.com',
      subject: 'Welcome to the Hyperflux Waitlist!',
      text: `Hello!

Thank you for joining the Hyperflux waitlist. We’re excited to have you on board! Stay tuned for updates and exclusive news about Hyperflux.

Best,
The Hyperflux Team`,
      html: `<p>Hello!</p><p>Thank you for joining the Hyperflux waitlist. We’re excited to have you on board! Stay tuned for updates and exclusive news about Hyperflux.</p><p>Best,<br>The Hyperflux Team</p>`,
    };

    try {
      await client.send(msg);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
