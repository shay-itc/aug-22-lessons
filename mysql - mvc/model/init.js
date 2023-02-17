const mysql = require('mysql2/promise');
const CustomersDAO = require('./CustomersDAO');

let connection;

module.exports.initDB = async () => {

    connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DB,
        multipleStatements: true
    });

    console.log('Connection Made')

    CustomersDAO.InjectConnection(connection)

}

module.exports.closeConneciton = async () => {
    connection.closeConneciton();
}