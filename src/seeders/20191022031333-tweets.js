const faker = require('faker');

module.exports = {
  up: async queryInterface => {
    await queryInterface.bulkInsert('Tweets', [
      {
        message: faker.lorem.words(),
        favorite: faker.random.boolean(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: queryInterface => {
    queryInterface.bulkDelete('Tweets');
  },
};
