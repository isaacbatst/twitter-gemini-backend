const { endpoint, validate } = require('fastexpress');
const database = require('../models');

const { Tweets: Model } = database;

module.exports = endpoint(
  Model,
  {
    message: {
      validation: validate.string,
    },
    favorite: {
      validation: validate.bool,
    }
  },
  database,
);
