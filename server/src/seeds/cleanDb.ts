import models from '../models/index.js';
import db from '../config/connection.js';
import { Db, CollectionInfo } from "mongodb"; // Import the correct type

export default async function cleanDb(modelName: "Question", collectionName: string): Promise<void> {
  try {
    // Ensure models and db exist before proceeding
    if (!models || !models[modelName] || !models[modelName].db || !models[modelName].db.db) {
      throw new Error(`Database connection is missing for model: ${modelName}`);
    }

    const database: Db = models[modelName].db.db; // Ensure database is assigned properly

    // Check if the collection exists
    const collections: CollectionInfo[] = await database.listCollections({ name: collectionName }).toArray();

    if (collections.length > 0) {
      // Ensure db.dropCollection is available
      if (!db || typeof db.dropCollection !== 'function') {
        throw new Error(`dropCollection function is missing on db.`);
      }
      await db.dropCollection(collectionName);
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`Error in cleanDb: ${err.message}`);
    } else {
      console.error(`Unknown error occurred in cleanDb.`);
    }
    throw err; // Rethrow the error for further handling
  }
}
