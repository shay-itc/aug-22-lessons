let tasksCollection;

module.exports = class TasksDAO {

    static async injectDB(connection) {

        if (!connection) return;

        try {

            tasksCollection = await connection.collection('tasks');

        } catch (e) {
            console.log(`Could not establish connection to tasks collection ${e}`);
        }

    }

    static async createTask(taskObject) {
        taskObject.created_at = new Date();
        return await tasksCollection.insertOne(taskObject)
    }

    static async getUserTasks(userId) {
        return await tasksCollection.find({ user_id: userId }).toArray();
    }
}