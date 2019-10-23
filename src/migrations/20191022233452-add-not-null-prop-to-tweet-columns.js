"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .changeColumn("Tweets", "message", {
        type: Sequelize.STRING,
        allowNull: false
      })
      .then(() =>
        queryInterface.changeColumn("Tweets", "favorite", {
          type: Sequelize.BOOLEAN,
          allowNull: false
        })
      );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .changeColumn("Tweets", "message", {
        type: Sequelize.STRING,
        allowNull: true
      })
      .then(() =>
        queryInterface.changeColumn("Tweets", "favorite", {
          type: Sequelize.BOOLEAN,
          allowNull: true
        })
      );
  }
};
