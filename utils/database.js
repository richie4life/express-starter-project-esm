import { MongoClient } from 'mongodb';
// import { config } from 'winston';

class Database {
  client = null;
  db = null
  constructor() { }

  setup = async (config) => {

    this.client = new MongoClient(config.url, {
      appName: config.appName,
      minPoolSize: config.minPoolSize,
      maxPoolSize: config.maxPoolSize,
    });

    await this.client.connect();
    this.db = this.client.db(config.database);
  };
}

export const database = new Database();




/*
// import dns from 'node:dns'; dns.setServers(['1.1.1.1', '8.8.8.8']); //This is required to resolve the hostname of the MongoDB Atlas cluster, if you are using it. If you are using a local MongoDB instance, you can remove this line.
import { MongoClient } from 'mongodb';
// Do NOT COMMIT
//Convert to nv config
//DO NOT DO THIS
// const url = 'mongodb+srv://ARCA2026:2AfsjADOwv4LY7CU@arca-2026.hfk5nir.mongodb.net/';
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url, {
  appName: 'ChickensAPI',
  minPoolSize: 2,
  maxPoolSize: 10,
});

  await client.connect();
  const db = client.db('arca');
  const COLLECTION = 'widgets';


      const result = await db.collection(COLLECTION).findOneAndDelete({
      id: "123-456-0943"},
    );

  console.log(result);
*/