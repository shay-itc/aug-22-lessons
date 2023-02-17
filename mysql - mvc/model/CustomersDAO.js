module.exports = class CustomersDAO {

    static dbConnection;

    static InjectConnection(connection) {

        if (!connection) return;

        CustomersDAO.dbConnection = connection;
    }

    static async ListCustomers(sortKey = 'id', order = 'asc', page = 1) {

        const perPage = 5;
        const offset = (page * perPage) - perPage;

        if (!['id', 'email', 'name', 'birth_date'].includes(sortKey)) {
            sortKey = 'id';
        }

        if (!['asc', 'desc'].includes(order)) {
            sortKey = 'asc';
        }

        const [rows] = await CustomersDAO.dbConnection.query(`select * from customers order by ${sortKey} ${order} limit ? offset ?`, [perPage, offset])

        // const [rows2] = await CustomersDAO.dbConnection.query('select count(*) as total_customers from customers');
        // const numberOfPages = Math.ceil(rows2[0].total_customers / perPage);

        // return { results: rows, pages: numberOfPages };

        return rows;
    }

    static async CreateCustomer(customerObject) {

        const { name, email, phone, birth_date } = customerObject;

        const [result] = await CustomersDAO.dbConnection.query(`insert into customers (name, email, phone, birth_date)
        value
        (?, ?, ?, ?)`, [name, email, phone, birth_date])

        console.log('result', result)

        if (result.insertId) {
            return result.insertId;
        }

        return false;
    }
}
