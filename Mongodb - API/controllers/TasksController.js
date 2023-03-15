const TasksDAO = require('../models/TasksDAO');

module.exports = class UsersController {

    static async CreateTask(req, res) {

        try {

            const taskObject = req.body;
            taskObject.user_id = req.currentUser._id;

            const insertedTask = await TasksDAO.createTask(taskObject)

            return res.send({
                task_id: insertedTask.insertedId
            });

        } catch (e) {
            console.log(`Error in TasksController.CreateTask ${e}`);
            return res.status(500).json({
                success: false,
                message: e
            });
        }
    }

    static async TasksList(req, res) {

        try {

            const tasks = await TasksDAO.getUserTasks(req.currentUser._id);

            return res.json({
                list: tasks
            })

        } catch (e) {
            console.log(`Error in TasksController.CreateTask ${e}`);
            return res.status(500).json({
                success: false,
                message: 'unknown error'
            });
        }
    }

}