const { server } = require('fastexpress');
const cors = require('cors');
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();

server.use(routes);
server.use(cors());

const port = process.env.PORT || 3001;

server.listen(port);

module.exports = server;
