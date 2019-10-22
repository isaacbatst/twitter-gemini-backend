const { Resources } = require('fastexpress');
const Tweets = require('./resources/Tweets');

const routers = new Resources({
  namespace: '/api/v1/',
})
  .add('Tweets', Tweets)
  .getRouters();

module.exports = routers;
