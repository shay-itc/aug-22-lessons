const CustomersDAO = require('../model/CustomersDAO');

module.exports = class CustomersController {

    static async ListCustomers(req, res) {

        try {

            const { sortKey, order, page } = req.params;

            const results = await CustomersDAO.ListCustomers(sortKey, order, page);

            return res.json({
                customers: results,
                // pages: results.pages
            })

        } catch (e) {
            console.log('Error in CustomersController.ListCustomers ', e);
            return res.status(500).send();
        }
    }

    static async CreateCustomer(req, res) {
        try {

            const customerObject = req.body;

            const customerId = await CustomersDAO.CreateCustomer(customerObject);

            return res.json({
                customer_id: customerId
            })

        } catch (e) {
            console.log('Error in CustomersController.CreateCustomer ', e);
            return res.status(500).send();
        }
    }
}