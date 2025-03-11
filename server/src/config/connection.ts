import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI: string | undefined = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error(" MONGO_URI is not defined! Ensure it's set in Render's environment variables.");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => console.log(' Connected to MongoDB Atlas - cleanDB'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

export default mongoose.connection;
