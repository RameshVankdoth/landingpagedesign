const { MongoClient } = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;
const collectionName = process.env.COLLECTION_NAME;

async function fetchpanes() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const cursor = collection.find().sort({ priority: 1 }); // Sort by priority
        const results = await cursor.toArray();

        return results;
    } catch (err) {
        console.error("Error fetching data:", err);
        throw err;
    } finally {
        await client.close();
    }
}

module.exports = { fetchpanes };
