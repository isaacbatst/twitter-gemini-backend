const { migrationActions } = require('fastexpress');

module.exports = {
  up: migrationActions.createTable('Tweets', Sequelize => ({
    message: Sequelize.STRING,
    favorite: Sequelize.BOOLEAN,
  })),
  down: migrationActions.dropTable('Tweets'),
};
