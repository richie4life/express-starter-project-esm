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
// const COLLECTION = 'deleteTest';

// const result = await db.collection(COLLECTION).find({},{
//   sort: {
//     weight: 1,
//     name: 1
//   },
//   projection: {
//     _id: 0,
//     name: 1,
//     weight: 1
//   }
// }).toArray();

// const result = await db.collection(COLLECTION).updateMany({
//   //id: "86384d8c-701d-4623-9e2b-a3fcd5c0bb77"
//   color: 'red'
// }, {
//   $set: {
//     wasUpdated: true
//   }
// })


//   const result = await db.collection(COLLECTION).replaceOne({
//   id: 'abc123'
// }, {
//     color: "green",
//     weight: 7,
//     wasUpdated: true
//   });

//     const result = await db.collection(COLLECTION).findOneAndUpdate({
//   id: 'abc123'
// }, {
//   $set: {
//     color: "CHARTREUSE",
//     weight: 999999,
//     wasUpdated: false,
//     foundAndUpdated: true
//   }
//   },{
//     returnDocument: 'after'
//   });


//     const result = await db.collection(COLLECTION).updateOne({
//   id: '123-456-0943',
//   age: 40
// }, {
//   $set: {
//     fname: "Jane",
//     lname: "Bear"
//   }
//   },{
//     upsert: true    
//   });


//     const result = await db.collection(COLLECTION).deleteOne({
// id: '123-456-0943',
// });

//   const result = await db.collection(COLLECTION).deleteMany({
// color: 'red',
// });

//Do not do this, it will delete every data in the collection, this is just for testing purposes
// const result = await db.collection(COLLECTION).deleteMany({});


const result = await db.collection(COLLECTION).findOneAndDelete({
  id: "123-456-0943"
},
);

console.log(result);



//   const insertResult = await db.collection(COLLECTION).insertOne({
//     id: 0,
//     name: 'widget11',
//     color: 'blue',
//     size: 15,
//     inStock: true,
//     tags: ['tag1', 'tag2', 'tag3'],
//     createDate: new Date(),
//   });
// console.log(`Inserted ${insertResult.insertedCount} record with ID ${insertResult.insertedId}`);

// const multiInsertResult = await db.collection(COLLECTION).insertMany([ { a: true}, { b: false } ]);
// console.log(`Inserted ${multiInsertResult.insertedCount} records`);
