const monk = require('monk');
const connectionName = 'localhost:27017/messageboard';
const db = monk(connectionName);

module.exports = db;
