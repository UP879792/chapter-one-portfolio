import type { VercelRequest, VercelResponse } from '@vercel/node';
import { drizzle } from 'drizzle-orm/mysql2';
import { bookingDemos } from '../drizzle/schema';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, service, date, timeSlot } = req.body;

    // Validate input
    if (!name || !email || !service || !date || !timeSlot) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    // Connect to database
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL not configured');
      return res.status(500).json({
        error: 'Database not configured'
      });
    }

    const db = drizzle(process.env.DATABASE_URL);

    // Insert booking
    await db.insert(bookingDemos).values({
      name: String(name),
      email: String(email),
      service: String(service),
      date: new Date(date),
      timeSlot: String(timeSlot)
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Booking error:', error);
    return res.status(500).json({
      error: 'Failed to create booking'
    });
  }
}
