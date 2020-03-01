const { server } = require('fastexpress');
const cors = require('cors');
const routes = require('./routes');

server.use(routes);
server.use(cors());

module.exports = server;
