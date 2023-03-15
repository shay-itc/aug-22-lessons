const jwt = require('jsonwebtoken');
const UsersDAO = require('../models/UsersDAO')

module.exports.AuthMiddleware = async function AuthMiddleware(req, res, next) {

    try {

        let token = req.headers['authorization'];

        if (!token) {
            return res.status(401).send();
        }

        token = token.replace('Bearer ', '');

        const tokenData = jwt.verify(token, process.env.JWT_SECRET)

        if (!tokenData) {
            return res.status(401).send();
        }

        const userData = await UsersDAO.getUserById(tokenData.user_id);

        if (!userData) {
            return res.status(401).send();
        }

        req.currentUser = userData;

        next();
    } catch (e) {
        console.log(e)
        return res.status(500).send();
    }
}