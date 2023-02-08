const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken');
const UsersDAO = require('../models/UsersDAO');
const { RegisterValidation, LoginValidation } = require('../validations/UsersValidations');

module.exports = class UsersController {

    static async Register(req, res) {

        try {
            const validRequest = RegisterValidation(req.body);

            if (!validRequest) {
                return res.status(400).json({
                    success: false,
                    message: 'Please fill all fields'
                })
            }

            // const userObject = req.body;
            const userObject = {
                username: req.body.username,
                password: req.body.password,
            }

            const existingUser = await UsersDAO.getUserByUsername(userObject.username);
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: 'Please select a different username'
                })
            }

            userObject.password = sha256(userObject.password);

            await UsersDAO.createUser(userObject)

            return res.json(req.body)

        } catch (e) {
            console.log(`Error in UsersController.Register ${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }

    static async Login(req, res) {
        try {

            const validRequest = LoginValidation(req.body)

            if (!validRequest) {
                return res.status(400).json({
                    success: false,
                    message: 'Please fill all fields'
                })
            }

            const user = await UsersDAO.getUserByUsername(req.body.username);
            if (!user || (user.password != sha256(req.body.password))) {
                return res.status(400).json({
                    success: false,
                    message: 'Wrong username or password'
                })
            }

            await UsersDAO.getUserById("63e3d3551acd7e853675b95d")

            const token = jwt.sign({
                user_id: user._id,
                username: user.username
            }, process.env.JWT_SECRET);

            return res.json({
                token: token
            })

        } catch (e) {
            console.log(`Error in UsersController.Login ${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }

    static async ResetPassword() {

    }

    static async UpdateProfile() {

    }
}
