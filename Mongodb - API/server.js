const { app } = require('./app.js')
const { initDB } = require('./models/init')

initDB().then(() => {
    app.listen(3000, async () => {
        console.log('Server is running on port 3000')
    })
})