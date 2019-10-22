module.exports = (sequelize, DataTypes) => {
  const Tweets = sequelize.define(
    'Tweets',
    {
      message: DataTypes.STRING,
      favorite: DataTypes.BOOLEAN
    },
    {},
  );
  Tweets.associate = () => {};
  return Tweets;
};
