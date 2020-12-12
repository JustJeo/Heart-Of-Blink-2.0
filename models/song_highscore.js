'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class song_highscore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  song_highscore.init({
    songId: DataTypes.INTEGER,
    highscoreId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'song_highscore',
  });
  return song_highscore;
};