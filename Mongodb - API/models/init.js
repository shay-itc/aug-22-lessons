const { MongoClient } = require('mongodb');
const UsersDAO = require('./UsersDAO');
const TasksDAO = require('./TasksDAO');

module.exports.initDB = async function initDB() {

    try {
        const connection = await MongoClient.connect(process.env.MONGODB_URI)

        console.log('Connection to DB established');
        const db = connection.db(process.env.DB);
        await UsersDAO.injectDB(db);
        await TasksDAO.injectDB(db);

        return { db, connection };

    } catch (error) {

        console.log(error)
        console.log(`DB connection failed ${error}`);
        process.exit(1);
    }
}