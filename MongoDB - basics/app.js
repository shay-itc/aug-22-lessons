require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');

const client = new MongoClient(process.env.MONGODB_URL);

async function run() {

    await client.connect();
    const db = client.db('ITC');
    // await db.createCollection('users');
    const collection = db.collection('users');

    // Insert array to users collection
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

    // insert one at a time
    // for (const object of usersObject) {
    //     const insertResponse = await collection.insertOne(object);
    //     console.log('insertResponse', insertResponse)
    // }

    // insert bulk
    // const insertResponse = await collection.insertMany(usersObject);
    // console.log('insertResponse', insertResponse)

    // search by age and name - using toArray()
    // const results = await collection.find({
    //     age: {
    //         $gte: 30
    //     },
    //     first_name: { $eq: "Different" }
    // }).toArray();

    // adding and or expression
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

    // search a part of string using regex
    // const results = await collection.find({
    //     first_name: { $regex: /first/i }
    // }).toArray();
    // console.log('results', results)


    // $eq = equal
    // $gt = greater than
    // $lt = lower than
    // $gte = greater than or equal
    // $lte = lower than or equal

    // using cursors
    // const results = collection.find({});
    // while (await results.hasNext()) {
    //     console.log(await results.next())
    // }

    // updating a document 
    // const updateResponse = await collection.updateOne({
    //     _id: ObjectId("63d6a5ab53012f3e37599813")
    // }, {
    //     $set: {
    //         new_key: "test 35"
    //     }
    // });
    // console.log(updateResponse)

    // deleting a document 
    // const deleteResponse = await collection.deleteOne({
    //     age: { $eq: 24 }
    // })
    // console.log('deleteResponse', deleteResponse)

    // using aggregations 
    const results = await db.collection('analytics').aggregate([
        { // step 1
            $match: {
                user_id: "9b691c8e-2a13-4049-9e8d-08bc26c2557b",
                // page: "home"
            }
        }, { // step 2
            $group: {
                _id: null,
                count: { $sum: 1 }
            }
        }]).toArray()

    console.log('results', results)

    client.close()
}


run();
