require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URL);

async function run() {

    await client.connect();
    const db = client.db('ITC');
    // await db.createCollection('users');
    const collection = db.collection('users');

    // const usersObject = [{
    //     first_name: "First 1",
    //     last_name: "Last 1",
    //     age: 23
    // }, {
    //     first_name: "First 2",
    //     last_name: "Last 2",
    //     age: 34
    // }, {
    //     first_name: "First 3",
    //     last_name: "Last 3",
    //     age: 30
    // }
    // ]

    // insert one
    // for (const object of usersObject) {
    //     const insertResponse = await collection.insertOne(object);
    //     console.log('insertResponse', insertResponse)
    // }

    // insert bulk
    // const insertResponse = await collection.insertMany(usersObject);
    // console.log('insertResponse', insertResponse)

    const results = await collection.find({
        age: {
            $gte: 30
        },
        // first_name: { $eq: "Different" }
    }).toArray();

    // collection.find({$or: [
    //     {
    //         age: { $eq: 30 }
    //     },
    //     {
    //         age: { $eq: 40 },
    //         first_name: { $eq: 'whatever' }
    //     },
    //     {
    //         age: { $eq: 50 }
    //     }
    // ]})

    // (age === 30) || (age === 40 && first_name === 'whatever') || (age === 50)

    // $eq = equal
    // $gt = greater than
    // $lt = lower than
    // $gte = greater than or equal
    // $lte = lower than or equal


    // find all of the users that their age is more than 25


    console.log(results)

    // const results = collection.find({});

    // while (await results.hasNext()) {
    //     console.log(await results.next())
    // }

    client.close()
}


run();

// create a collection called "users"
// insert the following object into the database 

// [{
//     first_name: "First 1",
//     last_name: "Last 1",
//     age: 23
// }, {
//     first_name: "First 2",
//     last_name: "Last 2",
//     age: 34
// }, {
//     first_name: "First 3",
//     last_name: "Last 3",
//     age: 30
// }
// ]
