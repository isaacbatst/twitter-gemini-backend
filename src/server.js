const { server } = require('fastexpress');
const cors = require('cors');
const routes = require('./routes');

server.use(routes);
server.use(cors());

const port = process.env.PORT || 3001;

server.listen(port);

module.exports = server;
