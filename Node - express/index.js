const fs = require('fs');


// fs.writeFile('./file2.txt', 'This was written progrematically', function (err) {
//     console.log(err)
// })


// function writeToLog(level, text) {

//     fs.writeFileSync('./log.txt', `${level} - ${new Date()} - ${text} \n`, { flag: 'a+' });
// }

// writeToLog('error', 'this is an error')
// writeToLog('info', 'this is info')
// writeToLog('debug', 'this is debug')



// fs.readFile('./file.txt', { encoding: 'utf-8' }, function (err, data) {
//     if (err) {
//         // error loigc
//     }

//     console.log('Async ', data)
//     console.log('Async ', data.toString())
// });

// try {
//     const data = fs.readFileSync('./file.txt', { encoding: 'utf-8' });
//     console.log('Sync', data)
// } catch (e) {
//     console.log('errror', e)
// }

// fs.mkdirSync('./aaa')
// fs.writeFileSync('./aaa/users.json', 'Hi there!')

// fs.readFile('./users.json', { encoding: 'utf-8' }, function (err, data) {
//     if (err) {
//         return; 
//     } 

//     const users = JSON.parse(data);

//     console.log('Previus value', users['user3']);
//     users['user3'] = 'new password3';

//     fs.writeFileSync('./users.json', JSON.stringify(users))
// });
